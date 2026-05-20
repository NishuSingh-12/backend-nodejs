import fs from "node:fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

writeStream.cork();
writeStream.write("a");
writeStream.write("a");
writeStream.write("a");
writeStream.write("a");
// console.log(writeStream.writable);
// writeStream.end();
// console.log(writeStream.writable);
console.log(writeStream.writableCorked);

writeStream.uncork();
console.log(writeStream.writableCorked);

writeStream.end();
console.log(writeStream.writableEnded);
console.log(writeStream.writableLength);

setTimeout(() => {
  console.log(writeStream.writableFinished);
  console.log(writeStream.writableLength);
}, 10);
