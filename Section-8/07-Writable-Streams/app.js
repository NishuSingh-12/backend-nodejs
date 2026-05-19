import fs from "node:fs";

// writeStream.write("abc");
// writeStream.write("123");
// writeStream.write("ABC");

// console.log(writeStream.writableHighWaterMark);
console.time();
const readStream = fs.createReadStream(
  "C:\\Users\\admin\\Desktop\\bigmovie.mp4",
  {
    highWaterMark: 1 * 1024 * 1024,
  },
);

const writeStream = fs.createWriteStream("streams.mp4");

readStream.on("data", (chunk) => {
  //   fs.appendFileSync("streams.mp4", chunk);
  writeStream.write(chunk);
});
readStream.on("end", () => {
  console.timeEnd();
});
