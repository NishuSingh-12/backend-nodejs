import http from "node:http";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world 👍");
});

app.get("/test", (req, res) => {
  res.send("Hello Test 👍");
});

// app.listen(3000, () => {
//   console.log("App listening on post 3000");
// });

const server = http.createServer(app);

server.listen(port);
