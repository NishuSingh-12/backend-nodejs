What are MAC Addresses?
Definition
MAC (Media Access Control) Address is a unique hardware address assigned to a network interface.
Example
00:1A:2B:3C:4D:5E

or

F8-5E-A0-12-34-56
Purpose

A MAC address identifies:

a network interface on a local network

Just like an IP address identifies a device logically, a MAC address identifies the network card physically.

IP vs MAC
IP Address MAC Address
Logical address Physical address
Can change Usually fixed
Used across networks Used within local network (LAN)
Example: 192.168.1.10 Example: 00:1A:2B:3C:4D:5E
Real Example

Suppose:

Laptop IP : 192.168.0.101
Laptop MAC : F8-5E-A0-12-34-56

To send data inside the LAN:

IP Address → Finds MAC Address
→ Sends Frame
How to View MAC Address?
Windows
ipconfig /all

Look for:

Physical Address
Alternative
getmac
Format

MAC address contains:

48 bits = 6 bytes

represented as:

XX:XX:XX:XX:XX:XX
Why Do We Need MAC Addresses?

When devices communicate within a LAN:

Switches use MAC addresses

to deliver data to the correct device.

Example
Laptop
↓
Switch
↓
Phone

The switch forwards frames based on MAC addresses, not IP addresses.
