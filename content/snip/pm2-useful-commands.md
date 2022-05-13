---
title: Useful stuffs for pm2
excerpt: Commands and concepts
createdAt: 2022-05-13
tags: Server
---

## General commands

```bash

# list all process
pm2 ls

# restart process
pm2 restart 'id'


# empty current activity logs
pm2 flush
```

## Search keyword in logs

```bash
pm2 logs | grep -i "KEYWORD"
```


## logrotate

```bash
pm2 install pm2-logrotate

# NOTE: the command is pm2 install NOT npm install
```