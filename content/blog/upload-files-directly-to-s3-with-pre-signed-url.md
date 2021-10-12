---
title: Upload files directly to S3 with pre-signed URL
excerpt: This post will describe an approach to upload files directly to AWS S3 using presigned URL. The pre-signed URL will be generated ...
createdAt: 2021-10-12
tags: S3, NodeJs, AWS
thumbnail: https://images.unsplash.com/photo-1595872018818-97555653a011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=682&q=80
caption: Photo by <a href="https://unsplash.com/@markusspiske>Markus Spiske</a> on Unsplash
  
time: 4
---

Whether it be monolith server or micro-services, handling file upload often comes with the expense of bandwidth and compute requirements. Delegating this complexity to a more robust, resilient & scalable technology is always a good choice.

This post will describe an approach to upload files directly to AWS S3 using presigned URL. The pre -signed URL will be generated via AWS lamda. For backend service, we will use Serverless framework with Nodejs runtime. For frontend, it will be plain HTML & Javascript.

**Prerequisites**:

- Working AWS account setup and configured AccessKey and SecretKey. [Quick Guide](https://bibhutipoudyal.com.np/snip/serverless-useful-commands/).
- S3 bucket to upload file

We will start by building a backend service first. It will expose a HTTP API which will be consumed by frontend app to get the pre-signed URL.

File structure of backend service. 

```bash
- handler.js
- serverless.yml
- package.json
```

## Simple Lamda function

Let's begin by writing a simple lamda function inside `handler.js` file. The `getUploadUrl`  function will take some parameters; based on which it will output pre-signed URL and filename.  

```javascript
const getUploadUrl = async (event) => {
	    return {
	        statusCode: 200,
	        body: {
                preSignedUrl: "...",
                fileName: "..."
			}
	    };
};
export { getUploadUrl };
```

Inputs to this lamda function would be

- **contentType**: **`Content-Type`** of file to upload
- **ext**: File Extension. eg: png, jpg, jpeg etc.
- **isPublic**: **`true/false`** value determining whether file will be publicly accessible or not

To provide these inputs, we will make use of AWS API Gateway. Via POST method these inputs will be sent to `getUploadUrl` function.

## Serverless Configuration

Lets write the `serverless.yml` file to connect lamda function with HTTP API. Make sure to insert **<**AWS_REGION**>**. Install [serverless-bundle](https://www.npmjs.com/package/serverless-bundle) by running `npm install --save-dev serverless-bundle` . It uses the serverless-webpack plugin internally.

```yaml
service: s3-file-upload

plugins:
  - serverless-bundle
provider:
  name: aws
  runtime: nodejs14.x
  region: <AWS_REGION>
  stage: dev

functions:
  upload_url:
    handler: handler.generateUploadUrl # lamda function
    events:
      - http:
          path: /upload-url
          method: post
          cors: true
```

Run `sls deploy` to deploy. It will output a URL containing "/upload-url" at the end. Sending POST request to that URL should output 200 status code with the following body.

```yaml
{
	preSignedUrl: "...",
	fileName: "..."
}
```

## Upload files to S3

Lets modify `handler.js` file to get pre-signed URL from S3. Instead of using the original file name, the code uses current timestamp (to make it random). Access control list(ACL) controls whether the file is publicly available or not. **Expires** field determines limetime of the url in seconds. It defaults to 900 seconds (15 minutes). It can also be made configurable by passing it via HTTP body.

```javascript
const AWS = require('aws-sdk');
AWS.config.update({ region: '<AWS_REGION>' });
const s3 = new AWS.S3();

const getUploadUrl = async (event) => {

  let filename = Date.now(); // random file name
  var s3Params = {
    Bucket: 'AWS_BUCKET_NAME',
    Key: `${filename}.${event.body.ext}`,
    ContentType: event.body.contentType,
    ACL: event.body.isPublic ? 'public-read' : null,
		Expires: 600 // 10 minutes
  };

  const url = s3.getSignedUrl('putObject', s3Params);
  return {
		statusCode: 200,
			body: {
				preSignedUrl: url,
				fileName: `https://<AWS_BUCKET_NAME>.s3.<AWS_REGION>.amazonaws.com/${filename}.${event.body.ext}`
			}
	 };
};

export { getUploadUrl };
```

## Serverless Permissions

As seen on the code above, it has to access S3 and change ACL. For that, serverless service needs to be given certain permissions. For now lets give it 3 permissions(get, put, put-ACL) on the specific S3 bucket. The modified `serverless.yml` file is given below.

```yaml
# ...
# ...
  name: aws
  runtime: nodejs14.x
  region: <AWS_REGION>
  stage: dev
	iamRoleStatements:
    - Effect: Allow
      Action:
        - s3:GetObject
        - s3:PutObject
        - s3:PutObjectAcl
      Resource: "arn:aws:s3:::<AWS_BUCKET_NAME>/*"
