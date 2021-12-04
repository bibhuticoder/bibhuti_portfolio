---
title: Connect CloudFront to S3
excerpt: Tips to create CloudFront distribution for S3 bucket 
createdAt: 2021-10-14
tags: Aws
---
## S3 bucket
- Must have public Access
- ACL (list, read) for public
- Bucket policy with "allow" access (example below)

### Eg: bucket policy
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

## Fields to fill during Cloudfront Distribution Creation
1. Origin domain: Choose your S3 bucket
2. Viewer protocol policy: Choose any
3. Alternate domain name (CNAME): Domain to connect to
4. Custom SSL certificate: SSL certificate for domain from step 3
5. Default root object: Starting file (eg: for Vuejs its index.html)