Writable Streams in Node.js
🧠 What is a Writable Stream?

A Writable Stream is a stream used to:

write data chunk by chunk

instead of writing everything into memory at once.

Why Writable Streams Are Important?

Suppose you want to write:

large files

like:

videos
logs
backups

Using normal methods may:

increase memory usage
block execution
reduce performance

Writable streams solve this by writing data gradually.

Creating a Writable Stream

Node.js provides:

createWriteStream()
Example
import fs from "node:fs";

const writeStream =
fs.createWriteStream("output.txt");
Writing Data

Use:

write()
Example
writeStream.write("Hello\n");

writeStream.write("Node.js\n");
Ending the Stream

Use:

end()

to signal that writing is complete.

Example
writeStream.end("Finished");
Basic Flow
Application
↓
Writable Stream
↓
File / Network / Destination
Important Events
Event Meaning
finish writing completed
error error occurred
drain buffer becomes empty
close stream closed
finish Event

Triggered after all data is written.

writeStream.on("finish", () => {
console.log("Writing completed");
});
error Event

Handles stream errors.

writeStream.on("error", (err) => {
console.log(err.message);
});
Internal Buffer in Writable Streams

Writable streams also maintain an:

internal buffer

to temporarily store outgoing chunks.

highWaterMark

Controls internal buffer size.

Example:

const writeStream =
fs.createWriteStream("file.txt", {
highWaterMark: 1 _ 1024 _ 1024
});
Meaning

1×1024×1024

means:

1 MB buffer size
write() Return Value
write()

returns:

true
false
Meaning
true

Buffer has space available.

false

Internal buffer is full.

The stream should wait for:

drain

event.

Example
const canWrite =
writeStream.write(chunk);

if (!canWrite) {
writeStream.once("drain", () => {
console.log("Buffer empty again");
});
}
Why drain Event Exists?

To prevent:

memory overload

This mechanism is called:

backpressure
Pipe with Writable Streams

Readable streams often pipe data into writable streams.

readStream.pipe(writeStream);
Real-World Uses
file writing
logging systems
video downloads
HTTP responses
backups
Writable Streams vs writeFile()
writeFile() Writable Stream
Full data at once Chunk-by-chunk
Higher memory usage Memory efficient
Good for small files Good for huge files
Advantages

✅ Low memory usage
✅ Efficient large file handling
✅ Supports backpressure
✅ Better performance

Final Summary

👉 Writable streams:

write data gradually

👉 Important methods:

write()
end()

👉 Important events:

finish
drain
error

👉 Best for:

huge files
logging
streaming systems 🚀
