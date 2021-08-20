---
title: Redis - Manage Memory
excerpt: Command to manage redis memory consumption
createdAt: 2021-06-25
tags: Server
---
```bash
#use this command to see how much memory is left
free -m

#get into redis
redis-cli

#set memory
config set maxmemory 2500mb
config set maxmemory-policy allkeys-lru # read more here: https://redis.io/topics/lru-cache
CONFIG REWRITE

# flush memory
redis-cli FLUSHALL
```