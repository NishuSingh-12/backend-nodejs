import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017/");

await client.connect();

const db = client.db("college");

const studentCollection = db.collection("students");

// const result = await studentCollection.updateOne(
//   {
//     _id: new ObjectId("6a57ad3c0f4a438e7e5e51f5"),
//   },
//   { $set: { name: "Mini singh" } },
// );

// console.log(result);

const result2 = await studentCollection.replaceOne(
  { _id: new ObjectId("6a57ad3c0f4a438e7e5e51f5") },
  { myname: "Nishu singh" },
);

client.close();
