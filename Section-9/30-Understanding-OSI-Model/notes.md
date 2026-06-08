Understanding OSI Model
What is the OSI Model?
OSI = Open Systems Interconnection Model

It is a conceptual model that explains:

how data travels from one device to another

through a network.

7 Layers of OSI Model 7. Application 6. Presentation 5. Session 4. Transport 3. Network 2. Data Link

1. Physical
   Easy Mnemonic
   Please Do Not Throw Sausage Pizza Away

(Physical → Application)

Layer 7 - Application
Closest to the user

Examples:

HTTP
HTTPS
FTP
SMTP
Layer 6 - Presentation
Data formatting, encryption, compression

Examples:

SSL/TLS
JPEG
JSON
Layer 5 - Session
Creates and manages communication sessions

Example:

Keeping a connection alive between client and server
Layer 4 - Transport
End-to-end communication

Protocols:

TCP
UDP

Responsibilities:

Reliability
Segmentation
Port numbers

Example:

Port 80
Port 443
Port 4000
Layer 3 - Network
Routing packets between networks

Uses:

IP Addresses

Examples:

IPv4
IPv6

Device:

Router
Layer 2 - Data Link
Communication within a local network

Uses:

MAC Addresses

Device:

Switch
Layer 1 - Physical
Actual transmission of bits

Examples:

Ethernet cable
Fiber cable
Radio waves (WiFi)
Example: Opening Google
Application → HTTP Request
Presentation → Encryption (HTTPS)
Session → Maintain Session
Transport → TCP + Port 443
Network → IP Address
Data Link → MAC Address
Physical → WiFi Signals
Devices and Layers
Device Layer
Router Layer 3
Switch Layer 2
Hub Layer 1
Firewall Layer 3/4/7 (depends on type)
