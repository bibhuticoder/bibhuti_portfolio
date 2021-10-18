---
title: Deploy Serverless - Github Action
excerpt: Github action to deploy serverless application
createdAt: 2021-10-18
tags: Serverless
---

## First of all

1. Create Aws user with programatic access
2. Copy credentials from AWS and setup `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY` on Github Settings -> Secrets

## Modify script

Steps 4 & 5 can be modified as per your requirements. 

Example Modifications: 
- Setup command -> eg: add new profile
- Deploy command -> eg: add "dev"/"prod" stage, specific AWS profile etc.


## Yaml Script

```yml
name: Deploy to AWS

on:
  push:
    branches:
      - master

jobs:
  deploy:
    name: deploy
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - name: serverless setup
      run: |
        npm install -g serverless
        serverless config credentials --provider aws --key ${{ secrets.AWS_ACCESS_KEY_ID }} --secret ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    - name: serverless deploy
      run: |
       sls deploy
```