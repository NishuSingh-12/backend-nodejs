Creating Our Own LAN
🧠 What Does It Mean?

Creating our own LAN means:

connecting multiple devices in a local network
so they can communicate with each other

without needing the internet.

Example

You have:

📱 Mobile
💻 Laptop

Both connected to:

same WiFi or mobile hotspot

Then you already have a small LAN 😄

How to Create a LAN?
Method 1: Using Mobile Hotspot
Mobile Hotspot ON
↓
Laptop connects to hotspot
↓
LAN created
Method 2: Using WiFi Router
Router
↙ ↘
Laptop Mobile

Both devices connect to the same router.

Method 3: Using Ethernet Cable
Laptop ↔ Laptop

using an Ethernet cable.

How to Verify?

On laptop:

ipconfig

Check your IPv4 address.

Example:

192.168.43.120

Devices with similar network prefixes (e.g. 192.168.43.x) are usually on the same LAN.

What Can We Do on Our LAN?
File sharing
Chat applications
Multiplayer games
Local web servers
Remote control
Live data transfer
Node.js Connection

Later you'll learn that if your laptop runs:

http.createServer(...)

and gets IP:

192.168.43.120

then on your phone (same LAN) you can open:

http://192.168.43.120:3000

and access your Node.js server directly 😄🚀
