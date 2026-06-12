import net from "node:net";

const server = net.createServer((socket) => {
  console.log("Client connected");
  console.log(socket.remoteAddress);
  console.log(socket.remotePort);
  socket.on("data", (data) => {
    console.log("Client:", data.toString());
    socket.write("Hello Client how are you");
  });
  socket.on("close", () => {
    console.log("Socket closed");
  });
  socket.on("error", (err) => {
    console.log("Server error: ", err.message);
  });
  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(4000);

server.on("listening", () => {
  console.log("Listening on 4000");
});
