---
title: Windows 10 chmod 400 equivalent
excerpt: Useful for setting right permission for AWS ec2 instance
createdAt: 2021-08-23
tags: Server
---
```bash
#Copied from: https://gist.github.com/jaskiratr/cfacb332bfdff2f63f535db7efb6df93

- select .pem file -> right click -> properties
- Security > Advanced > Disable inheritance
- Remove all Users
- Add > Select a principal
- In "Enter the object name to select" type your Windows username > ok
- Give all permissions > ok > apply
```