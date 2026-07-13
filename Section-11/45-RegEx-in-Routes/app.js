import express from "express";

const app = express();

// app.get(/^\/\d$/, (req, res) => {
//   res.json({ message: "Hello world" });
// });

app.get("/directory|folder", (req, res) => {
  res.json({ message: "Hello Directory" });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
