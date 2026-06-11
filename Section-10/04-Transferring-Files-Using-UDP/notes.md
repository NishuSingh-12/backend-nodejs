Transferring Files Using UDP
Can UDP Transfer Files?

✅ Yes

But UDP:

- Does not guarantee delivery
- Does not retransmit lost packets
- Does not maintain order

So file transfer over UDP is less reliable than TCP.

Basic Idea

Suppose you have:

file.txt

The client:

Reads the file
Breaks it into chunks
Sends chunks as UDP packets
file.txt
↓
Chunks
↓
UDP Packets
↓
Server
UDP Server
const dgram = require("dgram");
const fs = require("fs");

const server = dgram.createSocket("udp4");

server.on("message", (msg) => {
fs.appendFileSync("received.txt", msg);
});

server.bind(5000);

Run:

node server.js
UDP Client
const dgram = require("dgram");
const fs = require("fs");

const client = dgram.createSocket("udp4");

const data = fs.readFileSync("file.txt");

client.send(data, 5000, "localhost");

Run:

node client.js
What Happens?
file.txt
↓
UDP Packet
↓
received.txt
Problem with Large Files

UDP packet size is limited.

Usually:

≈ 65 KB maximum

and large packets may be fragmented or dropped.

Therefore large files are sent as many chunks:

Chunk 1
Chunk 2
Chunk 3
Chunk 4
Real-World Protocols Using UDP
DNS
VoIP
Online Gaming
Video Streaming

They use custom logic to handle packet loss.

TCP vs UDP File Transfer
Feature TCP UDP
Reliable ✅ ❌
Ordered Delivery ✅ ❌
Retransmission ✅ ❌
Speed Slower Faster
File Transfer Common Rare
nsmission. 🚀
