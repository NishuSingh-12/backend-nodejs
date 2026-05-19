import fs from "fs";
import { setInterval } from "timers/promises";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });
readStream.on("data", (chunk) => {
  const { readableHighWaterMark, bytesRead } = readStream;
  if (readableHighWaterMark === bytesRead) {
    fs.writeFileSync("abc.txt", chunk);
  } else {
    fs.appendFileSync("abc.txt", chunk);
  }
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 500);
});

readStream.on("resume", () => {
  console.log("Stream Resumed");
});
readStream.on("pause", () => {
  console.log("Stream pause");
});

// console.log(readStream.readableFlowing); // To check streams initial state
// console.log(readStream.readableEnded);
// readStream.pause();
// console.log(readStream.isPaused());
