---
title: Sequelize CLI commands
excerpt: Frequently used commands for sequelize CLI - at one place.
createdAt: 2021-10-7
tags: JavaScript,Sequelize
---

## Migration
```bash 
# Create Migration
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# Run
npx sequelize-cli db:migrate

#Undo
npx sequelize-cli db:migrate:undo

# You can revert back to initial state by undoing all migrations with db:migrate:undo:all command. You can also revert back to a specific migration by passing its name in --to option.
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

## Seed

```bash

# Create Seed
npx sequelize-cli seed:generate --name demo-user

# Run
npx sequelize-cli db:seed:all

# Undo

#If you wish to undo the most recent seed:
npx sequelize-cli db:seed:undo

# If you wish to undo a specific seed:
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

# If you wish to undo all seeds:
npx sequelize-cli db:seed:undo:all
```

Reference: https://sequelize.org/master/manual/migrations.html