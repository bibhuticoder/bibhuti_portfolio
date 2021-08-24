---
title: Integrate Instagram Basic Display API with Node.js
excerpt: This article will demonstrate how Instagram can be integrated with your system. Specifically, it explores a mechanism to show users’ Instagram posts...
createdAt: 2021-06-25
tags: Instagram, JavaScript
thumbnail: https://miro.medium.com/max/1400/1*gs0GEdGBdSSoLVNMpCIUXA.png
---

<g-image alt="Example image" src="https://miro.medium.com/max/1400/1*gs0GEdGBdSSoLVNMpCIUXA.png" />

This article will demonstrate how Instagram can be integrated with your system. Specifically, it explores a mechanism to show users’ Instagram posts on your app/website.
At time of writing this article, instafeed.js provides similar functionality. However, it depends on Heroku’s free service to refresh tokens. After Heroku updated its pricing policy, it kind of became expensive. This approach serves as self-hosted alternative.
Before going further, please head over to Facebook Developers page and go through the overview. It will be easier to grasp concepts further.
The overall process boils down to 4 steps:
Create a Facebook app
Get access tokens
Setup token refresh service
Fetch Data
1. Create a Facebook App
Follow steps 1 to 3 from this link.
https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
2. Get Access Tokens
Proceeding further requires app-specific keys and secrets which can be found here.
App ⇒ Dashboard ⇒ My products ⇒ Instagram Basic Display ⇒ Settings
App ID is required on the frontend only; backend requires both ID & secret. Since App secret can’t be shown to users, it’s kept as an environment variable on the server.

App ID, secret & Redirect URIs
Also, add your frontend application’s URL to Valid OAuth Redirect URIs. localhost with https will work. Hosting static app on GitHub pages will do and is a better option.
Frontend
Use this piece of code on a static frontend site to get a short-lived access token. Short-lived access tokens are valid for 1 hour but can be exchanged for long-lived tokens (will do later on server-side).
Since our goal is to fetch user-related info and their Instagram photos, scopes are set to user_profile & user_media.

It will open authorization window on a new tab. After being authorized it will redirect to /insta page(as configured on the above code) with a query parameter containing code. That code will be used to fetch short-lived access token on the backend.
Next, the code & redirect URI are sent to the server for further processing.

Backend
It’s assumed that the backend has an endpoint for receiving code & redirect URI via any HTTP method.
Now, the next step is to get Short-Lived-Access-Token. The code is self-explanatory.
JSON-based POST won’t work. So form based request is sent via request.

After Short-Lived-Access-Token is obtained, it needs to be exchanged with Long-Lived-Access-Token.

For further API calls only the Long-Lived-Access-Token is used. As mentioned earlier, short-lived token has 1 hour validity. Similarly long-lived token has 60 days validity. i.e. the token just stored on DB needs to be refreshed before it expires.
3. Setup Token Refresh Service
To refresh token every 60 days, a cron job seems suitable. node-cron will serve best for this purpose.

Inside instaRefresh.cron file, it gets old token from DB and replaces it with new one.

Hence, this cron job will automatically refresh access tokens.
4. Fetch data
Finally, its time to fetch data from Instagram. We will be making use of the accessToken stored on DB. To learn more on what kinds of data can be fetched, visit this page.
Access tokens are app-scoped (unique to the app and user pair)
Here, we will be fetching media uploaded by user. Then Filter it and obtain images only.

Platform Rate Limits
Instagram API has limit on number of API calls. More details can be found here.
One way around this issue is to cache API responses. For this particular scenario, the image URLs can be saved to database every, let's say, every 3 hours; using cron-jobs.

Instead of calling Instagram API directly, images can be served from DB; as a cache. However, this particular case may not be feasible for every use case.
I hope this guide will help to integrate Instagram Basic API on Node.js-based applications. If you have a more robust alternative, please mention in the comments below.
Thanks for reading. 🙂
References
Facebook app and test user setup · stevenschobert/instafeed.js Wiki
You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…
github.com

Instagram Basic Display API - Instagram Platform - Documentation - Facebook for Developers
The Instagram Basic Display API allows users of your app to get basic profile information, photos, and videos in their…
developers.facebook.com

More content at plainenglish.io