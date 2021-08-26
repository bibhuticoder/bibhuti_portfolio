---
title: Nginx - Useful commands
excerpt: Basic commands for operating NGINX server
createdAt: 2021-06-26
tags: Server
---
```bash
# To stop your web server, type:
sudo systemctl stop nginx
 
# To start the web server when it is stopped, type:
sudo systemctl start nginx
 
# To stop and then start the service again, type:
sudo systemctl restart nginx
``` 
# .


```bash
# create symlink to sites-enabled
sudo ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/

# test nginx config for errors
sudo nginx -t
```

# .

```bash
# If you are only making configuration changes, 
# Nginx can often reload without dropping connections. 
# To do this, type:
sudo systemctl reload nginx
 
# By default, Nginx is configured to start automatically 
# when the server boots. If this is not what you want, 
# you can disable this behavior by typing:
sudo systemctl disable nginx
 
# To re-enable the service to start up at boot, you can type:
sudo systemctl enable nginx
```