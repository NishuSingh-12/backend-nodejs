import express from "express";
import mongoose from "mongoose";
import { createHash } from "node:crypto";

const app = express();

app.use(express.json());

// const hash = createHash("sha256")
//   .update('console.log("hii");')
//   .digest("base64");

// console.log(hash);

await mongoose.connect(
  "mongodb://admin:admin@localhost/socialApp?authSource=admin",
);

const postSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

// Middleware

app.use((req, res, next) => {
  if (req.headers.accept?.includes("text/html")) {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self' 'sha256-793SWSLXAnEbDGc6QyzZMn12HKX5ZRbzrYyejmSR1u8=';\
       script-src 'self' 'report-sample';\
       img-src 'self';\
       style-src 'self';\
       connect-src 'self';\
       report-uri /csp-violation",
    );
  }
  next();
});

app.use(express.static("./public"));

// Routes
app.get("/posts", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.setHeader("Set-Cookie", "loginSecret=hdxhw7yrx.k;");
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const post = new Post({ content: req.body.content });
  await post.save();
  res.status(201).json(post);
});

app.post(
  "/csp-violation",
  express.json({ type: "application/csp-report" }),
  (req, res) => {
    console.log(req.body);
    res.status(204).end();
  },
);

// Start server
app.listen(4000, () => console.log("Server running on http://localhost:4000"));
