Duplex, Transform and PassThrough Streams in Node.js
🧠 Introduction

Besides readable and writable streams, Node.js also provides special stream types:

Duplex Streams
Transform Streams
PassThrough Streams

These are advanced stream types used in:

networking
compression
encryption
data transformation
real-time systems

1. Duplex Streams
   🧠 What is a Duplex Stream?

A Duplex Stream can:

read data and write data

at the same time.

It combines:

Readable Stream
Writable Stream

into a single stream.

Flow
Read Data ← Duplex Stream → Write Data
Real-World Example

📞 Phone Call

You can:

speak
listen

simultaneously.

Examples of Duplex Streams
TCP sockets
WebSockets
file compression streams
Example
import { Duplex } from "node:stream";

const duplex = new Duplex({
read(size) {
this.push("Hello\n");

    this.push(null);

},

write(chunk, encoding, callback) {
console.log(chunk.toString());

    callback();

}
});

duplex.on("data", (chunk) => {
console.log(chunk.toString());
});

duplex.write("Node.js");
Characteristics

✅ Can read and write
✅ Two-way communication
✅ Used in networking

2. Transform Streams
   🧠 What is a Transform Stream?

A Transform Stream is a special type of:

Duplex Stream

that:

modifies data while streaming
Flow
Input Data
↓
Transform Stream
↓
Modified Output Data
Real-World Example

🧃 Juice Machine

Fruits
↓
Machine
↓
Juice

Input changes into output.

Examples of Transform Streams
compression
encryption
uppercase conversion
parsing
Example
import { Transform } from "node:stream";

const upperCase =
new Transform({
transform(chunk, encoding, callback) {
const result =
chunk
.toString()
.toUpperCase();

      callback(null, result);
    }

});

upperCase.on("data", (chunk) => {
console.log(chunk.toString());
});

upperCase.write("hello");

upperCase.end();
Output
HELLO
Characteristics

✅ Reads data
✅ Modifies data
✅ Outputs transformed data

Common Uses
gzip compression
encryption
parsing
encoding conversion 3. PassThrough Streams
🧠 What is a PassThrough Stream?

A PassThrough Stream is a special transform stream that:

does NOT modify data

It simply passes data through unchanged.

Flow
Input Data
↓
PassThrough
↓
Same Output Data
Why Use PassThrough?

Used for:

monitoring streams
logging
debugging
measuring data flow
Example
import { PassThrough } from "node:stream";

const pass =
new PassThrough();

pass.on("data", (chunk) => {
console.log(chunk.toString());
});

pass.write("Hello");

pass.end();
Output
Hello
Characteristics

✅ No data transformation
✅ Simple forwarding
✅ Useful for monitoring pipelines

Relationship Between Them
Readable + Writable
↓
Duplex
↓
Transform Stream
↓
PassThrough Stream
Difference Table
Stream Type Read Write Modify Data
Duplex ✅ ✅ ❌
Transform ✅ ✅ ✅
PassThrough ✅ ✅ ❌
Real-World Analogy
Stream Analogy
Duplex Phone call
Transform Juice machine
PassThrough Transparent pipe
Common Use Cases
Duplex
sockets
chat apps
networking
Transform
compression
encryption
parsing
PassThrough
debugging
logging
monitoring

Final Summary

👉 Duplex:

read + write

👉 Transform:

modify streamed data

👉 PassThrough:

forward data unchanged

🚀
