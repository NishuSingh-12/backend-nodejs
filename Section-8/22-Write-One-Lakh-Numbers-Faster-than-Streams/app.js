import fs from "node:fs";

console.time();
// default: 1.214s
const fd = fs.openSync("numbers.txt", "w");
for (let i = 1; i <= 100000; i++) {
  fs.writeSync(fd, `${i}, `);
}
fs.closeSync(fd);
console.timeEnd();

// 277.681ms
// const writeStream = fs.createWriteStream("streamsNum.txt");

// for (let i = 1; i <= 100000; i++) {
//   writeStream.write(`${i}, `);
// }
// writeStream.end();

// writeStream.on("finish", () => {
//   console.timeEnd();
// });
