import mongoose from "mongoose";
import User from "./UserModel.js";

const user = await User.findOne({
  email: "ramesh@gmail.com",
});

user.hobbiesString = "TT, Football";
console.log(user.hobbiesString);

await user.save();

// console.log(user.isAdult);
// console.log(user.id);
// console.log(user._id);
// console.log(user.toJSON({ virtuals: true }).id);
// console.log(user.schema.virtuals);

await mongoose.disconnect();
