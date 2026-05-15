import fs from "node:fs/promises";

//btoa()
const bufferContent = await fs.readFile("video.mp4");
const a = bufferContent.toString("base64");
fs.writeFile("video.txt", a);

// // console.log(a);
// fs.writeFile("new-text.txt", a);

// console.log(a);

//atob()
// fs.writeFile("new-text.txt", "YWJj", "base64");
