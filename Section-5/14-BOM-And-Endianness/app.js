import fs from "node:fs/promises";

const contentBuffer = await fs.readFile("text.txt");
console.log(contentBuffer.toString("utf16le"));
