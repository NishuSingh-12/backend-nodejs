import fs from "node:fs/promises";

const fileHandle = await fs.open("text.txt", "r+");

const { bytesRead, buffer } = await fileHandle.read({
  buffer: Buffer.alloc(10),
});

// console.log(buffer.toString());
// console.log(bytesRead);

const { buffer: writterBuffer, bytesWritten } =
  await fileHandle.write(" Nishu");
console.log({ writterBuffer });
console.log({ bytesWritten });

fileHandle.close();
