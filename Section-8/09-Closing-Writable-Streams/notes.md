Closing Writable Streams in Node.js
🧠 Introduction

After writing data into a writable stream, we should properly:

close the stream

so that:

remaining buffered data gets flushed
file descriptors get released
memory/resources are cleaned properly
Why Closing is Important?

If a writable stream is not closed properly:

❌ data may remain unwritten
❌ resources may leak
❌ file may become corrupted

end() Method

Writable streams are usually closed using:

end()
What end() Does
Stops further writing +
flushes remaining buffered data +
closes the stream
Basic Example
import fs from "node:fs";

const writeStream =
fs.createWriteStream("output.txt");

writeStream.write("Hello\n");

writeStream.end("Finished");
Important Note

After:

end()

you should NOT call:

write()

again.

Wrong Example
writeStream.end();

writeStream.write("Hello");

This causes:

ERR_STREAM_WRITE_AFTER_END
finish Event

When:

all buffered data is written
stream successfully closes

the stream emits:

finish

event.

Example
writeStream.on("finish", () => {
console.log("Writing completed");
});
Complete Example
import fs from "node:fs";

const writeStream =
fs.createWriteStream("output.txt");

writeStream.write("Hello\n");

writeStream.write("Node.js\n");

writeStream.end("Finished");

writeStream.on("finish", () => {
console.log("Stream closed");
});
Flow
write()
↓
Internal Buffer
↓
end()
↓
Remaining data flushed
↓
finish event
↓
Stream closed
close Event

Some writable streams may also emit:

close

event.

Difference Between finish and close
finish close
Data writing completed Resource/file descriptor closed
Stream successfully flushed Stream fully destroyed
destroy() Method

Forcefully destroys the stream.

writeStream.destroy();
Warning

destroy():

immediately closes stream
may lose buffered data

So normally:

end() is preferred
Example with Error Handling
writeStream.on("error", (err) => {
console.log(err.message);
});
Real-World Analogy

📦 Sending courier:

Put items into box → write()
Seal the box → end()
Courier dispatched successfully → finish

Final Summary

👉 end() properly closes writable streams
👉 Remaining buffered data gets written
👉 "finish" event means:

writing completed successfully

👉 destroy() forcefully closes streams
