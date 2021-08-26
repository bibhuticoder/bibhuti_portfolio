---
title: Nginx - Starter templates
excerpt: Starter template for nodejs server, basic html site
createdAt: 2021-06-26
tags: Server
---

## NodeJS server
```conf
server {
    listen 80;
    listen [::]:80;

    server_name domain.com www.domain.com;

    location /api {
        proxy_pass http://localhost:<PORT>;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        root  /path-to-root-folder/;

        default_type "text/html";
        try_files  $uri $uri.html $uri/index.html index.html;
    }
}
``` 

## Plain HTML
```conf
server {
    listen 80;
    listen [::]:80;

    server_name domain.com www.domain.com;

    location / {
        root  /path-to-root-folder/;

        default_type "text/html";
        try_files  $uri $uri.html $uri/index.html index.html;
    }
}
``` 