---
title: Tailwind "coming soon" page
excerpt: Simple, clean & minimal coming soon page
createdAt: 2021-08-30
tags: HTML
---
```html 
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@2.1.4/dist/tailwind.min.css" rel="stylesheet">
    <title>AppName</title>
</head>
<body class="h-screen w-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <div class="flex items-center justify-center h-screen">
  <div class="container">
    <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
      <div class="text-center">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          App<span class="" style="color: #ffa660">Name</span>
        </h2>
        <h3 class='text-xl md:text-3xl mt-10'>Coming Soon</h3>
      </div>
    </div>
  </div>
</div>
</body>
</html>
