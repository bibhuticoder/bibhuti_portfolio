---
title: Scalable schema for DynamoDB
excerpt: DynamoDB is a NoSql database and models data in Table-Items-Attributes structure. It allows data-item to be...
createdAt: 2020-08-17
tags: Database, NodeJs, DynamoDB
thumbnail: https://miro.medium.com/max/1400/1*9b6sArK5hvFUr141t4JLKg.jpeg
caption: Photo by <a href="https://unsplash.com/@hiteshchoudhary">Hitesh Choudhary</a> on Unsplash
time: 3
---


DynamoDB is a NoSql database and models data in Table-Items-Attributes structure. It allows data-item to be schema less. It’s a huge advantage as it allows you to write data in any format as desired. Even if structure of your data changes eg: a new field is added/deleted at later point of time, it adapts to it well.

With freedom of schema flexibility, data format inconsistency comes alongside. Even if database provides the power of flexibility, the schema shouldn’t change to that point at which it affects the performance of the system. It becomes an overhead to write separate business logic to manage the data inconsistency. It’s a good idea to resolve this issue on database layer.

I came up with a simple, yet effective solution to solve this problem. It worked pretty well in my scenario, hope it works well in yours too. For demonstration purpose Nodejs runtime have been used for business logic.

Here is the dead-simple schema for all of your DynamoDB tables.

```json
{
	"id": "objectType-23423423-234234-234234-23423",
	"data": {...},
	"createdAt": 4564564564,
	"updatedAt": 4564564567,
	"createdBy": "user-630eb68f-e0fa-5ecc-887a-7c7a62614681", //optional
	"deletedAt": 4565961589 // optional
}
```

As you can see this schema provides all the required data and metadata fields. The `data` field will contain the core information and others are metadata.

> IMPORTANT: If any of the data may need indexing on future, keep it outside “data” as dynamodB doesn’t allow to index or project nested values.

---

## id

id is the primary key to uniquely identify each item in a table. As DynamoDB doesn’t provide automatic generation of this field, the developer is required to generate it manually. The [uuidjs](https://github.com/uuidjs/uuid) library seems to be the best fit.

```javascript
import { v1 as uuidv1 } from 'uuid';

function uuid(identifier){
	return identifier + '-' + uuidv1();
}

uuid('user'); // ⇨ 'user-9k1teb4d-5b7d-7b2d-9bdd-2b0d7b3dcb6d'
uuid('product'); // ⇨ 'product-6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b'
```

v1(version 1) of uuid guarantees that it is always unique even if everyone is doing millions of database insertions/sec. An identifier has been pre-appended so that its more unique and easier to separate from others(its optional though).
Read more about the UUID algorithm [here](https://tools.ietf.org/html/rfc4122.html).

## data

The `data` field is a map type attribute. Maps are enclosed in curly braces({ … }). It is similar to a JSON object. There are no restrictions on the data types, and the elements do not have to be of the same type.

Example:
```javascript
// USER
{
	"id": "user-23423423-234234-234234-23423",
	"data": {
		"firstname": "John",
		"lastname": "Doe",
		"email": "john.doe@gmail.com",
		"age": "32"
	},
	"createdAt": 7124564538,
	"updatedAt": 7124569634
}

// PRODUCT
{
	"id": "product-23423423-234234-234234-23423",
	"data": {
		"title": "Serverless ebook",
		"author": "John Doe",
		"price": 456.67,
		"discount": 3.5
		"publisher": "John's Company"
	},
	"createdAt": 7124566789,
	"updatedAt": 7124568097,
	"createdBy": "user-23423423-234234-234234-23423"
}
```

The structure is similar for both user and the product. Core data lies inside the data field.

> Make sure that the value inside data field isn’t too inconsistent to manage. That inconsistency needs to be handed at either back-end or via front-end code. In case of very complicated inconsistency, the whole idea of this schema becomes useless.

## timestamps

The timestamp field provides information on when the data was created and updated. For `createdAt` field, a timestamp needs to be inserted during data creation. For `updatedAt` field a simple function can be used to wrap the update logic. The function then automatically appends `updatedAt` field each time. Here’s a simple one which I wrote for my use case.

```javascript
// automatically appends updatedAt timestamp
const update = async (updateParams) => {
    try {
        const timestamp = new Date().getTime();
        params.UpdateExpression = params.UpdateExpression + ', #updatedAt = :updatedAt';
        params.ExpressionAttributeNames['#updatedAt'] = 'updatedAt';
        params.ExpressionAttributeValues[':updatedAt'] = timestamp;
        return await db.update(updateParams).promise();
    }
    catch (error) { throw error; }
};

var params = {
    TableName: 'PRODUCTS_TABLE',
    Key: { "id": someProductId },
    ConditionExpression: 'id = :id AND createdBy = :createdBy',
    UpdateExpression: 'set #data.#price = :updatedPrice',
    ExpressionAttributeNames: { '#data': 'data', '#price': 'price' },
    ExpressionAttributeValues: { ':id': someProductId, ':updatedPrice': 3456.78, ':createdBy': creatorId }
};
try {
		await dynamoDB.update(params);
} catch (error) {
	  console.log(error);
}
```

For implementing the [soft delete](https://en.wiktionary.org/wiki/soft_deletion) functionality, you can use the deletedAt field. In order to track the item’s author createdBy field comes in handy.

---

This is my solution to tackle the minor changes in database schema while working with NoSql databases. But this can lead to problem if you need to index nested data; dynamo doesn’t allow to index nested attributes. So if you have data that may need indexing you need to keep it out of “data” property.

If you find any flaw, have some improvements or you have a different or more cleaner approach, please share in the comments below.