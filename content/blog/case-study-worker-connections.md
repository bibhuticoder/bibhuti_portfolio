---
title: Case study on error “Worker connections aren’t enough while connecting to upstream”
excerpt: I was running a server on EC2 that handled about 1 req/sec on average. Most of these requests had to make an API call to another endpoint
createdAt: 2022-08-12
tags: Nginx,NodeJS
thumbnail: https://miro.medium.com/max/1400/1*e204_ZqfC82WL7FDZEXRBA.png
time: 3
---

## Scenario

I was running a server that handled about 1 req/sec. Most of these requests had to make an API call to another endpoint and response based on its response. This server was also exposing APIs which were used by lamdas. 

12 pm was the peak time. Few days in a week(around the peak hour) we got complaints from users that the service was down.

**Server specs**

- Server: AWS EC2
- Instance type:  T2.medium
- Techstack: NodeJs(Express), AWS RDS

## Attempt 1

Our goto solution was pretty straight-forward: increase server resource.  It had been long since the last server upgrade. Users had grown a lot since then. I upgraded server to T2.large. 

It worked !!

A month later we began to see more such errors. Now more frequently.

## Attempt 2

This time we began to look into it deeply. We checked the pm2 logs for error. None found. My first guess was: either we didn’t log that error or the code doesn’t have  mechanism to detect & handle the error. Then we searched the whole code-base for possible loopholes. We identified some lines of code then debugged those parts. They weren’t the culprit.

Only place the error was seen was the API response from ec2 server. It was a 500 - Internal Server Error. Then I planned to analyze overall architecture once again. 

![Group 5.png](https://miro.medium.com/max/1400/1*e204_ZqfC82WL7FDZEXRBA.png)

These were layers of services communicating with each other each other.

- External API
- Ec2 instance
    - NodeJs Application
    - Pm2 process manager
    - NGINX
- Lamda requesting the Ec2 instance

Logs from lamda was clear, so were logs from pm2. Then I checked the nginx logs. There were too many. Among all of those texts I found “768 worker connections aren’t enough while connecting to upstream”. 

## Solution

I quickly searched the term and found it on Nginx’s official blog under “****Tuning NGINX for Performance****” topic. It described the term **worker_connections** as:

> The maximum number of connections that each worker process can handle simultaneously. The default is 512, but most systems have enough resources to support a larger number. The appropriate setting depends on the size of the server and the nature of the traffic, and can be discovered through testing.
> 

Then I open the configuration file from **/etc/nginx/nginx.conf.** By default is had value of 768. It didn’t match as said on the docs. I looked at no. of places for similar issue with working solution. All of them matched by little but none matched completely.

- [https://stackoverflow.com/questions/28265717/worker-connections-are-not-enough](https://stackoverflow.com/questions/28265717/worker-connections-are-not-enough)
- [https://github.com/bigbluebutton/bigbluebutton/issues/11347](https://github.com/bigbluebutton/bigbluebutton/issues/11347)
- [https://meta.discourse.org/t/768-worker-connections-are-not-enough-error/192376](https://meta.discourse.org/t/768-worker-connections-are-not-enough-error/192376)

Most people were randomly assigning large numbers to it. And it solved their problem.

I looked more deeper into the blog and found that this number should match this configuration **worker_rlimit_nofile**.

As said on the docs

> It should be kept in mind that this number includes all connections (e.g. connections with proxied servers, among others), not only connections with clients. Another consideration is that the actual number of simultaneous connections cannot exceed the current limit on the maximum number of open files, which can be changed by [worker_rlimit_nofile](https://nginx.org/en/docs/ngx_core_module.html#worker_rlimit_nofile)
> 

These answers were helpful to understand **worker_rlimit_nofile** better**.** 

- [https://stackoverflow.com/questions/37591784/nginx-worker-rlimit-nofile](https://stackoverflow.com/questions/37591784/nginx-worker-rlimit-nofile)
- [https://serverfault.com/questions/92734/nginx-configuring-worker-rlimit-nofile-and-worker-processes](https://serverfault.com/questions/92734/nginx-configuring-worker-rlimit-nofile-and-worker-processes)

Looking at all those answers, I decided to update **worker_connections** value with 10000. Since then server is working perfectly fine, even on peak hours. In case of any issues caused by this approach, I will definitely update here. 

Thanks for reading.