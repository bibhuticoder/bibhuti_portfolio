---
title: Copy text to clipboard
excerpt: Copy data from webpage to clipboard
createdAt: 2021-08-26
tags: JavaScript
---
```javascript 
async copyText(text) {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText("THIS TEXT IS COPIED");
        alert("Copied");
    } else alert("Copy not supported");
}
```