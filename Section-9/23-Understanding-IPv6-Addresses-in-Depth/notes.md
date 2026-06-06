Understanding IPv6 Addresses in Depth
Why Was IPv6 Created?

IPv4 uses:

32 bits

which provides about:

2
32
≈4.3×10
9

addresses.

With billions of devices, IPv4 addresses started running out.

So IPv6 was introduced.

What is IPv6?
IPv6 is a 128-bit IP addressing system.
Example IPv6 Address
2001:0db8:85a3:0000:0000:8a2e:0370:7334
Structure

IPv6 contains:

8 groups

separated by colons (:).

Example:

2001 : 0db8 : 85a3 : 0000 : 0000 : 8a2e : 0370 : 7334

Each group contains:

16 bits

Total:

8 × 16 = 128 bits
Hexadecimal Digits

IPv6 uses:

0-9 and A-F

Example:

2001:db8:a1:b2:c3:d4:e5:f6
Address Space

IPv6 provides:

2
128
≈3.4×10
38

addresses.

This is an enormous number compared to IPv4.

Shortening IPv6 Addresses
Rule 1: Remove Leading Zeros

Example:

2001:0db8:0001:0000

becomes:

2001:db8:1:0
Rule 2: Replace Consecutive Zeros with ::

Example:

2001:db8:0000:0000:0000:0000:0000:1

becomes:

2001:db8::1

⚠️ :: can be used only once in an address.

IPv6 Prefix Length

IPv6 uses CIDR notation like IPv4.

Example:

2001:db8::1/64

Meaning:

64 bits → Network
64 bits → Host
Types of IPv6 Addresses

1. Unicast
   One device → One device

Like a normal IP address.

2. Multicast
   One device → Multiple devices
3. Anycast
   One device → Nearest device in a group

Commonly used by large services and CDNs.

Important IPv6 Ranges
Loopback
::1

Equivalent of:

127.0.0.1

in IPv4.

Link-Local
fe80::/10

Used for communication within the local network.

Unique Local Address (ULA)
fc00::/7

Similar to private IPv4 addresses.

Global Unicast
2000::/3

Publicly routable on the Internet.

IPv4 vs IPv6
Feature IPv4 IPv6
Size 32-bit 128-bit
Format 192.168.1.1 2001:db8::1
Address Space ~4.3 Billion ~340 Undecillion
NAT Required Often Yes Usually No
Header Simpler but limited More efficient and extensible
Example from Mobile Networks

Many operators such as:

Jio
Airtel
Vi

provide IPv6 connectivity.

This is one reason your phone and laptop connected to the same hotspot may show different public IPs—each device can receive its own IPv6 address.
