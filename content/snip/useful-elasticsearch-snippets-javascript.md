---
title: Useful ElasticSearch snippets
excerpt: ES snippets in JavaScript (AWS)
createdAt: 2022-03-22
tags: JavaScript, ElasticSearch
---

### Initialize & authenticate 

```javascript 
const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: '<URL>',
  auth: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  }
});
```

## List all index
```javascript 
es.client.cat.indices({ format: 'json' }) .then(console.log);
```

## delete index
```javascript 
await es.client.indices.delete({ index: 'INDEX_NAME' });
```

## count
```javascript 
const count = (await es.client.count({
    index: 'INDEX_NAME',
    body: {
        query: {
            bool: {
                filter: [
                    { terms: { "COLUMN_NAME.keyword": ['..', '..'] } },
                ]
            }
        },
    }
})).body.count;
```

## search

```javascript 
const objects = (await es.client.search({
    index: 'INDEX_NAME',
    body: {
        query: {
            bool: {
                filter: [
                    { terms: { "COLUMN_NAME.keyword": ['..', '..'] } },
                ]
            }
        },
    }
})).body.hits.hits;

const ids = objects.map(o => o._id);
const values = objects.map(o => o._source);
```