---
title: S3 CORS policy(JSON)
excerpt: For using with S3 bucket that allows pre-signed URLs
createdAt: 2022-05-05
tags: AWS,S3
---
```json 
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "PUT",
            "POST"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]
```