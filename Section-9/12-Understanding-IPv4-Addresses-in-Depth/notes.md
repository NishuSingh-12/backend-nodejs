IPv4 Address and Subnet Mask
IPv4 Address

IPv4 is a:

32-bit unique address of a device

Example:

192.168.1.10
Structure
192 . 168 . 1 . 10

4 parts = 4 octets

Each octet:

8 bits

Total:

32 bits
Problem

Given:

192.168.1.10

How do we know:

which part is Network?
which part is Host?

👉 This is where the Subnet Mask comes in.

Subnet Mask

A subnet mask tells us:

which bits belong to the network
and which bits belong to the host

Example:

IP Address : 192.168.1.10
Subnet Mask : 255.255.255.0
Meaning of 255.255.255.0

Binary:

255 = 11111111
255 = 11111111
255 = 11111111
0 = 00000000

So:

11111111.11111111.11111111.00000000
Rule
1 = Network bit
0 = Host bit
Therefore
192.168.1 | 10

Network:

192.168.1

Host:

10
CIDR Notation

Instead of:

255.255.255.0

we usually write:

/24

Because:

24 network bits
Example
192.168.1.10/24

means:

Subnet Mask = 255.255.255.0
Common Subnet Masks
CIDR Subnet Mask
/8 255.0.0.0
/16 255.255.0.0
/24 255.255.255.0
Example: Your Hotspot

Suppose:

Mobile : 192.168.43.1
Laptop : 192.168.43.120
Mask : 255.255.255.0

Network Part:

192.168.43

Host Part:

1
120

Both devices are in the:

same network

so they can communicate directly.

Broadcast Address

In:

192.168.43.0/24

last address is:

192.168.43.255

This is called:

Broadcast Address

Used to send data to all devices in the subnet.

Network Address

First address:

192.168.43.0

This is:

Network Address

It identifies the network itself.

Usable Hosts

For:

192.168.43.0/24

Usable IPs:

192.168.43.1
to
192.168.43.254

Because:

.0 = Network Address
.255 = Broadcast Address

cannot be assigned to devices.

Quick Formula

For a subnet with h host bits:

2
h
−2

= usable hosts

Example:

/24

Host bits:

8

Usable hosts:

254
