import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";
import http from "node:http";

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    const readStream = createReadStream("./public/index.html");
    readStream.pipe(res);
  } else {
    const readStream = createReadStream(`./public${req.url}`);
    readStream.on("error", (err) => {
      console.log(err.message);
      res.end("File not found");
    });
    readStream.pipe(res);
  }
});

server.listen(4000, "192.168.2.100", () => {
  console.log("Server started");
});
