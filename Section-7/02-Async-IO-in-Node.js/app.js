// import fsPromises from "fs/promises";
import fs from "fs";
setTimeout(() => {
  console.log("Hiiii");
}, 0);

// Async IO
// const fileContent = await fsPromises.readFile("file.txt", "utf-8");
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log(123);
console.log("Nishhu");
// console.log(fileContent);

// sync IO

// const fileContent = fs.readFileSync("file.txt", "utf-8");
// console.log(fileContent);
