// const timer = require("./timer");
// import timer from "./timer.js";

// Common JS Modules //
// Synchronus file loading
// File extension optional
// If we give full file path then we can load any file using cjs
// It is a convention to add cjs in the file extension
// It is optional to set "type : Commonjs" in package.json
// because cjs is the default module system of Node.js
// In cjs "this" keyword poins to module.exports by default
// Cjs imports are not hoisted
// Top level await is not allowed
// Only one value can be exported in cjs
// __filename and __dirname access by default in cjs
// strict mode is not enabled by default in cjs

// ES6 Modules //
// Asynchronous file loading
// File extenstion mandatory
// We can not load any file only js and mjs files allowed.
// It is a convention to add mjs in the file extension
// We have to set {"type":"module"} in package.json file
// In mjs "this" keyword is undefiend
// Cjs imports are  hoisted
// Top level awai is allowed
// Only one value can be exported
// Multiple values can be exported in mjs
// filename and dirname access by import.meta
// strict mode is  enabled by default in mjs
