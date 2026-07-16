import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db("todoApp");

const collection = db.collection("todos");

const cursor = collection.find();

let count = 0;
while (await cursor.hasNext()) {
  count++;
  console.log(await cursor.next());
  if (count === 5) break;
}
console.log(await cursor.hasNext());

const data = await cursor.toArray();
console.log(data);
console.log(await cursor.hasNext());

// console.log(await cursor.hasNext()); //true
// console.log(await cursor.next());

// console.log(await cursor.hasNext()); //true
// console.log(await cursor.next());

// console.log(await cursor.hasNext()); //false
// console.log(await cursor.next()); //null

// console.log(await cursor.next());
// console.log(await cursor.next());
// console.log(await cursor.next());

// console.log(cursor[Symbol.asyncIterator]);

// for await (const document of cursor) {
//   console.log(document);
// }

client.close();
