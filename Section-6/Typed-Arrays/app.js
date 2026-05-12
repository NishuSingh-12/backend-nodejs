const a = new ArrayBuffer(4);
const uint8Array = new Uint8Array(a);

uint8Array[0] = 0xfe;
uint8Array[1] = 0x3c;
// uint8Array[2] = 0x8a;
// uint8Array[3] = 0xff;

const b = a.transfer();

console.log(a);
console.log(b);

// const uint8Array = new Uint8Array([0xfe, 0x3c, 0, 0xff]);
// const uint8Array = new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xfa);

// const uint8Array = new Uint8Array(a);
// const uint16Array = new Uint16Array(a);
// const uint32Array = new Uint32Array(a);

// console.log(uint8Array);
// console.log(uint16Array);
// console.log(uint32Array);
