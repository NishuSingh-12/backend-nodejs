import fs from "node:fs";

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

readStream.pipe(writeStream);

setTimeout(() => {
  readStream.unpipe(writeStream);
}, 1000);

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
