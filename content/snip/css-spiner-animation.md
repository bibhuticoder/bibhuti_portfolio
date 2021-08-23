---
title: CSS - Spinner(loading) animation
excerpt: Spinner in plain CSS
createdAt: 2021-08-23
tags: CSS
---

## HTML
```html
 <div class="parent">
    <div class="loader"></div>
  </div>
```
## CSS code

```css
.loader {
  margin: 0 auto;
  border: 10px solid lightgrey; /* back color */
  border-top-color: red; /* loading color */
  border-radius: 50%;
  margin-bottom: 1rem;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```