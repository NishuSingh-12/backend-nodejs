Understanding Domain Name System (DNS)
What is DNS?
DNS (Domain Name System) is a system that translates domain names into IP addresses.

Without DNS, we would have to remember IP addresses instead of website names.

Why Do We Need DNS?

Humans prefer:

google.com
youtube.com
github.com

Computers use:

142.250.xxx.xxx
140.82.xxx.xxx

DNS converts:

Domain Name → IP Address
Example
google.com
↓
142.250.xxx.xxx
DNS Resolution Process
Browser
↓
DNS Resolver
↓
DNS Server
↓
IP Address Found
↓
Connect to Website
Domain Name Structure

Example:

www.google.com
Parts
www → Subdomain
google → Second-Level Domain (SLD)
com → Top-Level Domain (TLD)
DNS Hierarchy
.
↓
com
↓
google
↓
www

The hierarchy is read from right to left.

Top-Level Domains (TLDs)

Common TLDs:

.com
.org
.net
.edu
.gov
.in
.uk
.io
.dev

Examples:

google.com
wikipedia.org
github.io
Types of DNS Servers

1. Recursive Resolver
   Receives DNS queries from clients and finds the answer.

Usually provided by:

ISP
Google DNS
Cloudflare DNS 2. Root Name Server
Knows where TLD servers are located.

Example:

.com
.org
.in 3. TLD Name Server
Knows the authoritative server for a domain.

Example:

google.com 4. Authoritative Name Server
Contains the actual DNS records of a domain.

Returns:

IP Address
DNS Lookup Flow

When you open:

google.com
Step 1

Browser asks:

What is the IP of google.com?
Step 2

Resolver checks cache.

If not found:

Resolver → Root Server
Step 3

Root Server replies:

Ask the .com server
Step 4

Resolver asks:

.com TLD Server
Step 5

TLD replies:

Ask Google's authoritative server
Step 6

Authoritative server returns:

142.250.xxx.xxx
Step 7

Browser connects to the server.

DNS Record Types
A Record
Domain → IPv4 Address

Example:

google.com → 142.250.xxx.xxx
AAAA Record
Domain → IPv6 Address
CNAME Record
Alias of another domain

Example:

www.example.com
↓
example.com
MX Record
Mail Server Record

Used for email delivery.

TXT Record
Stores text information

Used for:

Verification
Security
SPF records
NS Record
Name Server Record

Specifies authoritative DNS servers.

DNS Caching

To improve speed:

DNS responses are cached

by:

Browser
Operating System
ISP
Benefits of DNS

✅ Easy to remember website names

✅ Faster access using caching

✅ Scalable internet architecture

✅ Domain names can point to changing IPs

Drawbacks of DNS

❌ DNS lookups add extra steps

❌ DNS server failures can affect access

❌ Can be targeted by DNS attacks

Important Limits
Maximum Domain Length
253 characters
Maximum Label Length

Example:

google

Maximum:

63 characters

per label.

Popular DNS Providers
Google DNS
8.8.8.8
8.8.4.4
Cloudflare DNS
1.1.1.1
1.0.0.1
Real-World Example

When you type:

youtube.com

DNS finds:

YouTube's IP Address

Then your browser connects to that server.
