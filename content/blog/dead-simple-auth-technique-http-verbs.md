---
title: Dead Simple Authorization Technique Based on HTTP Verbs
excerpt: I will discuss a dead simple authorization technique based on HTTP verbs..
createdAt: 2020-08-17
tags: NodeJs, Server
thumbnail: https://miro.medium.com/max/560/1*PVgkGElexEqK754mk73GyA.png
---
Authorization is a basic feature of modern web applications. It’s a mechanism of specifying access rights or privileges to resources according to user roles. In case of CMS like applications, it needs to be equipped with advanced libraries and authorization techniques. But for minimal applications a full fledged library can be an overhead.

I will discuss a dead simple authorization technique based on HTTP verbs, for this particular purpose.

### Things to consider beforehand
This technique isn’t something you can implement anywhere. Use this only if your requirements match the particular scenario.

- It works only for REST APIs. Everything happens on middleware layer. If you have a simple MVC based REST APIs, this is for you.
- It heavily relies on the HTTP verbs and the URL naming convention. So API endpoints should be super clear and structured. Similar to some structure like this one.

```  
List Products  : GET    /products
Product Detail : GET    /products/{id}
Create Product : POST   /products
Update Product : PUT    /products/{id}
Delete Product : DELETE /products/{id}
```

- A URL can perform many stuffs; but all cannot be expressed just in its naming and HTTP verb. If you require complex authorization, you can’t just rely on this technique.

---

Lets implement the dead simple authorization technique based on HTTP verbs. For demo purpose we will be using Nodejs. You can implement it on any language and platform of your choice: core Nodejs, ExpressJS, aws Lambda etc..

## Step 1: Encode user role into JWT Token

JWT token is the key thing here. It contains the user role encoded in it. The token is returned when user logs in.

```js
const jwt = require(‘jsonwebtoken’);
const token = jwt.sign({
 …
 role: userData.role 
}, JWT_KEY);
```

On the next API call, the token is passed as the value of Authorization header field.

```
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdW...
```

## Step 2: Decode token and check permissions
When request is sent to the web server with JWT token attached on header, it goes through a middleware layer. Inside the layer the token is extracted, decoded. To check for permission we require two information.

- User role: decoded from token
- Resource name: identified from request URL

https://gist.github.com/bibhuticoder/1928a16f9306cd0effdc060212ce4829#file-decode_jwt-js


asds