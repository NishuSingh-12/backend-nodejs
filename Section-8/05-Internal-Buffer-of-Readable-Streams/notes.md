Internal Buffer of Readable Streams
🧠 Introduction

Readable streams in Node.js internally maintain a:

buffer

to temporarily store incoming data chunks before they are consumed by the application.

Why Internal Buffer Exists?

Data may arrive:

faster than the application can process it
continuously from disk/network

So streams temporarily store chunks in memory.

Basic Flow
Source (File/Network)
↓
Internal Buffer
↓
Application Reads Data
Example
import fs from "node:fs";

const readStream =
fs.createReadStream("movie.mp4");

readStream.on("data", (chunk) => {
console.log(chunk.length);
});
What Happens Internally?
File data enters stream
↓
Stored inside internal buffer
↓
Chunk emitted via "data" event
Buffer Stores Chunks

The internal buffer stores:

Buffer objects

temporarily.

highWaterMark

The size of the internal buffer is controlled by:

highWaterMark
Example
const readStream = fs.createReadStream(
"movie.mp4",
{
highWaterMark: 1 _ 1024 _ 1024
}
);
Meaning

1×1024×1024

means:

1 MB internal buffer size
Default Buffer Size

For file readable streams:

64 KB

is usually the default.

Important Concept

The internal buffer does NOT store the entire file.

It stores only:

limited chunks temporarily

which makes streams memory efficient.

Flowing Mode and Buffer

In flowing mode:

data is consumed automatically

so the internal buffer clears continuously.

Paused Mode and Buffer

In paused mode:

data accumulates in buffer

until the application reads it.

Example of Manual Reading
readStream.on("readable", () => {
let chunk;

while ((chunk = readStream.read()) !== null) {
console.log(chunk.length);
}
});
Buffer Emptying

When chunks are consumed:

memory is freed
new chunks are loaded
Internal Buffer vs Buffer Class
Internal Stream Buffer Buffer Class
Managed automatically Created manually
Temporary storage Binary data container
Used inside streams Used everywhere
Why Internal Buffer is Important?

✅ Smooth data flow
✅ Prevents memory overload
✅ Helps with backpressure handling
✅ Improves streaming performance

Real-World Analogy

📦 Warehouse storage between:

truck delivery
shop processing

The warehouse acts like the internal buffer.

Backpressure Relation

If the application reads data slowly:

internal buffer fills up
stream slows incoming data

This mechanism is called:

backpressure

Final Summary

👉 Streams internally maintain buffers
👉 Buffers temporarily store chunks
👉 highWaterMark controls buffer size
👉 Helps in:

smooth streaming
memory efficiency
backpressure management 🚀
