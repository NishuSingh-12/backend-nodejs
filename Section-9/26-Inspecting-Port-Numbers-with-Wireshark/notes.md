Inspecting Port Numbers with Wireshark
What is Wireshark?
Wireshark is a network packet analyzer.

It lets you see network traffic in real time.

Goal

To see:

Source Port
Destination Port

inside network packets.

Example

Suppose you open:

http://google.com

Wireshark may show:

Source Port : 52341
Destination Port : 80

Meaning:

Your browser used a temporary port (52341)
Google's HTTP server listened on port 80
HTTPS Example
Source Port : 53122
Destination Port : 443

Here:

443 = HTTPS
How to Check?

1. Start Wireshark

Select your:

WiFi adapter
Ethernet adapter

and start capturing.

2. Generate Traffic

Open:

Google
YouTube
Your Node.js app 3. Click a Packet

Look for:

Transmission Control Protocol (TCP)

or

User Datagram Protocol (UDP) 4. Expand TCP/UDP Section

You will see:

Source Port
Destination Port
Node.js Example

Run:

server.listen(4000);

Then visit:

http://localhost:4000

Wireshark will show traffic involving:

Destination Port : 4000

because your server is listening there.
