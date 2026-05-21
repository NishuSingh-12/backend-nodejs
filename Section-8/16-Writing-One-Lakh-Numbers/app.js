import fs from "node:fs";

console.time();
// 25.883s
// for (let i = 1; i <= 100000; i++) {
//   if (i === 1) {
//     fs.writeFileSync("numbers.txt", `${i}, `);
//   } else {
//     fs.appendFileSync("numbers.txt", `${i}, `);
//   }
// }
// console.timeEnd();

const writeStream = fs.createWriteStream("streamsNum.txt");

for (let i = 1; i <= 100000; i++) {
  writeStream.write(`${i}, `);
}
writeStream.end();

writeStream.on("finish", () => {
  console.timeEnd();
});
