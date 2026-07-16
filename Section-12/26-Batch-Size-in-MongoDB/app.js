import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");
await client.connect();

const db = client.db("todoApp");
const collection = db.collection("todos");
const cursor = collection.find().batchSize(100);

const data = await cursor.toArray();
console.log(data.map(({ title }) => ({ title })));

client.close();
