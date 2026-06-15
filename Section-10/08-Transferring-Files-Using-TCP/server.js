import { createReadStream } from "node:fs";
import net from "node:net";

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const message = data.toString();
    const [command, filename] = message.split(" ");
    const readStream = createReadStream(
      "C:\\Users\\admin\\Desktop\\movie2.mp4.mp4",
    );
    if (command === "DOWNLOAD") {
      readStream.on("data", (chunk) => {
        socket.write(chunk);
      });
    }
    readStream.on("end", () => {
      socket.end();
    });
  });
  socket.on("error", (err) => {
    console.log("Server error: ", err.message);
  });
});
server.on("listening", () => {
  console.log("server listen on 4000");
});
server.listen(4000);
