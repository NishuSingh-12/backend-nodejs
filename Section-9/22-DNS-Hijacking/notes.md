DNS Hijacking
What is DNS Hijacking?
DNS Hijacking is an attack where DNS responses are changed to redirect users to a different website.
Normal Flow
google.com
↓
Correct IP Address
↓
Google Website
During DNS Hijacking
google.com
↓
Fake IP Address
↓
Fake Website

The user thinks they are visiting the real site, but they are redirected elsewhere.

Example

You type:

facebook.com

Expected:

facebook.com
↓
Real Facebook Server

Hijacked:

facebook.com
↓
Attacker's Server
Why Do Attackers Do This?
Steal passwords
Phishing attacks
Show unwanted ads
Spread malware
How Can DNS Be Hijacked?

1. Router Hijacking

Attacker changes DNS settings on the router.

2. Malware

Malicious software changes DNS settings on the device.

3. Compromised DNS Server

A DNS server returns incorrect IP addresses.

Protection

✅ Use trusted DNS providers

Examples:

Google DNS → 8.8.8.8
Cloudflare DNS → 1.1.1.1

✅ Keep router passwords secure

✅ Use HTTPS websites

✅ Keep devices updated
