---
title: Serverless - Useful commands
excerpt: Useful command for serverless framework
createdAt: 2021-08-24
tags: Serverless
---
```bash 
## config credentials
serverless config credentials --provider <PROVIDER> --key <KEY> --secret <SECRET>
serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY #eg

## dev server(serverless-offline)
sls offline start --stage <STAGE_NAME>
sls offline start --stage <dev> #eg

## deploy
sls deploy --stage <STAGE_NAME>
sls deploy --stage prod #eg

## deploy with spefied profile
export AWS_PROFILE=jetship && sls offline start --stage <STAGE_NAME>
export AWS_PROFILE=jetship && sls offline start --stage prod #eg
```