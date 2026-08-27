import { createClient } from "redis";

const redisClient = createClient();
await redisClient.connect();

const allFields = await redisClient.hGetAll("userHash");
console.log(allFields);

await redisClient.quit();
