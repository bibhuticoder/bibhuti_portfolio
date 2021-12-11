---
title: OTP Vefification with Vonage
excerpt: OTP verification has become a common feature of modern web and mobile applications..
createdAt: 2021-05-30
tags: JavaScript, Server, OTP
thumbnail: https://miro.medium.com/max/1400/1*LomylmIzuMa3eo9hwkcxqQ.jpeg
caption: Photo by <a href="https://unsplash.com/@firmbee">Firmbee.com</a> on Unsplash
---

OTP verification has become a common feature of modern web and mobile applications. Whether it be user registration, multi-factor authentication or password change mechanism, OTP verification seems to be the perfect choice. Also, SMS or phone call verifications are considered more secure & reliable than email links.

In this article, I will explain Vonage’s Verification API integrated with Node.js (Express) server. It also provides an OTP feature, so you don’t have to reinvent the wheel every time. You can check more info here.

Let’s begin with a very basic express server.

```javascript
const express = require('express')
const app = express()
const port = 3000
const { requestCode, verifyOtp, cancelOtp } = require("./vonage.service.js");
app.post('/api/request-token', (req, res) => {
    //...
})
app.post('/api/verify-token', (req, res) => {
    //...
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
```

The **server.js** file contains a very basic web server with 2 routes.
- /api/request-token
- /api/verify-token

Business logic for each endpoint are inside `vonage.service.js`. The service file uses `@vonage/server-sdk`; official JS library for Vonage API. `Vonage API Key` and `API Secret` can be obtained on dashboard once subscribed for the service.

Service file has 3 methods: for requesting, verifying and cancelling token.

```javascript
constVonage = require('@vonage/server-sdk');
constvonage = newVonage({
    apiKey: process.env.VONAGE_KEY,
    apiSecret: process.env.VONAGE_SECRET
});
export const requestCode = (phoneNo, callback) => {
    //...
};
export const verifyOtp = (request_id, code, callback) => {
    //...
};
export const cancelOtp = (request_id, callback) => {
    //...
};
```

At first the `vonage` object is initialed with apiKey and secret obtained from Vonage. Then there are two pieces for this entire workflow: request code & verify. Lets dive into each of them.

## Request OTP
The one job of this method is to send OTP token to the given phone number. Vonage verification service handles it in a cool way. As per the time of writing this article, it sends SMS to given number. If OTP isn’t verified within that time, it calls the number either on SIM card or in my case it called me on Viber. When you get the OTP code you can then send it to API for verification. The process seems straightforward but it can be tricky during implementation.

> Some of the caveats I ran into:
> - Can’t send concurrent OTP to a phone no within 30 seconds interval.
> - Can’t cancel the OTP request multiple times. If done, it will throw error repeatedly.

Considering these points, let's move forward with code. First of all, let’s complete the `requestCode` method in `vonage.service.js` file.

```javascript
export const requestCode = (phoneNo, callback) => {
    vonage.verify.request({
        number: phoneNo,
        brand: "Your App/Website Name"
    }, (err, result) => {
        if (err) {
            console.error(err);
            callback(false);
        } else {
            if (result.request_id) {
                console.log('====request success====', result);
                callback(result);
            } else {
                console.log("====request err====", result);
                callback(false);
            }
        }
    });
}
```

The method takes a phone number and returns the most important thing `request_id`.

> Normally you don't have access to OTP code sent by Vonage. If you need please visit their pricing section.

If you get `request_id` on response, it was a successful request, else there were some errors.

Another piece of this mechanism is the cancel token request. There may be cases which requires OTP request to be cancelled. One of the prominent reasons would be: Vonage has 5 minute limit for OTP expiry. In the real world, it’s a very long wait. Worst case: who waits for 5 min to receive an OTP 😂

So you may need to cancel the pending request and re-send another OTP. The code to cancel the request looks something like this.

```javascript
export const cancelOtp = (request_id, callback) => {
    vonage.verify.control({
        request_id: request_id,
        cmd: 'cancel'
    }, (err, result) => {
        if (err) {
            console.error("====cancel err", err);
            callback(false);
        } else {
            console.log(result);
            console.log("====cancel success", result);
            callback(result);
        }
    });
}
```

