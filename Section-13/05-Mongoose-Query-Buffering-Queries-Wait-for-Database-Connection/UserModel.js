import mongoose from "mongoose";

const userModel = mongoose.model("User", { name: String, age: Number });

const data = await userModel.findOne({ name: "Jayendra" });

console.log(data);
console.log("Running UserModel.js");
