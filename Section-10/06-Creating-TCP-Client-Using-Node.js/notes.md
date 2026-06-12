Creating TCP Client Using Node.js
What is a TCP Client?

A TCP client initiates a connection to a TCP server and exchanges data.

TCP Client
│
▼
TCP Server

Examples:

Browser → Web Server
SSH Client → SSH Server
FTP Client → FTP Server
Create a TCP Client

Node.js provides the net module.

client.js
import net from "node:net";

const client = net.createConnection({
host: "127.0.0.1",
port: 4000,
});

client.on("connect", () => {
console.log("Connected to Server");

client.write("Hello Server!");
});

client.on("data", (data) => {
console.log("Server:", data.toString());
});

client.on("end", () => {
console.log("Connection Closed");
});

client.on("error", (err) => {
console.log("Error:", err.message);
});

Run:

node client.js
Simple TCP Server for Testing
server.js
import net from "node:net";

const server = net.createServer((socket) => {
console.log("Client Connected");

socket.on("data", (data) => {
console.log("Client:", data.toString());

    socket.write("Message Received");

});

socket.on("end", () => {
console.log("Client Disconnected");
});
});

server.listen(4000, () => {
console.log("Listening on Port 4000");
});
Expected Output
Server
Listening on Port 4000
Client Connected
Client: Hello Server!
Client
Connected to Server
Server: Message Received
Connecting to Another Device

If your server machine IP is:

192.168.1.100

then:

const client = net.createConnection({
host: "192.168.1.100",
port: 4000,
});

Requirements:

✓ Same Network
✓ Server Running
✓ Firewall Allows Port 4000
Useful Client Methods
Send Data
client.write("Hello");
Close Connection
client.end();
Destroy Connection
client.destroy();
TCP Connection Lifecycle
Create Client
↓
Connect
↓
Send Data
↓
Receive Data
↓
Close Connection
Real Example: SSH

When you run:

ssh nishu@192.168.1.10

SSH acts as a TCP client and connects to:

192.168.1.10:22

where the SSH server is listening.
import net from "node:net";

const server = net.createServer((socket) => {
console.log("✅ New Client Connected");

socket.on("data", (data) => {
console.log("Client:", data.toString());

    socket.write(`Server received: ${data}`);

});

socket.on("end", () => {
console.log("❌ Client Disconnected");
});
});

server.listen(4000, () => {
console.log("🚀 TCP Server Running on Port 4000");
});
