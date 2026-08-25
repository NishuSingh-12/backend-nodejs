import { createClient } from "redis";

const redisClient = await createClient().connect();
// const result = await redisClient.set("name", "Nishu singh");
// const result = await redisClient.get("name");

// redisClient.select(1);

const user = {
  name: "Piyanshi",
  age: 30,
  email: "piyanshi@gmail.com",
};
const result = await redisClient.set("user", JSON.stringify(user));
console.log(result);

const a = await redisClient.quit();
console.log(a);
