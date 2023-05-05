---
title: Run Git commands using different SSH key
excerpt: Handy in case of running Git commands in servers
createdAt: 2022-05-05
tags: AWS,Git
---
```bash 
sudo GIT_SSH_COMMAND='ssh -i  /home/ubuntu/.ssh/id_rsa' git pull github dev
```