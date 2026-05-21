Piping and Redirection of Data Streams
🧠 Introduction

In operating systems and Node.js, data streams can be:

piped
redirected

from one source to another.

This allows programs to:

communicate
share data
process streams efficiently
What is Piping?

Piping means:

sending output of one stream directly into another stream

instead of displaying it on the terminal.

Basic Flow
Program A Output
↓
Pipe
↓
Program B Input
Terminal Pipe Operator

Pipe operator:

|
Example
node app.js | node logger.js
What Happens?
stdout of app.js
↓
becomes stdin of logger.js
Node.js Example
process.stdin.pipe(process.stdout);
Meaning
Input received from terminal
↓
directly sent back to terminal
Real-World Analogy

🚰 Water pipe system:

Tank
↓
Pipe
↓
Bucket

Data flows continuously.

What is Redirection?

Redirection means:

sending stream data to a different destination

instead of the default one.

Types of Redirection
Stream Default Destination
stdin keyboard
stdout terminal
stderr terminal

Redirection changes these destinations.

stdout Redirection
Example
node app.js > output.txt
What Happens?
stdout

goes into:

output.txt

instead of terminal.

stderr Redirection
Example
node app.js 2> error.txt
Meaning
stderr

is redirected to:

error.txt
Why Number 2?
Stream File Descriptor
stdin 0
stdout 1
stderr 2
Redirect Both stdout and stderr
node app.js > all.txt 2>&1
Meaning
stdout + stderr

both go into:

all.txt
Input Redirection

We can also redirect input.

Example
node app.js < input.txt
What Happens?
input.txt

becomes:

stdin

for the application.

Flow Diagram
input.txt
↓
stdin
↓
Node.js App
↓
stdout
↓
output.txt
Piping Multiple Programs
cat file.txt | node app.js | sort
Flow
file.txt
↓
Node App
↓
sort command
Piping in Node.js Streams

Node.js also supports stream piping internally.

Example
import fs from "node:fs";

const readStream =
fs.createReadStream("movie.mp4");

const writeStream =
fs.createWriteStream("copy.mp4");

readStream.pipe(writeStream);
What Happens?
Readable Stream
↓
pipe()
↓
Writable Stream
Advantages of Piping

✅ Automatic data transfer
✅ Memory efficient
✅ Handles backpressure
✅ Faster large file processing

Advantages of Redirection

✅ Store outputs in files
✅ Separate errors from logs
✅ Automate CLI workflows
✅ Chain multiple programs

Real-World Uses
log management
shell scripting
file processing
automation
data pipelines

Final Summary

👉 Piping:

stream → stream

👉 Redirection:

stream → different destination

👉 Standard streams:

stdin
stdout
stderr

👉 Operators:

|

> <
> 2>

🚀
