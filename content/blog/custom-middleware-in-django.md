---
title: Custom Middleware in Django
excerpt: Middleware is a framework of hooks into Django’s request/response processing. It’s a light, low-level “plugin” system for globally...
createdAt: 2018-12-17
tags: Django, Server
thumbnail: https://images.unsplash.com/photo-1585849834908-3481231155e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80
caption: Photo by <a href="https://unsplash.com/@k8_iv">K8</a> on Unsplash
  
time: 3
---

Middleware is a framework of hooks into Django’s request/response processing. It’s a light, low-level “plugin” system for globally altering Django’s input or output.

Each middleware is responsible for performing some specific function. For example, Django includes a middleware component, AuthenticationMiddleware, that associates users with requests using sessions.

<g-image src="https://miro.medium.com/max/340/1*Kuv-eP6t6S3Cum9RufHh_A.png" />

After server receives user’s request, before calling the respecting view, Django applies the middleware in top down order as defined in the settings.py MIDDLEWARE list.

<g-image src="https://miro.medium.com/max/384/1*8PbWdD1b54rCFADXqJCTCQ.png" />

To better understand the concept, Django documentation gives a nice analogy on onions. Each middleware can be thought as the outer layers that wraps the core i.e view. Each layer passes request to its inner layer, which creates the Request flow from outer layers to the core.

## Custom Middleware

Basic steps to create a custom middleware.

- 1. Create a folder named “middlewares” in a Django app.
- 2. Inside the folder create a file named “__init__.py”
- 3. Logic for middleware goes into the file.
- 4. Finally add the middleware to MIDDLEWARE list at “project_name/settings.py”.

Now, lets focus on step 3, i.e. Code inside the middleware file. To better understand the concept let’s take a real world scenario and design a middleware for it.

#### Case Scenario

Each user request contains a HTTP header “LANG”. The header field contains the name of the language stored in the database. For each request we have to check whether the language exists it database or not. It not, respective error message should be returned. The view then returns the content in requested language. Incase the header field doesn’t exist respective error message is sent to the user. Since we are using REST API the responses will be in JSON format.

We will be using django’s **1.10-style middleware**.

The bare structure of a middleware looks like this.

<g-image src="https://miro.medium.com/max/288/1*Ys10jw99CTftVgbkmoDbXQ.png" />

All the logic happens in “process_request” function. Initially, existence of the slug is checked. It it doesn’t exist in HTTP header, error is thrown. Then, The language is checked in the database. If exists, then ok. Else, error is thrown.

<g-image src="https://miro.medium.com/max/515/1*yyqIwu9XMZ6iS7EOVCABGA.png" />

A separate function “respond” is called every time with a “message” parameter when a response is to be sent. The content type is set as “application/json” since response is in json.

**None** response is returned in case everything is fine.

**REFERENCES**

https://docs.djangoproject.com/en/2.1/topics/http/middleware/
