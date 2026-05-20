import fs from "node:fs";
import {
  Readable,
  Writable,
  Duplex,
  Transform,
  PassThrough,
} from "node:stream";

const readStream = fs.createReadStream(
  "C:\\Users\\admin\\Desktop\\bigmovie.mp4",
  { highWaterMark: 1 * 1024 * 1024 },
);

const writeStream = fs.createWriteStream("streams.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

readStream.pipe(writeStream);
