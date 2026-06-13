# Handling Multiple TCP Clients

A TCP server can handle multiple clients simultaneously. When a new client connects, Node.js creates a separate socket for that client.

## How It Works

1. The server listens on a specific port.
2. Multiple clients connect to the same server port.
3. For each connection, a new socket object is created.
4. Each socket represents a unique communication channel between the server and a client.

Example:

Client A → Socket A → Server

Client B → Socket B → Server

Client C → Socket C → Server

Although all clients connect to the same server port, each connection is uniquely identified by:

- Source IP Address
- Source Port
- Destination IP Address
- Destination Port

This allows the operating system to distinguish between multiple active connections.

## Tracking Connected Clients

A server can maintain a counter to track the number of connected clients.

Example:

Client #1 Connected

Client #2 Connected

Client #3 Connected

When a client disconnects:

Client #2 Disconnected

## Storing Client Sockets

To communicate with multiple clients, the server can store socket references in an array.

Example:

clients[0]

clients[1]

clients[2]

This enables the server to send messages to specific clients or to all connected clients.

## Broadcasting Messages

Broadcasting means sending a message received from one client to all other connected clients.

Example:

Client A sends:

Hello Everyone

Server receives the message and forwards it to:

- Client B
- Client C
- Client D

This concept forms the foundation of chat applications, multiplayer games, and real-time communication systems.

## Key Points

- A single TCP server can handle multiple clients.
- Each client gets its own socket.
- The server port remains the same.
- Client ports are usually different.
- Sockets enable independent communication with each client.
- Multiple client support is essential for building chat servers and network applications.
