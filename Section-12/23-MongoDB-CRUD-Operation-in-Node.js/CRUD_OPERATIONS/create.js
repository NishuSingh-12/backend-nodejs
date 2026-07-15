import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017/");

await client.connect();

const db = client.db("college");

const studentsCollection = db.collection("students");
const teachersCollection = db.collection("teachers");

const studentRes = await studentsCollection.insertOne({
  name: "Nishu Singh",
  age: 26,
});

const teacherRes = await teachersCollection.insertMany([
  { name: "Anurag singh", age: 55 },
  { name: "Jayendra singh", age: 45 },
]);

console.log(studentRes);
console.log(teacherRes);
