---
title: Find largest files/folders
excerpt: Top 10 files
createdAt: 2022-09-02
tags: Server
---
```bash
du -a /var | sort -n -r | head -n 10
```
