#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);

const firstFile = args[0];
const secondFile = args[1];

if (!firstFile || !secondFile) {
  console.log("Usage: copy <source> <destination>");
  process.exit(1);
}

const firstFilePath = path.resolve(firstFile);
const secondFilePath = path.resolve(secondFile);

async function copyFileCLI() {
  try {
    const data = await readFile(firstFilePath);
    await writeFile(secondFilePath, data);
    console.log("File copied");
  } catch (err) {
    console.log(err.message);
  }
}
copyFileCLI();
