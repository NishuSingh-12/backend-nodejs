Transferring Files Using TCP
What is File Transfer Using TCP?

File transfer using TCP is the process of sending a file from a client to a server through a TCP connection.

TCP ensures:

Reliable delivery
Ordered delivery
Error checking
Retransmission of lost packets

Because of these features, TCP is commonly used for file transfer.

Working of File Transfer Using TCP
Client File
↓
Read Stream
↓
socket.write()
↓
TCP Connection
↓
socket.on("data")
↓
Write Stream
↓
Server File
Step 1: Read File from Client

The client uses a Read Stream to read the file.

createReadStream("numbers.txt");

The file is read chunk by chunk instead of loading the entire file into memory.

Benefits
Less memory usage
Better performance
Suitable for large files
Step 2: Send Chunks Through TCP

Whenever a chunk is read:

readStream.on("data", (chunk) => {
socket.write(chunk);
});

The chunk is sent through the TCP socket.

Chunk
↓
socket.write()
↓
TCP
Step 3: Receive Chunks on Server

The server listens for incoming data.

socket.on("data", (chunk) => {
// receive data
});

TCP ensures chunks arrive in the correct order.

Step 4: Write Chunks into a File

The server uses a Write Stream.

writeStream.write(chunk);

Flow:

TCP Data
↓
Server Socket
↓
Write Stream
↓
output.txt
Step 5: Complete the Transfer

When the client finishes reading:

socket.end();

The server receives:

socket.on("end", () => {
console.log("Transfer completed");
});

The connection is closed gracefully.

Why Streams are Used?
Without Streams
readFile("large-file.zip");

Entire file loads into memory.

Problems:

High memory consumption
Slow for large files
With Streams
createReadStream("large-file.zip");

File is processed chunk by chunk.

Benefits:

Memory efficient
Faster
Suitable for large files
Why TCP is Used?
Reliable Delivery

Lost packets are automatically retransmitted.

Packet Lost
↓
TCP Detects
↓
Packet Resent
Ordered Delivery

If packets arrive as:

3
1
2

TCP delivers:

1
2
3

to the application.

Error Detection

TCP uses checksums to detect corrupted data.

Flow Control

TCP prevents a fast sender from overwhelming a slow receiver.

Node.js Modules Used
net Module
import net from "node:net";

Used to create TCP clients and servers.

Read Stream
import { createReadStream } from "node:fs";

Used to read file data.

Write Stream
import { createWriteStream } from "node:fs";

Used to write received data.

Important Events
Client Side
socket.on("connect")
readStream.on("data")
readStream.on("end")
socket.on("close")
Server Side
socket.on("data")
socket.on("end")
socket.on("error")
Real World Uses
FTP (File Transfer Protocol)
File uploads
Cloud storage systems
Backup systems
Large data synchronization
