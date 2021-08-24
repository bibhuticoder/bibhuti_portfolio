---
title: Deploy Vuejs to AWS
excerpt: Github Action to deploy Vuejs to AWS S3 & invalidate Cloudfront cache
createdAt: 2021-08-24
tags: GithubAction
---

```bash
name: Deploy to AWS S3

on:
  push:
    branches: [ test ] # name of branch
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
      
      # Setup NodeJS in our environment
      - name: Setup Node.js environment
        uses: actions/setup-node@v2.1.2

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          npm install
          npm run build
          
      # Syncs your 'dist' folder from buildng the Vue app with an S3 bucket
      - name: S3 Sync
        uses: jakejarvis/s3-sync-action@v0.5.1
        with:
          args: --acl public-read --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: '<AWS_REGION>'
          SOURCE_DIR: 'dist'
        
      # Clears the CloudFront cache so new requests will receive the latest version of your app
      - name: Invalidate Cloudfront
        uses: chetan/invalidate-cloudfront-action@v1.3
        env:
          DISTRIBUTION: ${{ secrets.DISTRIBUTION }}
          PATHS: '/*'
          AWS_REGION: '<AWS_REGION>'
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```