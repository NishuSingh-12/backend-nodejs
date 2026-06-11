What is a Socket?
Definition
A Socket is an endpoint of communication between two devices or processes.

A socket allows data to be sent and received over a network.

Think of it as
IP Address = House Address
Port Number = Room Number
Socket = Address + Room

Example:

192.168.1.10:4000

This is a socket.

Communication Using Sockets
Client Socket
↓
Network
↓
Server Socket

Data flows through sockets.

Types of Sockets
TCP Socket

Uses TCP protocol.

Reliable
Connection-Oriented

Example:

Browser → Web Server
UDP Socket

Uses UDP protocol.

Fast
Connectionless

Example:

Online Games
DNS
Video Streaming
Node.js Example

Create a TCP server socket:

const net = require("net");

const server = net.createServer((socket) => {
console.log("Client Connected");
});

Here:

socket

represents the communication channel between client and server.

Real Example

When you run:

ssh nishu@localhost

A TCP socket is created:

Client:
127.0.0.1:54321

Server:
127.0.0.1:22

Both communicate through sockets.

Formula
Socket = IP Address + Port Number + Protocol

Example:

TCP 192.168.1.10:80
UDP 8.8.8.8:53
