pipe() and unpipe() Methods in Node.js
🧠 pipe() Method

The:

pipe()

method is used to:

connect a readable stream to a writable stream

so data automatically flows between them.

Basic Flow
Readable Stream
↓
pipe()
↓
Writable Stream
Example
import fs from "node:fs";

const readStream =
fs.createReadStream("movie.mp4");

const writeStream =
fs.createWriteStream("copy.mp4");

readStream.pipe(writeStream);
What Happens Internally?
Read chunk
↓
Automatically write chunk
↓
Repeat until stream ends
Benefits of pipe()

✅ Automatic data transfer
✅ Cleaner code
✅ Handles backpressure automatically
✅ Memory efficient
✅ Faster for large files

Without pipe()
readStream.on("data", (chunk) => {
writeStream.write(chunk);
});
With pipe()
readStream.pipe(writeStream);

Much simpler 😄

Multiple Piping
readStream
.pipe(transformStream)
.pipe(writeStream);
Example
Read File
↓
Compress
↓
Write File
🧠 unpipe() Method

The:

unpipe()

method is used to:

disconnect streams

that were connected using pipe().

Example
readStream.pipe(writeStream);

readStream.unpipe(writeStream);
What Happens?

After:

unpipe()

data stops flowing to the destination stream.

Real-World Analogy

🚰 Pipe connected:

Tank → Pipe → Bucket

unpipe() means:

disconnect the pipe

so water stops flowing.

Example with Timeout
import fs from "node:fs";

const readStream =
fs.createReadStream("movie.mp4");

const writeStream =
fs.createWriteStream("copy.mp4");

readStream.pipe(writeStream);

setTimeout(() => {
readStream.unpipe(writeStream);

console.log("Pipe disconnected");
}, 3000);
unpipe Event

When streams disconnect:

unpipe

event can occur on writable stream.

Example
writeStream.on("unpipe", () => {
console.log("Unpiped");
});
pipe() vs unpipe()
pipe() unpipe()
Connects streams Disconnects streams
Starts data flow Stops data flow
Automatic transfer Ends transfer
Important Notes
pipe()

Automatically handles:

backpressure
chunk transfer
stream ending
unpipe()

Only disconnects streams.

It does NOT:

destroy streams
close streams automatically
Interview Definition

“pipe() connects streams for automatic data transfer, while unpipe() disconnects previously piped streams.”

Final Summary

👉 pipe():

connect streams

👉 unpipe():

disconnect streams

👉 pipe() is:

memory efficient
optimized
backpressure-aware
