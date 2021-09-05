---
title: Split string with multiple seperators
excerpt:
createdAt: 2021-09-05
tags: JavaScript
---
```javascript 
"chunk-1=chunk-2,chunk-3:chunk-4".split('=').join(',').split(':').join(',').split(',')
// ['chunk-1', 'chunk-2', 'chunk-3', 'chunk-4']
```