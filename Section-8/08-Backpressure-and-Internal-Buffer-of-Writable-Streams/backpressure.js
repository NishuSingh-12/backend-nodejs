import fs from "node:fs";

console.time();
const readStream = fs.createReadStream(
  "C:\\Users\\admin\\Desktop\\bigmovie.mp4",
  {
    highWaterMark: 1 * 1024 * 1024,
  },
);

const writeStream = fs.createWriteStream("streams.mp4");

readStream.on("data", (chunk) => {
  const isEmpty = writeStream.write(chunk);
  if (!isEmpty) {
    readStream.pause();
  }
});

writeStream.on("drain", () => {
  readStream.resume();
});

readStream.on("end", () => {
  console.timeEnd();
});
