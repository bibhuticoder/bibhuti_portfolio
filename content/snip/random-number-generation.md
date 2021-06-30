---
title: Random number generation
excerpt: Generate random number within a range in JavaScript
createdAt: 2021-06-25
tags: JavaScript
---
```javascript
function random(min, max){  
	return Math.floor(Math.random() * (max - min + 1)) + min;	
}
```