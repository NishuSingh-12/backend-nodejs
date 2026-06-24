import http from "node:http";
import express from "express";

const app = express();
const port = 4000;

// Parsing JSON body (Custom Middleware)
// app.use((req, res, next) => {
//   // res.end("Global Middleware");
//   // console.log(req.headers);
//   // console.log(req.url);
//   req.on("data", (chunk) => {
//     const reqBody = JSON.parse(chunk.toString());
//     req.body = reqBody;
//     next();
//   });
// });

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Home route");
});

// Login
app.get("/login", (req, res) => {
  res.end("Logged In");
});

// User
app.get("/user", (req, res) => {
  res.end("Nishu singh");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.end("POST, Nishu singh");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
