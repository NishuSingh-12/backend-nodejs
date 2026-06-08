What is a Firewall?
Definition
A Firewall is a security system that monitors and controls incoming and outgoing network traffic.
Purpose
Allow trusted traffic
Block unwanted traffic
Real-Life Analogy

🚪 Firewall is like a security guard at a building.

Check visitor
↓
Allow or Block
Example

Suppose your Node.js server is running on:

Port 4000

If Windows Firewall blocks it:

Phone
↓
Request
↓
Firewall ❌
↓
Blocked

You won't be able to access the server.

If Firewall Allows It
Phone
↓
Request
↓
Firewall ✅
↓
Node.js Server

Connection succeeds.

Types of Firewall
Hardware Firewall
Built into routers and network devices.

Example:

TP-Link Router
Enterprise Firewall Appliance
Software Firewall
Runs on the operating system.

Examples:

Windows Defender Firewall
Linux iptables/ufw
What Can a Firewall Filter?
IP addresses
Ports
Protocols (TCP/UDP)
Applications
Common Example

When you first run a Node.js server on Windows, you may see:

Allow access?

Windows Firewall is asking whether to permit network traffic to that application.
