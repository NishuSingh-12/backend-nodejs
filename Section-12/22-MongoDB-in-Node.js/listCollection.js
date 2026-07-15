import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017/");

await client.connect();

const db = client.db("expenseApp");
// console.log(db.namespace);

// const collectionsList = await db.listCollections().toArray();
// console.log(collectionsList);

const collection = db.collection("expenses");

const expenses = await collection.find().toArray();

console.log(expenses);
