Writing to a File with File Descriptor in Node.js
🧠 Introduction

Just like reading files using a file descriptor (fd), we can also:

write data manually using file descriptors

This gives:

low-level control
partial writing
custom positioning
Basic Flow
Open File
↓
Get File Descriptor (fd)
↓
Write Data using fd
↓
Close File Descriptor
Step 1 → Open File

Use:

fs.open()
Example
import fs from "node:fs";

fs.open(
"file.txt",
"w",
(err, fd) => {
console.log(fd);
}
);
Meaning of "w"
open file in write mode
What is fd?
fd = file descriptor

assigned by the OS.

Step 2 → Create Buffer

Data is usually written using:

Buffer
Example
const buffer =
Buffer.from("Hello Node.js");
Step 3 → Write Data

Use:

fs.write()
Syntax
fs.write(
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
buffer data to write
offset start position in buffer
length number of bytes to write
position where to write inside file
Full Example
import fs from "node:fs";

fs.open(
"file.txt",
"w",
(err, fd) => {
if (err) {
console.log(err);
return;
}

    const buffer =
      Buffer.from("Hello Node.js");

    fs.write(
      fd,
      buffer,
      0,
      buffer.length,
      0,
      (
        err,
        bytesWritten
      ) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(bytesWritten);

        fs.close(fd, () => {
          console.log(
            "File Closed"
          );
        });
      }
    );

}
);
What Happens Internally?
Open file
↓
Get fd
↓
Create buffer
↓
Write bytes into file
↓
Close fd
bytesWritten
bytesWritten

tells:

how many bytes were actually written
position Parameter

Controls:

where writing starts inside file
Example
fs.write(
fd,
buffer,
0,
5,
10,
callback
);

Means:

write at byte 10 in file
offset Parameter

Controls:

where data starts inside buffer
Example
fs.write(
fd,
buffer,
2,
5,
0,
callback
);

Means:

start writing from buffer index 2
Writing Strings Directly

Node.js also allows:

fs.write(fd, "Hello", callback);
Example
fs.open(
"file.txt",
"w",
(err, fd) => {
fs.write(
fd,
"Hello",
(err) => {
fs.close(fd, () => {});
}
);
}
);
Why Close File Descriptor?

Always close after writing:

fs.close(fd)

Otherwise:

resource leaks
too many open files

can happen.

Real-World Analogy

📝 Writing in notebook:

Open notebook
↓
Get page access
↓
Write text
↓
Close notebook
Low-Level Writing

This approach is:

lower level
manual
more controlled

than:

fs.writeFile()
Important Note

If file mode is:

"w"

then:

old content gets deleted

before writing.

Final Summary

👉 Steps:

open file
get fd
create buffer
write bytes
close fd

👉 Important methods:

fs.open()
fs.write()
fs.close()

👉 File descriptors provide:

low-level file control

🚀
