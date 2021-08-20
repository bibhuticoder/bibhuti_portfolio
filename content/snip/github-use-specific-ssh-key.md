---
title: Github - use specific ssh key
excerpt: Specify SSH key path while running GIT commands 
createdAt: 2021-06-25
tags: Server
---
```bash
#format
GIT_SSH_COMMAND='ssh -i <ssh-key-path>' <git command>

#example
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_rsa1' git pull origin master
```