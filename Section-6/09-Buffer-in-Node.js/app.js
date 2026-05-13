import { Buffer } from "node:buffer";
const buff = new ArrayBuffer(4);
const nodeBuffer = Buffer.from(buff);
const uint8Array = new Uint8Array(buff);

uint8Array[0] = 97;
uint8Array[1] = 98;
uint8Array[2] = 99;
uint8Array[3] = 100;

// const nodeBuffer = Buffer.alloc(4);
// console.log(uint8Array.buffer);
// console.log(nodeBuffer.buffer);
// console.log(nodeBuffer);
console.log(nodeBuffer.toString());
// console.log(uint8Array.buffer === nodeBuffer.buffer);
