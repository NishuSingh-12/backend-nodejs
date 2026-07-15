import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017/");

await client.connect();

const db = client.db("school");

// ********* Delete Collection*********
// const studentsCollection = db.collection("students");
// console.log(await studentsCollection.drop());

// ********* Delete single document*********
// const teachersCollection = db.collection("teachers");
// const deleteDocument = await teachersCollection.deleteOne({
//   _id: new ObjectId("6a57ae96e6f355f5b82d293b"),
// });
// console.log(deleteDocument);

// ********* Delete a field or Property *********
// const teacherCollection = db.collection("teachers");

// const deleteQuery = await teacherCollection.updateOne(
//   { _id: new ObjectId("6a57ae96e6f355f5b82d293c") },
//   { $unset: { age: "" } },
// );

// console.log(deleteQuery);

// ********* Delete Database *********
console.log(await db.dropDatabase());

client.close();
