---
title: Posgres - frequently used commands
excerpt: Login, view tables, view schema, add/remove columns, data etc. 
createdAt: 2021-06-25
tags: Database
---
```bash
# Login
psql -d <dbname> -U <username>

# list all tables
\dt

# describe table
\d <db_name>;

# add column
ALTER TABLE <table_name> ADD COLUMN "col_name" VARCHAR(255);

# remove column
ALTER TABLE  <table_name> DROP COLUMN "col_name";

# delete users
TRUNCATE table "tablename";
```