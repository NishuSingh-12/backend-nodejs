import crypto from "node:crypto";
import { readFileSync } from "node:fs";

const fileData = readFileSync("C:\\Users\\admin\\Desktop\\movie2.mp4.mp4");

const hash = crypto
  .createHash("sha256")
  //   .update(Buffer.from("Hello world"))
  .update(fileData)
  .digest("hex");

console.log(hash);
