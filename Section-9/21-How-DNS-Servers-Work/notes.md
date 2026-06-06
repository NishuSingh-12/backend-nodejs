How DNS Servers Work?
What Does a DNS Server Do?
Domain Name → IP Address

A DNS server translates a human-readable domain name into an IP address.

Example:

google.com
↓
142.250.xxx.xxx
DNS Lookup Process

When you enter:

google.com

in your browser, the following steps occur:

Step 1: Browser Cache

The browser checks whether it already knows the IP address.

Browser Cache
↓
IP Found?

If yes, it connects directly.

Step 2: Operating System Cache

If not found, the browser asks the operating system.

Browser
↓
OS Cache
Step 3: Recursive Resolver

If the IP is still not found, the request is sent to a DNS resolver.

Examples:

Google DNS → 8.8.8.8
Cloudflare DNS → 1.1.1.1
Step 4: Root Name Server

The resolver asks the Root Server:

Where can I find .com?

The Root Server replies:

Ask the .com TLD server
Step 5: TLD Name Server

The resolver asks the .com server:

Where can I find google.com?

The TLD server replies:

Ask Google's authoritative server
Step 6: Authoritative Name Server

The resolver asks:

What is the IP address of google.com?

The authoritative server returns:

142.250.xxx.xxx
Step 7: Browser Connects

The resolver sends the IP address back to the browser.

Browser
↓
142.250.xxx.xxx
↓
Google Server

The website loads.

DNS Hierarchy
Root Server
↓
TLD Server (.com)
↓
Authoritative Server (google.com)
↓
IP Address
Types of DNS Servers

1. Recursive Resolver

Finds the answer on behalf of the client.

Examples:

Google DNS
Cloudflare DNS 2. Root Name Server

Knows where Top-Level Domain (TLD) servers are located.

3. TLD Name Server

Handles domains such as:

.com
.org
.net
.in

and directs queries to the correct authoritative server.

4. Authoritative Name Server

Stores the actual DNS records.

Example:

google.com → 142.250.xxx.xxx
Why DNS Caching Is Important

DNS responses are cached by:

Browser
Operating System
DNS Resolver

This reduces lookup time and improves performance.
