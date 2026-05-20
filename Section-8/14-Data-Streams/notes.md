stdin, stdout and stderr in Node.js
🧠 Introduction

Every program running in a terminal automatically gets:

3 standard streams
The 3 Standard Streams
Stream Purpose
stdin input stream
stdout normal output stream
stderr error output stream

1. stdin
   🧠 What is stdin?

stdin means:

standard input

It is used to:

receive input from the user

usually from:

keyboard
terminal
Example
process.stdin.on("data", (chunk) => {
console.log(chunk.toString());
});
What Happens?
User types input
↓
stdin receives data
↓
"data" event triggers
Real-World Analogy

⌨️ Keyboard input to application.

2. stdout
   🧠 What is stdout?

stdout means:

standard output

It is used to:

display normal output

in the terminal.

Example
process.stdout.write("Hello\n");
console.log() Internally Uses stdout
console.log("Hello");

internally writes to:

stdout
Flow
Application
↓
stdout
↓
Terminal Output 3. stderr
🧠 What is stderr?

stderr means:

standard error

It is used to:

display error messages

separately from normal output.

Example
process.stderr.write("Something went wrong\n");
Why stderr Exists?

So:

errors
logs
normal output

can be handled separately.

Example
console.log("Normal Output");

console.error("Error Output");
Flow
Application
↓
stderr
↓
Error Output
Important Note

Both:

stdout
stderr

appear in terminal,

BUT internally:

they are separate streams
stdin, stdout, stderr are Streams

All three are actual Node.js streams.

Stream Type
stdin Readable Stream
stdout Writable Stream
stderr Writable Stream
Example
process.stdin.pipe(process.stdout);
What This Does?
Whatever user types
↓
directly printed back
Mini Echo Program
process.stdin.on("data", (chunk) => {
process.stdout.write(
`You typed: ${chunk}`
);
});
Real-World Usage
stdin
CLI input
user interaction
shell piping
stdout
logs
normal program output
generated data
stderr
error logging
debugging
warnings
Shell Redirection

Because stdout and stderr are separate:

node app.js > output.txt

redirects:

stdout only
Redirect stderr
node app.js 2> error.txt
Redirect Both
node app.js > all.txt 2>&1
Real-World Analogy
Stream Analogy
stdin microphone input
stdout speaker output
stderr emergency alarm

Final Summary

👉 stdin

input stream

👉 stdout

normal output stream

👉 stderr

error output stream

👉 Types:

stdin → Readable Stream
stdout → Writable Stream
stderr → Writable Stream

🚀
