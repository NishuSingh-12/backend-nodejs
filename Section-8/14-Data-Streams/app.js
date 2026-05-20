import fs from "node:fs";
import { stderr, stdin } from "node:process";
import { spawn } from "node:child_process";

// const childProcess = spawn("cat", ["output.txt"]);
const childProcess = spawn("node", ["childApp.js"]);

childProcess.stdout.on("data", (chunk) => {
  console.log(chunk.toString());
});

// Readable Streams
// console.log(process.stdin);

// Writable Streams
// console.log(process.stdout);
// console.log(process.stderr);

// process.stdout.write("Nishu\n");

// const writeStream = fs.createWriteStream("output.txt");

// process.stdin.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

// stdin.pipe(writeStream);

// process.stderr.write("Error");

// console.log(process.stdin.fd); //0
// console.log(process.stdout.fd); //1
// console.log(process.stderr.fd); //2
