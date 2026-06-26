import express, { json } from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  // res.end(JSON.stringify({ message: "Hello World!!" }));
  res.status(201).json({ message: "Hello World!!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
