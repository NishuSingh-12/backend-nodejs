import fs from "node:fs/promises";

const a = await fs.readFile("C:\\Users\\admin\\Desktop\\bigmovie.mp4");

console.log(a.byteLength);
console.log("End");

// “Buffers are useful for fast binary data handling in Node.js,
// but they allocate memory in RAM, have a fixed size, and can become memory-intensive for large files.
//  Using buffers for huge data may increase memory usage, reduce performance,
// or even crash the application, which is why streams are preferred for large file processing.”
