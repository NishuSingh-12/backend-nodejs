import { Buffer } from "buffer";
import fs from "node:fs/promises";

const nodeBuffer = Buffer.from("Hello world!");

console.log(nodeBuffer);
console.log(nodeBuffer.readInt8());

// console.log(nodeBuffer.includes("He", 0, "utf-16le"));
// const nodeBuffer2 = Buffer.alloc(8);

// Methods //

// nodeBuffer.fill(98);
// console.log(nodeBuffer);

// nodeBuffer.copy(nodeBuffer2, 0, 0, 5);
// console.log(nodeBuffer2.toString());
// console.log(nodeBuffer.slice(5).toString());
// console.log(nodeBuffer.subarray(1).toString());

// const nodeBuffer = Buffer.alloc(8);
// nodeBuffer.write("abc");
// console.log(nodeBuffer.toString());
// console.log(nodeBuffer.toJSON());
// const nodeBuffer = Buffer.from("अ");
// console.log(nodeBuffer);
// console.log(nodeBuffer.toString("utf-8"));
// const nodeBuffer2 = Buffer.alloc(8);
// nodeBuffer2[0] = 98;
// nodeBuffer2[7] = 104;
// console.log(nodeBuffer2);
// console.log(nodeBuffer2.toString());
// fs.writeFile("file.txt", nodeBuffer2);
// console.log(nodeBuffer.toString("utf-8"));
// console.log(nodeBuffer.at(2));
// console.log(nodeBuffer.writeInt16BE(0x65, 2));
// console.log(nodeBuffer.writeInt16LE(0x65, 2));
console.log(nodeBuffer.swap16());

// Properties//
console.log(nodeBuffer.buffer);
console.log(nodeBuffer.byteLength);
console.log(nodeBuffer.byteOffset);
console.log(nodeBuffer.length);
