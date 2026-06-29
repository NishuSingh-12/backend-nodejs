import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// app.use((req, res, next) => {
//   // const allowOrigins = [
//   //   "http://127.0.0.1:5500",
//   //   "http://localhost:5500",
//   //   "http://127.0.100.10:5500",
//   // ];
//   // if (allowOrigins.includes(req.headers.origin)) {
//   //   res.set("Access-Control-Allow-Origin", req.headers.origin);
//   // }
//   res.set("Access-Control-Allow-Origin", "*");

//   next();
// });

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello, world get!" });
});

app.post("/api", (req, res) => {
  res.json({ message: "Hello, world post!" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
