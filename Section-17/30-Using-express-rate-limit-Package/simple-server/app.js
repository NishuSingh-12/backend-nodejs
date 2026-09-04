import express from "express";
import bcrypt from "bcrypt";
import { rateLimit } from "express-rate-limit";

const app = express();
const PORT = 4000;

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: "Hello world! Too many requests.",
});

const registerLimiter = rateLimit({
  windowMs: 5000,
  limit: 2,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: "Hello world! Too many requests.",
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(globalLimiter);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/register", registerLimiter, async (req, res) => {
  bcrypt.hashSync("123456", 14);
  return res.json({ message: "Registered Successfully" });
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Visit http://localhost:${PORT}`);
});
