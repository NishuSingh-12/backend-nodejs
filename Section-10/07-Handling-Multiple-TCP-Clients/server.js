import net from "node:net";

let totalClients = 0;
let clients = [];

process.stdin.on("data", (data) => {
  clients.forEach((client) => {
    client.write(data);
  });
});

const server = net.createServer((socket) => {
  clients.push(socket);
  totalClients++;
  console.log(`Client connected. Total clients: ${totalClients}`);
  socket.write("Enter your name:");
  socket.on("close", () => {
    totalClients--;
    console.log(`Client Disconnected. Total Clients: ${totalClients}`);
    clients = clients.filter((client) => {
      return client !== socket;
    });

    console.log("Remaining clients:", clients.length);
  });

  socket.on("data", (data) => {
    // console.log("Client side: ", data.toString());
    const msg = data.toString().trim();

    if (!socket.username) {
      socket.username = msg;

      console.log(`${socket.username} joined the chat`);
      return;
    }
    console.log(`${socket.username}: ${msg}`);
  });

  socket.on("end", () => {
    console.log("Client is disconnected");
  });
  socket.on("error", (err) => {
    console.log("Server error: ", err.message);
  });
});

server.listen(4000);

server.on("listening", () => {
  console.log("Listning on port: 4000");
});
