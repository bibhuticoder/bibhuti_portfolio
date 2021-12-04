---
title: Use Jquery on browser console
excerpt: Injects Jquery into webpage 
createdAt: 2021-10-14
tags: JavaScript
---
Injects jquery-3.6.0.slim.min.js into webpage

```javascript
(async () => {
  await import('https://code.jquery.com/jquery-3.6.0.slim.min.js')
  console.log("Jquery ready")
})()
```