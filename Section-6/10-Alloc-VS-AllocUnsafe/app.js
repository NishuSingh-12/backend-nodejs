import { Buffer } from "node:buffer";

// const buffer1 = Buffer.alloc(10000);
// const buffer2 = Buffer.allocUnsafe(10000);

// console.log(buffer1);
// console.log(buffer2);

// console.log(buffer1.toString());
// console.log(buffer2.toString());

console.time("Buffer.alloc");
for (let i = 0; i < 100000; i++) {
  Buffer.alloc(1024); //1KB
}
console.timeEnd("Buffer.alloc");

console.time("Buffer.allocUnsafe");
for (let i = 0; i < 100000; i++) {
  Buffer.allocUnsafe(1024); //1KB
}
console.timeEnd("Buffer.allocUnsafe");
