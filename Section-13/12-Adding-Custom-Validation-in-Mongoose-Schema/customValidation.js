import User from "./UserModel.js";

const user = await User.create({
  name: "Nishu singh",
  age: 80,
  email: "nishu@gmail.com",
});

console.log(user);
