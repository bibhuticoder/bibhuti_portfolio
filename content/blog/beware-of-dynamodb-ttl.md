---
title: Beware of dynamoDB TTL
excerpt: Its a very basic requirement for applications to delete data item from the database after it has no use..
createdAt: 2021-06-25
tags: GithubAction, Vuejs, Nodejs
thumbnail: https://miro.medium.com/max/1400/1*TM-OOipO0Dz7MMDt0bQ_AQ.jpeg
caption: Photo by Paul Green on Unsplash
time: 2
---

Its a very basic requirement for applications to delete data item from the database after it has no use. Certain information like verification code, one time passwords, gift coupons, activation keys etc. don’t need to be stored once used. Typically, a cron job can be scheduled to get rid of such data items at certain intervals. But modern databases have this feature built onto the system.

Dynamodb provides a **TTL** field to achieve this goal. Dynamodb docs states that

> Amazon DynamoDB Time to Live (TTL) allows you to define a per-item timestamp to determine when an item is no longer needed. Shortly after the date and time of the specified timestamp, DynamoDB deletes the item from your table without consuming any write throughput.

At first, it looks like a cool feature. Allows you to free up your database by automatically deleting the old records. Cool, isn’t it ?

But if you are someone(like me) who instantly gets amazed and implements the feature right away without going into depth, you are likely to face the problems I did.

Here are few things to be considered before implementing this feature on your application.

### TTL data type and value

The TTL field must be a number DataType. And the value should be in seconds i.e. timestamp in Unix epoch time format in seconds. In case of any other format, the TTL processes ignore the item.

### TTL precision
This feature can work only if your task requires hour precision, but not minute or seconds precision.

As Dynamodb docs states

> DynamoDB typically deletes expired items within 48 hours of expiration. The exact duration within which an item truly gets deleted after expiration is specific to the nature of the workload and the size of the table. Items that have expired and not been deleted will still show up in reads, queries, and scans.

In my case I was working with verification codes, sent as SMS, which needed to expire after XX minutes. For this TTL didn’t work as it didn’t guarantee minute precision, So I had to manually store timestamp and check for expiration within the lambda function.

### References

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html