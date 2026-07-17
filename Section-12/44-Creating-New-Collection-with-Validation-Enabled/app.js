import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");
await client.connect();
const db = client.db();

// await db.createCollection("users");
await db.command({
  create: "users",
  validator: {
    name: {
      $type: "string",
    },
    age: {
      $type: "int",
    },
  },
  validationAction: "warn",
});

// const collection = await db.collection("users");

// await db.command({
//   collMod: "users",
//   validator: {
//     name: { $type: "string" },
//     age: { $type: "int", $gte: 18, $lte: 80 },
//   },
// });

// const collection = await db.listCollections().toArray();
// console.log(collection);

// try {
//   await collection.insertOne({ name: "Raam" });
// } catch (err) {
//   console.log(err);
// }

client.close();
