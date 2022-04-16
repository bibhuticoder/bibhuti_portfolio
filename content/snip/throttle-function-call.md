---
title: Throttle function call
excerpt: Control rate/speed of multiple function call
createdAt: 2022-04-16
tags: JavaScript
---
```javascript
    let timer = null;

    handleFunctionCall() {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        await someAsyncMethod();
        clearTimeout(timer);
      }, 500); // change timeout as per the need
    }

    // when yu need to call someAsyncMethod()
    handleFunctionCall();
```