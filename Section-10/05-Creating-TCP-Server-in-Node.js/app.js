import { Socket } from "node:dgram";
import net from "node:net";

const server = net.createServer((socket) => {
  console.log("New client connected");
  socket.on("data", (data) => {
    console.log("Client: ", data.toString());
    socket.end(`Server received: ${data}`);
  });
  socket.on("end", () => {
    console.log("Client Disconnected");
  });
});

server.listen(4000, () => {
  console.log("TCP server running on port 4000");
});
