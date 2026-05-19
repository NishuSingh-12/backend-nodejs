Different States of Readable Streams
🧠 Introduction

Readable streams in Node.js can exist in different states depending on how data is being consumed.

These states control:

data flow
reading behavior
event handling
Main States of Readable Streams

Readable streams mainly have:

3 states

1. Readable State (Paused Mode)

In this state:

data does NOT flow automatically

The application manually reads data.

Example
import fs from "node:fs";

const readStream =
fs.createReadStream("file.txt");

readStream.on("readable", () => {
let chunk;

while ((chunk = readStream.read()) !== null) {
console.log(chunk.toString());
}
});
Characteristics

✅ Manual reading
✅ More control
✅ Uses read() method

2. Flowing State

In flowing mode:

data flows automatically

through "data" events.

Example
readStream.on("data", (chunk) => {
console.log(chunk.toString());
});
Characteristics

✅ Automatic data flow
✅ Easier to use
✅ Most common mode

How Stream Enters Flowing Mode

A readable stream enters flowing mode when:

"data" listener is added
pipe() is used
resume() is called
Example
readStream.resume(); 3. Ended State

This state occurs when:

all data has been completely read
Example
readStream.on("end", () => {
console.log("Reading completed");
});
State Flow
Paused State
↓
Flowing State
↓
Ended State
pause() Method

Stops flowing temporarily.

readStream.pause();
resume() Method

Resumes data flow.

readStream.resume();
Example
readStream.on("data", (chunk) => {
console.log(chunk.length);

readStream.pause();

setTimeout(() => {
readStream.resume();
}, 1000);
});
Internal Buffering

Readable streams internally store chunks inside a buffer until data is consumed.

Important Notes
Flowing Mode
automatic reading
Paused Mode
manual reading
Real-World Analogy
Flowing Mode

🚰 Water flows automatically from a tap.

Paused Mode

🪣 You manually collect water when needed.

Final Summary

👉 Paused Mode → manual reading
👉 Flowing Mode → automatic data flow
👉 Ended State → stream finished
