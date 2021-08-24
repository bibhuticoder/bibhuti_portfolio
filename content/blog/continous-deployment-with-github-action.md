---
title: Continuous deployment with GitHub Action
excerpt: This article demonstrates a straightforward approach to Continuous deployment using GitHub Actions..
createdAt: 2021-06-25
tags: GithubAction, Vuejs, Nodejs
thumbnail: https://miro.medium.com/max/560/1*WMSpLyBw-DKqSvbtKbtkaQ.jpeg
time: 2
---

This article demonstrates a straightforward approach to Continuous deployment using GitHub Actions. It will work for every type of backend & frontend i.e. Nodejs, Ruby, Python, PHP, Vue, React, Angular etc. The approach is simple, free of cost & more importantly it can be used on production.

> It’s an intermediate level article; for those who are manually deploying application to server but struggling to automate it. Also, basic knowledge of GitHub Actions is expected.

These are two major steps
- Deployment using SSH & GitHub
- Automate step 1

## Deployment using SSH & GitHub
This is the normal deployment strategy i.e. how you deploy applications manually via SSH & git.
1. Connect to server via SSH
2. Create SSH Key
3. Add public key to GitHub’s deployment keys
4. Clone Repo to server
5. Setup project
6. Run project

At this point, the project should run smoothly. Next step is to automate the same process via GitHub Action.

## Automate Step 1

### 1. Configure necessary values

Go to GitHub Repo ⇒ Settings ⇒ Secrets

Create 3 `New repository secrets`

- SSH_PRIVATE_KEY_DEV : SSH private key from server
- HOST_DEV : Hostname of server
- USERNAME : server username
eg: if you use `ssh root@xx.xx.xx` to access server. `root` is USERNAME and `xx.xx.xx` is HOST_DEV.

### 2. Create YML file

Inside project directory create a yml file `deploy.yml` at

Project Directory → .github → workflows → `deploy.yml`

`deploy.yml` file contains deployment script

#### Example 1: Auto deploy Vue/React projects into server

```bash
# name of github action workflow
name: deploy-to-dev-droplet
on: 
  push:
    branches:
      - dev # this script will run when pushed to "dev" branch
jobs:
  deploy-frontend:
    runs-on: ubuntu-latest #using latest ubuntu to build application
    steps:
      - name: Deploy frontend
        uses: appleboy/ssh-action@master
        with:
          key: ${{ secrets.SSH_PRIVATE_KEY_DEV }}
          host: ${{ secrets.HOST_DEV }}
          username: ${{ secrets.USERNAME }}
          script: |
            cd /frontend-project-folder
            git stash
            GIT_SSH_COMMAND='ssh -i ~/.ssh/id_rsa_frontend' git pull origin dev
            export NVM_DIR=~/.nvm
            source ~/.nvm/nvm.sh
            npm install
            npm run build
```

#### Example 2: Auto Deploy pm2 based Nodejs application to server & restart pm2

```bash
name: deploy-to-dev-droplet
on: 
  push:
    branches:
      - dev
jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy backend
        uses: appleboy/ssh-action@master
        with:
          key: ${{ secrets.SSH_PRIVATE_KEY_DEV }}
          host: ${{ secrets.HOST_DEV }}
          username: ${{ secrets.USERNAME }}
          script: |
            cd /backend-project-folder
            sudo git stash
            sudo GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa_backend" git pull origin dev
            export NVM_DIR=~/.nvm
            source ~/.nvm/nvm.sh
            npm install
            pm2 restart 0
```

Push the changes to GitHub on `dev` or some other specified branch. Head over to GitHub ⇒ Your repository ⇒ Actions Tab.

There you will see the workflow your recently executed workflow-run. In case of success/failure it will show respective logs. Again, try some changes and push it to GitHub. It will update automatically.

---

As you have noticed, the `yml` script uses `appleboy/ssh-action@master` to make the task easier. Its a bit slower though. If you want faster alternative, same task can be done manually. Here's a nice article about it.

https://blog.benoitblanchon.fr/github-action-run-ssh-commands/

Another thing to ponder over is GitHub action pricing. Free plan comes with limitations. You can find more details [here](https://github.com/pricing).

---

Hence, this approach does exactly the same thing as you did on Step 1 or the stuffs you used to do manually. It access the server via SSH. Credentials: username, host & SSH private key are provided earlier on

GitHub → Settings → Secrets

Then it executes specified command to build project & restart server/process manager if needed.