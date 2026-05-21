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
Interview Definition

“Reading files with file descriptors involves manually opening a file, obtaining its descriptor, reading bytes into a buffer, and then closing the descriptor.”

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

Opening Files in Different Modes
Opening Files in Different Modes (Node.js)
🧠 Introduction

When opening files in Node.js using:

fs.open()

we must specify a:

file mode (flag)

that tells the OS:

how the file should be opened
what operations are allowed
Basic Syntax
fs.open(path, flags, callback);
Example
fs.open("file.txt", "r", (err, fd) => {
console.log(fd);
});
Common File Modes
Mode Meaning
r read only
r+ read + write
w write only
w+ read + write + truncate
a append
a+ read + append

1. "r" Mode
   Read Only Mode
   opens existing file for reading
   Characteristics

✅ File must exist
❌ Cannot write
❌ Error if file missing

Example
fs.open("file.txt", "r", callback); 2. "r+" Mode
Read + Write Mode
opens file for reading and writing
Characteristics

✅ File must exist
✅ Can read
✅ Can write
❌ Does NOT truncate file

Example
fs.open("file.txt", "r+", callback); 3. "w" Mode
Write Mode
opens file for writing
Important Behavior

If file exists:

existing content is deleted

This is called:

truncation
Characteristics

✅ Creates file if missing
✅ Write only
❌ Old data removed

Example
fs.open("file.txt", "w", callback); 4. "w+" Mode
Read + Write + Truncate
opens file for reading and writing

and clears old content.

Characteristics

✅ Read + write
✅ Creates file if missing
❌ Old content deleted

Example
fs.open("file.txt", "w+", callback); 5. "a" Mode
Append Mode
writes data at the end of file
Characteristics

✅ Creates file if missing
✅ Old content preserved
✅ New data appended

Example
fs.open("file.txt", "a", callback); 6. "a+" Mode
Read + Append Mode
allows reading and appending
Characteristics

✅ Read existing data
✅ Append new data
✅ File created if missing

Example
fs.open("file.txt", "a+", callback);
Visual Comparison
Mode Read Write Create File Delete Old Data
r ✅ ❌ ❌ ❌
r+ ✅ ✅ ❌ ❌
w ❌ ✅ ✅ ✅
w+ ✅ ✅ ✅ ✅
a ❌ ✅ (append) ✅ ❌
a+ ✅ ✅ (append) ✅ ❌
Example of Truncation
File Content Before
Hello World
Using "w"
fs.open("file.txt", "w", callback);
File Content After
(empty)
Append Example
fs.appendFile(
"file.txt",
"Node.js\n",
callback
);
Real-World Analogy
Mode Analogy
r reading a book
w replacing notebook pages
a adding notes at end
r+ reading + editing
Important Note

Choosing the wrong mode can:

delete data accidentally
prevent writing
cause errors
Streams Also Use Modes

Example:

fs.createWriteStream("file.txt", {
flags: "a"
});

Final Summary

👉 Common modes:

"r" → read
"w" → write + truncate
"a" → append
"r+" → read + write

👉 Important concept:

file mode controls file behavior

🚀
