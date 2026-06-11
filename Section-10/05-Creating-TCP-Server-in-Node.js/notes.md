Creating TCP Server in Node.js
What is a TCP Server?

A TCP server listens for connections from clients and exchanges data over a reliable connection.

Client
│
TCP Connection
│
Server

Unlike UDP:

TCP
✔ Reliable
✔ Ordered
✔ Error Checking
✔ Connection-Oriented
Create a TCP Server

Node.js provides the net module.

server.js
import net from "node:net";

const server = net.createServer((socket) => {
console.log("Client Connected");

socket.write("Welcome to TCP Server\n");

socket.on("data", (data) => {
console.log("Received:", data.toString());

    socket.write(`Server received: ${data}`);

});

socket.on("end", () => {
console.log("Client Disconnected");
});
});

server.listen(4000, () => {
console.log("TCP Server listening on port 4000");
});

Run:

node server.js

Output:

TCP Server listening on port 4000
Create a TCP Client
client.js
import net from "node:net";

const client = net.createConnection({
host: "127.0.0.1",
port: 4000,
});

client.on("connect", () => {
console.log("Connected to server");

client.write("Hello Server");
});

client.on("data", (data) => {
console.log(data.toString());
});

client.on("end", () => {
console.log("Disconnected from server");
});

Run:

node client.js
Expected Output
Server
Client Connected
Received: Hello Server
Client
Connected to server
Welcome to TCP Server
Server received: Hello Server
How TCP Works

Before data is sent:

Client
│ SYN
▼
Server
│ SYN-ACK
▼
Client
│ ACK
▼
Connection Established

This is called the TCP Three-Way Handshake.

Useful Socket Events
Server Side
socket.on("data", ...)
socket.on("end", ...)
socket.on("error", ...)
socket.on("close", ...)
Client Side
client.on("connect", ...)
client.on("data", ...)
client.on("end", ...)
client.on("error", ...)
Check Open TCP Port

Linux/WSL:

ss -tln

or

netstat -tln

You should see:

LISTEN 0 511 \*:4000
Real-World Uses of TCP Servers
Web Servers (HTTP/HTTPS)
SSH Servers
FTP Servers
Database Servers
Email Servers
