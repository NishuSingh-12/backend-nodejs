What are Network Interfaces?
Definition
A Network Interface is the connection point through which a device communicates on a network.
Examples
WiFi adapter
Ethernet adapter
Bluetooth adapter
Virtual network adapter
Real Example

Your laptop may have:

WiFi Interface
Ethernet Interface

Both can have their own IP addresses.

Why Are They Needed?

A device can have multiple network connections.

Example:

Laptop
├─ WiFi Interface
└─ Ethernet Interface

The network interface determines:

how data enters and leaves the device
Check on Windows

Run:

ipconfig

You may see:

Wireless LAN adapter Wi-Fi
Ethernet adapter Ethernet

These are network interfaces.

In Node.js

You can view network interfaces using:

import os from "node:os";

console.log(os.networkInterfaces());
