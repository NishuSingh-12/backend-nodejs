import fs from "node:fs";

const fd = fs.openSync("text.txt", "w");

fs.write(fd, "😊", (err, bytesWritten, writtenData) => {
  console.log(bytesWritten);
  console.log(writtenData);
});

// fs.write(fd, "(❁´◡`❁)", (err, bytesWritten, writtenData) => {
//   console.log(bytesWritten);
//   console.log(writtenData);
// });

// const buff = Buffer.from("1234");

// fs.write(fd, buff, (err, bytesWritten, writtenData) => {
//   console.log(bytesWritten);
//   console.log(writtenData);
// });
// fs.write(fd, "abcd", (err, bytesWritten, writtenData) => {
//   console.log(bytesWritten);
//   console.log(writtenData);
// });
