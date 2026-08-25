import redisClient from "./redis.js";

// const result = await redisClient.setJSON("test", { user: "Nishu" });
const result = await redisClient.getJSON("test");

console.log(result);

redisClient.quit();
