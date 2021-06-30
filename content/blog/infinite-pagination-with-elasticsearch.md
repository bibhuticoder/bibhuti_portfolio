---
title: Infinite pagination with ElasticSearch
excerpt: Elastic Search always returns top 10 results by default. To get large volume of results, we need to user Search API. Sometimes that isn't enough..
createdAt: 2021-06-25
tags: ElasticSearch, JavaScript
---

<g-image alt="Example image" src="/infinite-pagination-with-elasticsearch/header.jpeg" />

Elastic Search always returns top 10 results by default. To get large volume of results, we need to user Search API.
The Search API provides from and size parameters that can be used to retrieve predefined amount of data. But using from and size should be avoided to request very large volume at once. Reason: Search request works with multiple shards storing its requested hits into memory which leads into high memory + CPU usage.

Moreover Elastic Search has set the maximum limit of 10,000 hits to paginate using size and from parameters. It's actually a safeguard mechanism of ES. More info can be found on ES-docs.

A scenario can exist where we need to paginate through ES and retrieve very large set of data. In such case search_after parameter can be used.
The code below shows retrieving data infinitely via elastic search JavaScript API

```javascript
let data = [];
try {
  let query = {
    index: 'index-name',
    body: {
      query: {
        bool: {
            // ...
        }
      },
      sort: [{ "unique-property-on-index": "asc" }], // can be both asc & desc
      size: 100 // data to retrieve at a time
    }
  };

  var lastHits;
  do {
    lastHits = (await es.client.search(query)).body.hits.hits;
    if (lastHits.length > 0) {
      data = data.concat(lastHits);
      query.body["search_after"] = [lastHits.pop()._source["unique-property-on-index"]];
    }
  } while (lastHits.length > 0);
   
  // you get your results on "data" array
```


This approach requests for data until there is none left. This seems to be the most easier way to get all the data chunks by chunks. The most important thing to consider here is: Make sure you know how much data you are paginating through.