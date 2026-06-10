Networking Capabilities of Node.js
What is Node.js in Networking?

Node.js can create:

- Web Servers
- APIs
- TCP Servers
- TCP Clients
- UDP Servers
- UDP Clients
- WebSocket Servers
- HTTP/HTTPS Servers

1. HTTP Server
   const http = require("http");

http.createServer((req, res) => {
res.end("Hello World");
}).listen(3000);

Run:

node app.js

Access:

http://localhost:3000 2. TCP Server

Using the net module:

const net = require("net");

const server = net.createServer(socket => {
socket.write("Connected\n");
});

server.listen(4000);

Port:

4000 3. TCP Client
const net = require("net");

const client = net.connect(4000, "localhost"); 4. UDP Server

Using the dgram module:

const dgram = require("dgram");

const server = dgram.createSocket("udp4");

server.bind(5000); 5. UDP Client
const dgram = require("dgram");

const client = dgram.createSocket("udp4"); 6. HTTPS Server
const https = require("https");

Used for:

HTTPS
SSL/TLS
Secure Websites 7. WebSocket Server

Real-time communication:

Chat Apps
Live Games
Notifications

Common package:

npm install ws 8. DNS Operations
const dns = require("dns");

Example:

dns.lookup("google.com");
Important Networking Modules
Module Purpose
http HTTP Server
https HTTPS Server
net TCP Networking
dgram UDP Networking
dns DNS Operations
tls Secure TCP
ws WebSockets
Real-World Example
Browser
↓ HTTP
Node.js Server
↓
Database

or

Client
↓ TCP
Node.js TCP Server
