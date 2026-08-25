import redisClient from "./redis.js";

// const result = await redisClient.json.get("user:1");

// const result = await redisClient.json.get("user:1", {
//   path: "$.*",
// });

// const result = await redisClient.json.get("user:1", {
//   path: "$.location",
// });

// const result = await redisClient.json.arrPop("user:1", "$.hobbies");
// const result = await redisClient.json.arrPop("user:1", {
//   path: "$.hobbies",
// });
// const result = await redisClient.json.arrPop("user:1", {
//   path: "$.hobbies",
//   index: 0,
// });

const result = await redisClient.json.get("user:1", {
  path: "$..name",
});

console.log(result);

redisClient.quit();
