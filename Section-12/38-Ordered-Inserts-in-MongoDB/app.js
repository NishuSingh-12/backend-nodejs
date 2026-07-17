import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db();
const collection = db.collection("users");

const res = await collection.insertMany(
  [
    { _id: new ObjectId("6a59f3ac5f6935d896c7edc3"), name: "Shyam" },
    { name: "Hari" },
    { name: "Raman" },
    { name: "Suman" },
  ],
  { ordered: false },
);

console.log(res);

// const data = await collection.find().toArray();
// console.log(data);
client.close();
