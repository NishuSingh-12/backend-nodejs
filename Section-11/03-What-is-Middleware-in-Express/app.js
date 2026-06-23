import http from "node:http";
import express from "express";

const app = express();
const port = 4000;

app.get(
  "/",
  (req, res, next) => {
    console.log("Running  Middleware 1");
    res.write("Hello world! 1");
    next();
  },
  (req, res) => {
    console.log("Running  Middleware 2");
    res.write("Hello world! 2");
  },
  (err, req, res, next) => {
    console.log("Running Err Middleware 3");
    res.end("Error Found!");
  },
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
