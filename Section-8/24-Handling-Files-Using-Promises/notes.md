Handling Files Using Promises in Node.js
🧠 Introduction

Earlier Node.js filesystem operations mainly used:

callbacks

But modern Node.js also supports:

Promises

which makes code:

cleaner
easier to read
easier to manage

especially with:

async/await
Traditional Callback Style
import fs from "node:fs";

fs.readFile(
"file.txt",
"utf-8",
(err, data) => {
console.log(data);
}
);
Promise-Based Style

Use:

node:fs/promises
Importing Promise API
import fs from "node:fs/promises";
Why Promise API is Better?

✅ Cleaner syntax
✅ Avoids callback hell
✅ Works perfectly with async/await
✅ Easier error handling

Reading File with Promises
Example
import fs from "node:fs/promises";

const data =
await fs.readFile(
"file.txt",
"utf-8"
);

console.log(data);
Writing File with Promises
Example
import fs from "node:fs/promises";

await fs.writeFile(
"file.txt",
"Hello Node.js"
);

console.log("Done");
Appending File
Example
import fs from "node:fs/promises";

await fs.appendFile(
"file.txt",
"\nNew Data"
);
Deleting File
Example
import fs from "node:fs/promises";

await fs.unlink("file.txt");
Creating Folder
Example
import fs from "node:fs/promises";

await fs.mkdir("demo");
Reading Folder Contents
Example
import fs from "node:fs/promises";

const files =
await fs.readdir("./");

console.log(files);
Error Handling with try/catch

Since promises can fail:

try {
const data =
await fs.readFile(
"file.txt",
"utf-8"
);

console.log(data);

} catch (err) {
console.log(err.message);
}
Without async/await

Promises can also use:

.then()
.catch()
Example
import fs from "node:fs/promises";

fs.readFile(
"file.txt",
"utf-8"
)
.then((data) => {
console.log(data);
})
.catch((err) => {
console.log(err);
});
Real-World Analogy
Callback Style

📞 Waiting for repeated phone calls.

Promise Style

📦 Ordered package that resolves later.

Cleaner and easier 😄

Important Note

Promise APIs are:

asynchronous

So:

they do NOT block the event loop
other code can continue running
Common Promise File Methods
Method Purpose
readFile() read file
writeFile() write file
appendFile() append data
unlink() delete file
mkdir() create folder
readdir() read folder
Benefits Over Sync Methods
Sync Methods Promise Methods
Blocking Non-blocking
Slower scalability Better scalability
Freezes event loop Event loop continues

Final Summary

👉 Use:

node:fs/promises

👉 Benefits:

async/await support
cleaner syntax
non-blocking operations

👉 Common methods:

readFile
writeFile
appendFile
unlink

🚀
