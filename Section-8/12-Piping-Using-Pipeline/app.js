import fs from "node:fs";
import { pipeline } from "node:stream";

console.time();

const readStream = fs.createReadStream(
  "C:\\Users\\admin\\Desktop\\bigmovie.mp4",
  {
    highWaterMark: 1 * 1024 * 1024,
  },
);

const writeStream = fs.createWriteStream("streams.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

pipeline(readStream, writeStream, (err) => {
  console.log(err);
});

// readStream.pipe(writeStream);
// setInterval(() => {
//   console.log("Hiii");
// }, 2000);
setTimeout(() => {
  readStream.destroy("Khatam");
}, 1000);
setInterval(() => {
  console.log("Hijiiii");
});
// readStream.on("error", (err) => {
//   console.log(err);
// });

// readStream.on("data", (chunkBuffer) => {
//   const isEmpty = writeStream.write(chunkBuffer);
//   if (!isEmpty) {
//     readStream.pause();
//   }
// });
// writeStream.on("drain", () => {
//   readStream.resume();
// });
readStream.on("end", () => {
  console.timeEnd();
});
