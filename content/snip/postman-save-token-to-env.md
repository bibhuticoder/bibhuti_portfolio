---
title: Postman script to save token to ENV
excerpt: Saves auth token from API response to env variable automatically
createdAt: 2022-03-21
tags: Postman
---

### Copy-paste in Postman Test tab

#### Save to Postman Environment variable(Global)
```javascript
var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("token", jsonData.token);
```

#### Save to collection specific Environment variable
```javascript
var jsonData = JSON.parse(responseBody);
pm.collectionVariables.set("token", jsonData.token);
```