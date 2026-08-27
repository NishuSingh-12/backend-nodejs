import { createClient } from "redis";

const redisClient = createClient({
  password: "",
});
await redisClient.connect();

const result = await redisClient.ping();
console.log(result);

await redisClient.quit();
