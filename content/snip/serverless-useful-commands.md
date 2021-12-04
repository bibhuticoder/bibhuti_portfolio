---
title: Serverless - Useful commands
excerpt: Useful command for serverless framework
createdAt: 2021-08-24
tags: Serverless
---

## Install Serverless
```bash
npm install -g serverless
```

## Create app eg: Nodejs
```bash
serverless create --template aws-nodejs --path my-service
```

## config credentials
```bash 

serverless config credentials --provider <PROVIDER> --key <KEY> --secret <SECRET>
serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY #eg
```

## dev server(serverless-offline)
```bash 
sls offline start --stage <STAGE_NAME>
sls offline start --stage <dev> #eg
```

## Deploy
```bash 
sls deploy --stage <STAGE_NAME>
sls deploy --stage prod #eg
```

## Deploy with spefied profile
```bash 

export AWS_PROFILE=XXXXX && sls offline start --stage <STAGE_NAME>
export AWS_PROFILE=XXXXX && sls offline start --stage prod #eg
```