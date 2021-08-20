---
title: Continuous deployment with GitHub Action
excerpt: This article demonstrates a straightforward approach to Continuous deployment using GitHub Actions..
createdAt: 2021-06-25
tags: GithubAction, Vuejs, Nodejs
---

<g-image alt="Example image" src="https://miro.medium.com/max/560/1*WMSpLyBw-DKqSvbtKbtkaQ.jpeg" />

This article demonstrates a straightforward approach to Continuous deployment using GitHub Actions. It will work for every type of backend & frontend i.e. Nodejs, Ruby, Python, PHP, Vue, React, Angular etc. The approach is simple, free of cost & more importantly it can be used on production.
It’s an intermediate level article; for those who are manually deploying application to server but struggling to automate it. Also, basic knowledge of GitHub Actions is expected.
These are two major steps
Deployment using SSH & GitHub
Automate step 1
Deployment using SSH & GitHub
This is the normal deployment strategy i.e. how you deploy applications manually via SSH & git.
Connect to server via SSH
Create SSH Key
Add public key to GitHub’s deployment keys
Clone Repo to server
Setup project
Run project
At this point, the project should run smoothly. Next step is to automate the same process via GitHub Action.
Automate Step 1
1. Configure necessary values
Go to GitHub Repo ⇒ Settings ⇒ Secrets
Create 3 New repository secrets
SSH_PRIVATE_KEY_DEV : SSH private key from server
HOST_DEV : Hostname of server
USERNAME : server username
eg: if you use ssh root@xx.xx.xx to access server. root is USERNAME and xx.xx.xx is HOST_DEV.
2. Create YML file
Inside project directory create a yml file deploy.yml at
Project Directory → .github → workflows → deploy.yml
deploy.yml file contains deployment script
Example 1: Auto deploy Vue/React projects into server

Example 2: Auto Deploy pm2 based Nodejs application to server & restart pm2

Push the changes to GitHub on dev or some other specified branch. Head over to GitHub ⇒ Your repository ⇒ Actions Tab.
There you will see the workflow your recently executed workflow-run. In case of success/failure it will show respective logs. Again, try some changes and push it to GitHub. It will update automatically.
As you have noticed, the yml script uses appleboy/ssh-action@master to make the task easier. Its a bit slower though. If you want faster alternative, same task can be done manually. Here's a nice article about it.
https://blog.benoitblanchon.fr/github-action-run-ssh-commands/
Another thing to ponder over is GitHub action pricing. Free plan comes with limitations. You can find more details here.
Hence, this approach does exactly the same thing as you did on Step 1 or the stuffs you used to do manually. It access the server via SSH. Credentials: username, host & SSH private key are provided earlier on
GitHub → Settings → Secrets
Then it executes specified command to build project & restart server/process manager if needed.