import mongoose from "mongoose";
import User from "./UserModel.js";

await User.init();

// const user = await User.insertOne({
//   name: "Vimlesh",
//   age: 54,
//   email: "vimlesh@gmail.com",
// });

console.log(user);

// await mongoose.disconnect();
