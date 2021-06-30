---
title: Saalari
excerpt: Salari is a web application to view the latest salary trends in Africa.
createdAt: 2021-06-25
tags: WelApplication, SPA
---

## Problem
Client wanted a website to support his business.

## Objective

- Build a web app
- Web app should be a SPA
- Needs backend
- Should be lightning fast

## Research

The overall app is separated into 3 parts: Frontend, Backend, Admin panel.
Backend has all the business logic exposed via API endpoints. Frontend & Admin panel render API responses in suitable way. Backend has a dedicated background jobs mechanism to handle time consuming tasks.
Frontend is built as a single page application on VueJs. The design system was built using Tailwind css.
The admin panel to visualize data and stats is also built on VueJs. Customized Bootstrap is used for admin as it allows for faster development.
Backend is based on Nodejs, Express, Docker and Redis. Postgres is used as a database..



This approach requests for data until there is none left. This seems to be the most easier way to get all the data chunks by chunks. The most important thing to consider here is: Make sure you know how much data you are paginating through.