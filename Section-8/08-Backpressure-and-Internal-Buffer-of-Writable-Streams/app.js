import fs from "node:fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

let i = 1;

// setTimeout(() => {
//   console.log(writeStream.writableLength);
// }, 10);

writeStream.on("drain", () => {
  console.log("drain", writeStream.writableLength);
  write1000A();
});
function write1000A() {
  while (i <= 1000) {
    console.log(writeStream.writableLength);
    let isEmpty = writeStream.write("a");
    i++;
    if (!isEmpty) {
      break;
    }
    console.log(isEmpty);
  }
}
write1000A();
// console.log(writeStream.writableLength);
// let isEmpty = writeStream.write("a");
// console.log(isEmpty);
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write("a");
// console.log(isEmpty);
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write("a");
// console.log(isEmpty);
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write("a");
// console.log(isEmpty);
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write("a");
// console.log(isEmpty);
// console.log(writeStream.writableLength);
