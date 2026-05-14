import { Buffer } from "node:buffer";

const a = Buffer.allocUnsafe(10);

a[0] = 65;
a[1] = 66;
a[2] = 67;

console.log(a);

debugger;

// import { Buffer, constants } from "node:buffer";

//Condition for allocUnsafe to use Buffer pool
//BufferSize < Buffer.poolSize >>> 1

// const a = Buffer.alloc(4);
// const b = Buffer.allocUnsafe(4);
// console.log(a);
// console.log(constants.MAX_LENGTH);

// const z = Buffer.alloc(4);
// const join = Buffer.concat([a, z]);
// const b = Buffer.allocUnsafe(4095);
// const c = Buffer.allocUnsafe(4);
// b[2] = 97;
// c[0] = 101;
// console.log(b.buffer === c.buffer);
// console.log(a.byteLength);
// console.log(b.byteLength);
// console.log("**************************");
// console.log(a.buffer.byteLength);
// console.log(b.buffer.byteLength);
// console.log(Buffer.poolSize);
// console.log(join);
