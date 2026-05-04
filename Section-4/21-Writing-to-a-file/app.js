import { appendFile } from "node:fs";
import { writeFile } from "node:fs";
import fs from "node:fs/promises";

// const contentBuffer = await fs.readFile("C:\\Users\\admin\\Desktop\\file-1");
// console.log(contentBuffer);

// fs.writeFile("file-1.txt", contentBuffer);

// const contentBuffer = await fs.readFile("image.png");

// fs.writeFile("C:\\Users\\admin\\Desktop\\shoe.png", contentBuffer);

try {
  const contentBuffer = await readfile("./nodejjs.png");
  writeFile("C:\\Users\\admin\\Desktop\\shoe.png", contentBuffer);
} catch (err) {
  appendFile(
    "error.log",
    `\n\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`,
  );
  console.log(err);
  console.log(`To see full error message go to ./error.log file`);
}
// setInterval(() => {
//   fs.writeFile("file-1.txt", new Date().toLocaleTimeString());
// }, 500);
