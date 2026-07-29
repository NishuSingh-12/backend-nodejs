import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:admin@localhost");

// mongoose.pluralize((word) => word.toLocaleLowerCase());
// mongoose.model("Cat", {}, "dogs");

mongoose.set("autoCreate", false);
const userModel = mongoose.model("User", { name: String, age: Number });

const data = await userModel.insertOne({});

console.log(data);

console.log("Database connected");
