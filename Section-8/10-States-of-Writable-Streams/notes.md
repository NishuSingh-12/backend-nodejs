States of Writable Streams
🧠 Introduction

Writable streams in Node.js go through different states while handling data.

These states describe:

whether the stream can accept data
whether writing is happening
whether the stream is closed or destroyed
Main States of Writable Streams

Writable streams mainly move through:

4 important states

1. Writable State

In this state:

stream is ready to accept data

using:

write()
Example
writeStream.write("Hello");
What Happens?
Data enters internal buffer
↓
Data gradually written to destination 2. Buffered State

If data is written faster than the destination can process:

chunks accumulate inside internal buffer
Example Situation
Fast writing
↓
Internal buffer fills
↓
Backpressure occurs
Important Property
writableLength

shows current buffered data size.

Example
console.log(writeStream.writableLength); 3. Ending State

When:

end()

is called:

stream stops accepting new writes

but remaining buffered data is still flushed.

Example
writeStream.end("Finished");
What Happens Internally?
No more write()
↓
Remaining buffer flushed
↓
finish event emitted
Important Property
writableEnded

returns:

true
false
Example
console.log(writeStream.writableEnded); 4. Finished / Closed State

After:

all buffered data is written
resources are released

the stream becomes:

finished / closed
finish Event
writeStream.on("finish", () => {
console.log("Writing completed");
});
close Event
writeStream.on("close", () => {
console.log("Stream closed");
});
State Flow
Writable State
↓
Buffered State
↓
Ending State
↓
Finished / Closed State
destroyed State

If:

destroy()

is called:

stream forcefully terminates
Example
writeStream.destroy();
Important Property
destroyed
Example
console.log(writeStream.destroyed);
Important Writable Stream Properties
Property Meaning
writableEnded end() called or not
writableFinished all data flushed or not
writableLength buffered data size
destroyed stream destroyed or not
Example
console.log(writeStream.writableEnded);

console.log(writeStream.writableFinished);

console.log(writeStream.destroyed);
Real-World Analogy

📦 Parcel Delivery System:

Stream State Analogy
Writable Accepting parcels
Buffered Parcels waiting in warehouse
Ending No new parcels accepted
Finished Delivery completed
Why Stream States Matter?

They help:

manage memory
handle backpressure
safely close streams
prevent write errors

Final Summary

👉 Writable streams maintain multiple states
👉 Internal buffers temporarily store chunks
👉 end() moves stream toward finishing
👉 finish means:

all data successfully written

👉 Important properties:

writableEnded
writableFinished
destroyed
