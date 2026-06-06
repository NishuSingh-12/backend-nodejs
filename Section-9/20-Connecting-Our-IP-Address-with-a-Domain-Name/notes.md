Connecting Our IP Address with a Domain Name
What Does It Mean?
Domain Name → IP Address

When someone types:

mywebsite.com

DNS should know which IP address that domain points to.

Example

Suppose your server has:

Public IP: 49.36.100.50

and you own:

mywebsite.com

You connect them using DNS.

How?
Step 1: Buy a Domain

Examples:

mywebsite.com
nishu.dev

from a domain registrar.

Step 2: Get a Public IP

Example:

49.36.100.50

This could be:

Your server's IP
A VPS IP
A cloud server IP
Step 3: Create an A Record

In DNS settings:

Type : A
Host : @
Value: 49.36.100.50

Meaning:

mywebsite.com
↓
49.36.100.50
Step 4: DNS Propagation

DNS servers around the world update their records.

After some time:

mywebsite.com

starts pointing to:

49.36.100.50
For WWW

Add another record:

Type : CNAME
Host : www
Value : mywebsite.com

Meaning:

www.mywebsite.com
↓
mywebsite.com
↓
49.36.100.50
Real Flow
User
↓
mywebsite.com
↓
DNS Lookup
↓
49.36.100.50
↓
Server
↓
Response
In Your Learning Journey

Right now:

Laptop
↓
192.168.x.x

is a private IP.

A domain cannot directly point to a private IP because:

192.168.x.x

is not reachable from the internet.

To connect a domain, you usually need:

Domain
↓
Public IP
↓
Server
