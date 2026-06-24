import http from "node:http";
import express from "express";
import { nextTick } from "node:process";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/admin", (req, res, next) => {
  console.log(req.url);
  console.log(req.originalUrl);
  if (req.body.password === "secret") {
    next();
  } else {
    res.end("Invalid Credential");
  }
});

app.post("/admin", (req, res) => {
  res.end("Hello Admin");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
