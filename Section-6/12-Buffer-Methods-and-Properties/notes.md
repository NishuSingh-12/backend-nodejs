Buffer Methods and Properties in Node.js
=> Node.js Buffer provides many built-in methods and properties for working with binary data.

Creating Buffers

1. Buffer.alloc()
   Creates a zero-filled buffer.

const buffer = Buffer.alloc(4);
console.log(buffer);

2. Buffer.allocUnsafe()
   Creates an uninitialized buffer.

const buffer = Buffer.allocUnsafe(4);

3. Buffer.from()
   Creates buffer from data.

const buffer = Buffer.from("Hello");

Important Buffer Properties

1. length
   Returns buffer size in bytes.

const buffer = Buffer.from("Hello");
console.log(buffer.length);

2. buffer
   Returns underlying ArrayBuffer.

const buffer = Buffer.from("ABC");
console.log(buffer.buffer);

3. byteOffset
   Returns starting offset inside underlying memory.

console.log(buffer.byteOffset);

4. Buffer.poolSize
   Returns internal buffer pool size.

console.log(Buffer.poolSize);

Important Buffer Methods

1. toString()
   Converts buffer to string.

const buffer = Buffer.from("Hello");
console.log(buffer.toString());

2. fill()
   Fills buffer with a value.

const buffer = Buffer.alloc(4);
buffer.fill(1);
console.log(buffer);

3. slice()
   Extracts part of a buffer.

const buffer = Buffer.from("Hello");
console.log(buffer.slice(0, 2).toString());

4. copy()
   Copies data from one buffer to another.

const source = Buffer.from("Hello");
const target = Buffer.alloc(5);
source.copy(target);
console.log(target.toString());

5. equals()
   Compares two buffers.

const a = Buffer.from("Hi");
const b = Buffer.from("Hi");
console.log(a.equals(b));

6. includes()
   Checks whether buffer contains a value.

const buffer = Buffer.from("Hello");
console.log(buffer.includes("H"));

7. indexOf()
   Finds position of value.

const buffer = Buffer.from("Hello");
console.log(buffer.indexOf("e"));

8. write()
   Writes string into buffer.

const buffer = Buffer.alloc(10);
buffer.write("Hi");
console.log(buffer.toString());

9. subarray()
   Returns part of buffer without copying memory.

const buffer = Buffer.from("Hello");
console.log(buffer.subarray(0, 2).toString());

Numeric Read/Write Methods

Writing Numbers:

Method Bytes
writeInt8() 1 byte
writeInt16LE() 2 bytes
writeInt32LE() 4 bytes

Example:
const buffer = Buffer.alloc(4);
buffer.writeInt16LE(500, 0);
console.log(buffer);

Reading Numbers:

Method Bytes
readInt8() 1 byte
readInt16LE() 2 bytes
readInt32LE() 4 bytes

Example:
console.log(buffer.readInt16LE(0));

Encodings Supported

Buffers support:

utf8
ascii
hex
base64

Example:
const buffer = Buffer.from("Hello", "utf8");
