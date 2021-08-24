---
title: Regex - Validate email
excerpt: Validate email address using regex
createdAt: 2021-08-24
tags: JavaScript
---
```javascript
function validateEmail(email) {
    let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}
```