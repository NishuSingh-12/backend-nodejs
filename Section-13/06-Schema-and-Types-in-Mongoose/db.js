import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:admin@localhost");
console.log("Database connection requested");

console.log("Database Connected");

console.log("Running db.js");
