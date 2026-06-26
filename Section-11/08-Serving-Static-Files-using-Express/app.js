import express from "express";

const app = express();
const port = 4000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.end("Hello World!!");
});

app.get("/test", (req, res) => {
  res.sendFile(`${import.meta.dirname}/movie2.mp4.mp4`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
