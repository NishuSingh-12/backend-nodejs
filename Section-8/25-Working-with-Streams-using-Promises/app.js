import fs from "node:fs/promises";

const fileHandle = await fs.open("text.txt", "w+");

const writeStream = fileHandle.createWriteStream();

writeStream.write("Nishu");

// const readStream = fileHandle.createReadStream();

// readStream.setEncoding("utf-8");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });
