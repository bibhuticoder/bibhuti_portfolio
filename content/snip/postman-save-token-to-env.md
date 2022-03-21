---
title: Postman script to save token to ENV
excerpt: Saves auth token from API response to env variable automatically
createdAt: 2022-03-21
tags: Postman
---

### Copy-paste in Postman Test tab
```javascript
var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("token", jsonData.token);
```