Creating UDP Server in Node.js
What is a UDP Server?

A UDP server listens for UDP packets sent by clients.

Client ──UDP Packet──► Server

UDP:

Fast
Connectionless
No delivery guarantee
Create a UDP Server
const dgram = require("dgram");

const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
console.log(`Message: ${msg}`);
console.log(`From: ${rinfo.address}:${rinfo.port}`);
});

server.listen(5000, () => {
console.log("UDP Server running on port 5000");
});

Run:

node server.js

Output:

UDP Server running on port 5000
Create a UDP Client
const dgram = require("dgram");

const client = dgram.createSocket("udp4");

client.send(
"Hello UDP Server",
5000,
"localhost",
(err) => {
if (err) console.log(err);
client.close();
}
);

Run:

node client.js
Server Output
Message: Hello UDP Server
From: 127.0.0.1:xxxxx
Flow
Client
|
| UDP Packet
▼
Server (Port 5000)
Check with Another Device

If your laptop IP is:

192.168.1.100

Client can send to:

client.send(
"Hello",
5000,
"192.168.1.100"
);

As long as both devices are on the same network and firewall allows it.
