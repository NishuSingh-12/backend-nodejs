import fs from "node:fs";

const fd = fs.openSync("text.txt");

const readBuffer = Buffer.alloc(10);

fs.read(
  fd,
  { buffer: readBuffer, length: 5, position: 2 },
  (err, bytesRead, buffData) => {
    //   console.log(err);
    console.log(bytesRead);
    console.log(buffData);
    console.log(buffData.toString());
    console.log(buffData.byteLength);
  },
);
