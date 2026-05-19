import fs from "node:fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

writeStream.write("a");
writeStream.write("a");
writeStream.write("a");
writeStream.write("a");

// writeStream.on("open", (fd) => {
//   console.log("fd", fd);
// });

writeStream.end("n");

writeStream.on("finish", () => {
  console.log("Finished");
});
writeStream.on("close", () => {
  console.log("closed");
});
