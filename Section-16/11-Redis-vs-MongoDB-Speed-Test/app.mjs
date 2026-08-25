import { createClient } from "redis";
import { MongoClient } from "mongodb";

const redisClient = createClient();
const mongoClient = new MongoClient("mongodb://admin:admin@localhost");

await mongoClient.connect();
await redisClient.connect();

const db = mongoClient.db();
const collection = db.collection("mongoTest");

// await redisClient.flushAll();
// await collection.deleteMany();

// 📝 Redis Write
// console.time("Redis Write");
// await redisClient.set(
//   "userString",
//   JSON.stringify({ _id: "123", name: "ProCodrr" }),
// );
// console.timeEnd("Redis Write");

// // 📝 MongoDB Write
// console.time("MongoDB Write");
// await collection.insertOne({ _id: "123", name: "ProCodrr" });
// console.timeEnd("MongoDB Write");

// // 📝 Redis Read
console.time("Redis String Read");
const redisStringData = await redisClient.get("userString");
console.log(JSON.parse(redisStringData));
console.timeEnd("Redis String Read");

console.time("Redis JSON Read");
const redisJSONData = await redisClient.json.get("user");
console.log(redisJSONData);
console.timeEnd("Redis JSON Read");

// 📝 MongoDB Read
// console.time("MongoDB Read");
// const mongoData = await collection.findOne({ _id: "123" });
// console.log(mongoData);
// console.timeEnd("MongoDB Read");

await redisClient.quit();
await mongoClient.close();
