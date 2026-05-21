Reading File with File Descriptor in Node.js
🧠 Introduction

Normally we read files using:

fs.readFile()

But internally Node.js first:

opens the file
gets a file descriptor
reads data using that descriptor

We can also do this manually.

Flow
Open File
↓
Get File Descriptor (fd)
↓
Read Data using fd
↓
Close File Descriptor
Why Use File Descriptor?

Using file descriptors gives:

low-level control
manual reading
partial reading
better understanding of OS operations
Step 1 → Open File

Use:

fs.open()
Example
import fs from "node:fs";

fs.open("file.txt", "r", (err, fd) => {
if (err) {
console.log(err);
return;
}

console.log(fd);
});
Meaning of "r"
read mode
What is fd?
fd = file descriptor

assigned by OS.

Step 2 → Create Buffer

We need memory to store incoming data.

Example
const buffer = Buffer.alloc(10);
Meaning

10

means:

10 bytes memory allocated
Step 3 → Read File

Use:

fs.read()
Syntax
fs.read(
fd,
buffer,
offset,
length,
position,
callback
);
Parameters
Parameter Meaning
fd file descriptor
buffer memory storage
offset where to start inside buffer
length how many bytes to read
position where to start in file
Full Example
import fs from "node:fs";

fs.open("file.txt", "r", (err, fd) => {
if (err) {
console.log(err);
return;
}

const buffer = Buffer.alloc(10);

fs.read(
fd,
buffer,
0,
10,
0,
(err, bytesRead, buffer) => {
if (err) {
console.log(err);
return;
}

      console.log(bytesRead);

      console.log(buffer.toString());

      fs.close(fd, () => {
        console.log("File Closed");
      });
    }

);
});
What Happens?
Open file
↓
Get fd
↓
Allocate buffer
↓
Read bytes into buffer
↓
Convert buffer to string
↓
Close fd
bytesRead
bytesRead

tells:

how many bytes were actually read
position Parameter

Controls:

where reading starts inside file
Example
fs.read(fd, buffer, 0, 5, 10, callback);

Means:

start reading from byte 10 in file
offset Parameter

Controls:

where data enters inside buffer
Example
fs.read(fd, buffer, 2, 5, 0, callback);

Means:

store data starting at buffer index 2
Why Close File Descriptor?

Always close fd after work:

fs.close(fd)

Otherwise:

resource leaks
too many open files

can happen.

Real-World Analogy

📖 Library Book System

Book Opened
↓
Library assigns token number
↓
Read pages
↓
Return book

Token number = file descriptor 😄

Low-Level File Reading

This approach is:

lower level
more manual
more controlled

than:

fs.readFile()

Final Summary

👉 Steps:

open file
get fd
allocate buffer
read bytes
close fd

👉 Important methods:

fs.open()
fs.read()
fs.close()

👉 File descriptor:

OS-level identifier for open files

🚀
