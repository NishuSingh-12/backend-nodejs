// import fs from "node:fs/promises";
import fs from "node:fs";

// const content = fs.readFileSync("./index.htm", "utf-8"); //read file content but we should
// avoid this because it runs synchronously which blcok the main thread.

// const content = fs.readFile("./index.htm", (err, data) => {
//   const content = data.toString();
//   console.log(content);
// });  Not block the main thread
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 5);
// const a = await fs.readFile("./content.txt");
// console.log("File reading is done");
// console.log("End");

// console.log("Start");

// const data = await fs.readFile("./index.html");
// console.log(data.toString());

// console.log("End");

console.log("Start");

fs.readFile("file.txt", (err, data) => {
  console.log("File read");
});

console.log("End");
