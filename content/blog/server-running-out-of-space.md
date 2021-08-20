---
title: Server running out of space 😱
excerpt: If your job involves maintaining server, you are likely to stumble onto this issue sooner or later. Unlike CPU load, high traffic etc..
createdAt: 2021-06-25
tags: JavaScript, Server
---

<g-image alt="Example image" src="https://miro.medium.com/max/560/1*dBujkood4aZK72NsuvNRhg.jpeg" />

If your job involves maintaining server, you are likely to stumble onto this issue sooner or later. Unlike CPU load, high traffic etc. I found this issue harder to track as you need to go to OS level and check it manually. Moreover, the hosting providers don’t provide alarms for “server running out of space” events.
Things mentioned on the post are related to AWS ec2(ubuntu 20) with node(express) server managed by pm2.
This post is written as a future reference for myself and other fellow developers struggling in this area.
Scenario
Few days ago one of the Ec2 server I was maintaining began to show weird behaviors.
Redis queue stopped working. I couldn’t ssh into the server for diagnosis. And there were thousands of requests per minute waiting for server to respond. It was hell.
Finally I was able to get into the server & checked pm2 logs. It was showing “MISCONF Redis is configured to save RDB snapshots”. Googled and found that ec2 was running out of space.
If you are stuck in similar case, this post may help to get your server running smooth again.
What to do next
First thing is to check how much space is left. Like you can view CPU load, disk I/O etc. at cloud service providers’ dashboard, you won’t be able to view remaining space. You need to ssh into the server itself and run df command.
# view space
df -h
# view partitions
lsblk
The next step would be to identify which files/folders are occupying your server’s space.
Start by running this as root or with sudo:
du -cha --max-depth=1 / | grep -E "M|G"
So for example, if /var was the biggest you could do it like this next & so on until you identify the big fish.
du -cha --max-depth=1 /var | grep -E "M|G"
If those big files/folders turn out to be some junks that can be cleaned, just go ahead and run
sudo rm -r ./junk-folder-to-clean
In my case it was more complex. It was redis cache and other OS related junks.
Luckily I found this script on Github gist
Before copy pasting and executing it, make sure you understand what you are doing. You can check comments at Github to know more.

This approach will work once. But problem will definitely recur. Best way is to write a shell script and run it as cron job. This may help.
Sometimes, simply cleaning the junks may not be possible. Your server may need space upgrade. If you are using EC2, there is a nice video tutorial from AWS itself.

Also, if you are using pm2 to manage server, make sure you use tools like pm2-logrorate that will auto clean your server logs.