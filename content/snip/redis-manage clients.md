---
title: Redis - manage Clients
excerpt: Command to manage redis clients
createdAt: 2021-06-25
tags: Server
---
```bash
#get into redis
redis-cli

# get client info
info clients
config get maxclients
config set maxclients <val> #read more here: https://redis.io/topics/clients
```