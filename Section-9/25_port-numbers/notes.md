What are Port Numbers?
Definition
A port number identifies a specific application or service running on a device.
Why Do We Need Ports?

An IP address identifies:

Which device?

A port number identifies:

Which application?
Example

Your laptop:

192.168.0.101

may have:

Chrome → Port 80 / 443
Node.js API → Port 4000
MySQL → Port 3306

Same device, different services.

Real-World Analogy
Apartment Building = IP Address
Flat Number = Port Number

IP tells you the building.

Port tells you the exact flat.

Example URL
http://192.168.0.101:4000

Here:

192.168.0.101 → IP Address
4000 → Port Number
Port Range

Port numbers range from:

0 to 65535

Common Ports
Port Service
20,21 FTP
22 SSH
25 SMTP
53 DNS
80 HTTP
443 HTTPS
3306 MySQL
5432 PostgreSQL
In Node.js
server.listen(4000);

means:

Start listening on port 4000
Can Two Apps Use the Same Port?

❌ No

Example:

Node App A → 4000
Node App B → 4000

The second app will fail with:

EADDRINUSE

because the port is already occupied.
