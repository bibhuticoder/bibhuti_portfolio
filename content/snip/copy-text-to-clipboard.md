---
title: Copy text to clipboard
excerpt: Only works on HTTPS
createdAt: 2021-08-26
tags: JavaScript
---
```javascript 
async copyText(text){
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(node.querySelector("code").innerText);
        alert("Copied");
    } else alert("Copy not supported");
}
```