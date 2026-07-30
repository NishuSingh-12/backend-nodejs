import mongoose, { Schema } from "mongoose";

console.log("Start UserModel.js");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required. Please enter the name."],
      minLength: [3, "Please enter 3 or more letters name."],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "age field is required. Please enter the age."],
      min: 12,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email.",
      ],
      lowercase: true,
      trim: true,
    },
    hobbies: [String],
    parentId: {
      type: Schema.Types.ObjectId,
      required: function () {
        return this.age < 16;
      },
      default: null,
    },
  },
  {
    strict: "throw",
    timestamps: true,
    // versionKey: false,
    // versionKey: "__version",
    // collection: "test",
  },
);

const User = mongoose.model("User", userSchema);

const data = await User.insertOne({
  name: "Ankit",
  age: 13,
  email: "ankit@gmail.com",
  hobbies: ["cooking"],
  parentId: "6a6add158ddd87a55f381243",
});

console.log(data);
console.log("Running UserModel.js");
