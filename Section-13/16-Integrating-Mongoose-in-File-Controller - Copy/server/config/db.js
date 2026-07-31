import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb://nishu:nishu123@localhost:27017/storageApp",
    );
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    console.log("Could not connect to the Database");
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  await client.close();
  console.log("Database Disconnected!");
  process.exit(0);
});
