---
title: S3 access bucket policy
excerpt: Allows s3 bucket to host static web apps
createdAt: 2021-08-30
tags: AWS
---
```json 
{
    "Version": "2012-10-17",
    "Id": "Policy1593349925842",
    "Statement": [
        {
            "Sid": "Stmt1593349907809",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::<BUCKET_NAME>",
                "arn:aws:s3:::<BUCKET_NAME>/*"
            ]
        }
    ]
}
```