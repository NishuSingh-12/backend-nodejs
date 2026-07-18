import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
await client.connect();
console.log("Databse Connected");

const db = client.db();
const directories = db.collection("directories");
const users = db.collection("users");

const session = client.startSession();
session.startTransaction();

try {
  await directories.insertOne({ name: "db", userName: "NS" }, { session });
  await users.insertOne({ name: "NS", rootDirName: "db" }, { session });

  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
}

await client.close();

console.log("Databse Disconnected");
