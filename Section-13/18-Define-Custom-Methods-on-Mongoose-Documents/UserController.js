import mongoose from "mongoose";
import User from "./UserModel.js";

const user = await User.findOne({ email: "ramesh@gmail.com" });

console.log(user.getSummary("full"));

await mongoose.disconnect();