It’s a pretty straightforward code that requires the OTP’s `request_id` to cancel it. As you may have seen, `request_id` is the only way to track your OTP. So, store it safely.

These 2 methods would be sufficient to request an OTP. Now let's move onto `server.js` to implement these methods.

```javascript
app.post('/api/request-token', (req, res) => {
    let { phoneNo } = req.body;
    if (!phoneNo) return res.status(400).send({ message: "Phone no. is required" });
    phoneNo = phoneNo.replace(/\s/g, "");
    console.log("Sending code to ", phoneNo);
    requestCode(phoneNo, (result) => {
        if (result) {
            // success at 1st attempt
            if (result.status == '0') onOtpSuccess(res, result);
            // concurrent OTP error
            else if (result.status == '10') {
                // cancel & try again once
                cancelOtp(result.request_id, (cancelData) => {
                    // cancel success
                    if (cancelData && cancelData.status == '0') requestCode(phoneNo, (result2) => {
                        // success at 2nd attempt
                        if (result2 && result2.status == '0') await onOtpSuccess(res, result2);
                        // fail again at 2nd attempt
                        else onOtpError(res);
                    });
                    // fail at cancel
                    else onOtpError(res);
                })
            }
        }
        // fail at 1st attempt
        else onOtpError(res);
    })
});

function onOtpSuccess(res, result) {
    // ...
    // store result.request_id on DB oe sent it to user
    res.send({ message: "Success", request_id: result.request_id });
}
function onOtpError(res) {
    //...
    res.status(500).send({ message: 'Error sending OTP. Please try again.' });
}
```

First of all, check for the presence of phone number. Then remove all the present whitespaces. Sometimes phone numbers are in a weird format (+12 345 678 890). It may cause issues for services like Vonage. It requires the country code though.

Basically, the code above requests for OTP via `vonage.service.js`. In case of success onOtpSuccess function is executed, in case of error `onOtpError` is executed. In case of concurrent OTP request to same number within 5 minutes, Vonage throws error with status 10. That case is handled by cancelling the OTP with its `request_id` and resending the request. If it fails again, it's flagged as error.

Up to this point you have seen how to request OTP, how to cancel it (if required). Another piece of the puzzle is verifying the OTP.

## Verify OTP

To recall: we have 2 files `server.js`, `vonage.service.js` and ``request_id`` is the only way to track your OTP.

The logic for verification is quite straightforward unlike OTP request mechanism. First, let's look at vonage.service.js for its implementation.

```javascript
export const verifyOtp = (request_id, code, callback) => {
    vonage.verify.check({ request_id, code }, (err, result) => {
        if (err) {
            console.error(err);
            callback(false);
        } else {
            if (result.status != '0') {
                console.log("====verify err====", result);
                callback(false);
            } else {
                callback(result);
                console.log("====verify success====", result);
            }
        }
    });
}
```

Verification is done via

- `request_id` which is store on DB or received from user
- OTP code which the user receives on phone via SMS or call.

Successful verification will return the result with status 0.

Moving onto `server.js` file, the `verifyOtp` method is used like this.

```javascript
app.post('/api/verify-token', (req, res) => {
    const { otp, request_id } = req.body;
    if (!otp) returnres.status(400).send({ message: "Otp is required" });
    if (!request_id) returnres.status(400).send({ message: "Invalid request" });
    verifyOtp(request_id, otp, async (result) => {
        if (result) {
            // ...
            return res.send({ message: "Success" });
        } else {
            // ...
            return res.status(400).send({ message: `Error verifying OTP` });
        }
    })
})
```

Here, both OTP and request_id is being retrieved from API request. It may depend on your implementation.

In this way, you can send OTP code to the user’s device and verify it using Vonage’s verification API. You can find a basic implementation on Vonage’s JS guide too. This article serves as a more detailed guideline to implement it on the Express JS server.