functions:
  upload_url:
# ...
# ...
```

This point marks the completion of backend service. Sending post request to the service should give pre-signed URL and filename as shown in example below. Try it on **Postman** or something similar.

**Request**

```json
{
    "contentType": "image/jpeg",
    "ext": "jpg",
    "isPublic": false
}
```

**Response**

```json
{
  "url": "https://<AWS_BUCKET_NAME>.s3.<AWS_REGION>.amazonaws.com/1634026320180.jpg?AWSAccessKeyId=XXXXXXXXXX&Content-Type=image%2Fjpeg&Expires=1634027220&Signature=e1Gfy1hSzaPO9FfUrd8vSwz48bY%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJIMEYCIQC3ClLmXAmeAfY4C4FcfY7V4fElb214mt%2FbKO%2FPzMonawIhANGNZmI9ilIHD%2F53VzT3FRZpCu0ISc7boJIA9mFOaEUfKq8CCBEQABoMOTY5MjM4NjEyNDQwIgxT93a7DeIU8UoY0KkqjAJ3UeaYhHBk3Am1z8HI4ZdJqQx3P%2F1a5MVcWvHDNgVzUvXSPRUJZMleXJ%2FDnh%2FGkrnWnqgzpiClhVd78kK4J1D9Uecbz8elpVBv0hXO1nFjqx27XMepOl7IrcruYSq4OCfNLwOxbzpihw5LJPnpdFu85LzrFa7wzcSlm7tGKQT7Kkkzv%2Byd3HaVyNrxHHSU5e6cYM67UL0vHLIYHhHmY0KGrvQLr2%2FtVODeZ4DfzsdAeBYsWw2LXvlLUIetuL6qLVD4WNI00%2FvaKd8%2F45fPvG%2FOE8vuULKtF0CwGOchoIEsZUl00foQVCzFMti9L2Fbnx7LABiJ0pOIQKtyczur1QG1E1ctY0Sc28iQ2oEgMM%2BGlYsGOpkBUMaMbfQ3%2Fa8O07kGLe8boHpAgZmbyARvkTvoOSb3QBpMKP2HNnMcj4KvGZ%2FLNhoPVZdd870Mul%2Fq5AJvkpqEqyxlUdRxkh0Q%2FC1dgpixKlSXYnxjVU7n%2Fy7vBxWTBk8MMpiAeEJtFjxPStf261BL9NuvG2TZFfk%2Bk04LF%2FOb8H15vfXSmUD0WYoi3MYNnI15RusKx0RESmN4",
  "fileUrl": "https://<AWS_BUCKET_NAME>.s3.<AWS_REGION>.amazonaws.com/1634026320180.jpg"
}
```

## Frontend

Its time to build a simple web app to consume this API. Let's use the API endpoint to actually get the pre-signed URL and upload file. We will start with a simple html page with file upload input, a text field to set lamda URL, label to show file upload progress and an image preview.

```html
<input type="text" id="url" placeholder="Input Lamda URL">
<br><br>
<input type="file" id="fileInput">
<p>Upload percentage: <span id="uploadPercent"></span> </p>
<br><br>
<img src="" id="imgPreview" height="400" width="600" />
```

Javascript code is set to execute when file is available to browser. It then extracts **Content-Type** and **file extension** of uploaded file and calls the specified api to get pre-signed URL. Again another PUT request is sent to pre-signed URL including uploaded file as HTTP Body. To keep things simple, **axios** is used for making HTTP calls. Code given below is self explanatory.

```javascript
document.getElementById("fileInput").addEventListener('change', handleFileChange);

async function handleFileChange(e) {

  const URL = document.getElementById("url").value;

  try {

    // take the first file from FilesList
    const file = e.target.files[0];

    // Extract Content-Type & filename
    const {
      type,
      name
    } = file;

    // Get upload URL
    let resp = await axios.post(
      URL, {
        contentType: type,
        ext: name.split(".").pop(), // take only file extension
        isPublic: true, // let's make it public so we can preview here
      }
    );

    // Upload at URL
    const {
      url,
      fileUrl
    } = resp.data;
    await axios.put(url, file, {
      headers: {
        "Content-Type": file.type
      },
      onUploadProgress: (e) => {
        //  Show progress
        var percentCompleted = Math.round((e.loaded * 100) / e.total);
        document.getElementById("uploadPercent").innerHTML = percentCompleted;
      },
    });

    // suuccessfully uploaded
    document.getElementById("uploadPercent").innerHTML = "Completed";
    document.getElementById("imgPreview").setAttribute("src", fileUrl);

  } catch (e) {

    // Log errors
    console.log(e);
  }
}
```

## Demo

Copy and paste your API Gateway's URL into the demo below and choose an image. It should upload the image to your S3 bucket which you can check from AWS console.

<iframe width="100%" height="300" src="//jsfiddle.net/bibhuti/vhwrgy0x/15/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>