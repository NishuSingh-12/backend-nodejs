import { createReadStream, statSync } from "node:fs";
import net from "node:net";

const fileSize = statSync("./video.mp4").size;
console.log(fileSize);

const server = net.createServer((socket) => {
  socket.on("error", (err) => {
    console.log(err.message);
  });
  socket.on("data", (data) => {
    const request = data.toString();

    const lines = request.split("\r\n");

    const [method, path, version] = lines[0].split(" ");

    // console.log(method);
    // console.log(path);
    // console.log(version);

    if (path === "/video.mp4") {
      socket.write(
        "HTTP/1.1 200 OK\r\n" +
          "Content-Type: video/mp4\r\n" +
          `Content-Length: ${fileSize}\r\n` +
          "\r\n",
      );

      const readStream = createReadStream("./video.mp4", {
        highWaterMark: 1024,
      });

      readStream.on("data", (chunk) => {
        readStream.pause();
        const canWrite = socket.write(chunk);
        if (!canWrite) {
          console.log("Buffer full");
          readStream.pause();
          socket.once("drain", () => {
            console.log("Buffer drained");
            readStream.resume();
          });
        }
        // console.log(canWrite);
        // console.log("Sent:", chunk.length);
      });
      readStream.on("end", () => {
        socket.end();
      });
    }
  });
});

server.listen(4000, () => {
  console.log("Server listening on 4000");
});
