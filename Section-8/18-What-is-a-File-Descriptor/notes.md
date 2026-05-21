What is a File Descriptor?
🧠 Definition

A File Descriptor (FD) is:

a unique number used by the operating system
to identify an open file or resource
Simple Meaning

When a program opens a file:

OS does not directly use the filename repeatedly

Instead:

OS assigns a small integer number
that number becomes the file descriptor
Example
import fs from "node:fs";

fs.open("file.txt", "r", (err, fd) => {
console.log(fd);
});
Possible Output
18

Here:

18 = file descriptor
What Happens Internally?
Open File
↓
OS creates entry
↓
Assigns descriptor number
↓
Program uses descriptor
Why File Descriptors Exist?

Using filenames repeatedly would be:

slower
inefficient

So OS uses:

numeric references

instead.

Real-World Analogy

🏨 Hotel System

Room Number = File Descriptor

Instead of saying:

"the room on second floor near stairs..."

you simply say:

Room 18

Much easier 😄

Standard File Descriptors

Every process already gets:

FD Stream
0 stdin
1 stdout
2 stderr
Example
process.stdout.write("Hello");

Internally uses:

FD 1
File Descriptor Lifecycle
Open File
↓
FD Created
↓
Read / Write Operations
↓
Close File
↓
FD Released
Opening a File
fs.open("file.txt", "r", (err, fd) => {
console.log(fd);
});
Reading Using FD
fs.read(fd, buffer, 0, 10, 0, callback);
Closing FD
fs.close(fd, (err) => {
console.log("Closed");
});
Important Note

If file descriptors are not closed properly:

❌ memory/resource leaks
❌ too many open files error

can happen.

Streams and File Descriptors

Streams internally use:

file descriptors

Example:

fs.createReadStream("movie.mp4");

internally:

opens file
gets FD
reads chunks using FD
OS Resource Management

File descriptors are not only for files.

They can represent:

files
sockets
pipes
terminals
network connections
Why FD is Fast?

Because OS can:

directly access resource
avoid path lookup repeatedly
Common Errors
Too Many Open Files
EMFILE: too many open files

Happens when:

many FDs remain unclosed

Final Summary

👉 File Descriptor:

numeric identifier for open files/resources

👉 Managed by:

operating system

👉 Standard descriptors:

0 → stdin
1 → stdout
2 → stderr

👉 Streams internally use file descriptors
