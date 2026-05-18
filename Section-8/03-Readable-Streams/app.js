// import fs from "node:fs/promises";
import fs from "node:fs";

console.time();
// const fileBuff = await fs.readFile("C:\\Users\\admin\\Desktop\\bigmovie.mp4");

// const fileBuff = await fs.readFile("C:\\Users\\admin\\Desktop\\movie2.mp4.mp4");

// fs.writeFile("video.mp4", fileBuff);

// console.log(fileBuff.toString());

const readStream = fs.createReadStream(
  "C:\\Users\\admin\\Desktop\\bigmovie.mp4",
  { highWaterMark: 1 * 1024 * 1024 },
);
readStream.on("data", (chunkBuffer) => {
  fs.appendFileSync("streams.mp4", chunkBuffer);
  if (chunkBuffer.byteLength < 1 * 1024 * 1024) {
    console.timeEnd();
  }
});
// let readCount = 0;
// const readStream = fs.createReadStream("chars.txt", { highWaterMark: 16 });
// readStream.on("data", (chunk) => {
//   console.log(chunk.byteLength);
//   readCount++;
// });
// readStream.on("end", () => {
//   console.log({ readCount });
// });
