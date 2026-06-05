Turning Our Laptop into a Public Server
Idea

Normally:

Laptop
↓
Private IP (192.168.x.x)
↓
Router / Mobile Network
↓
Internet

People on the internet cannot directly access your laptop.

To Make It a Public Server

Your laptop must be reachable from the internet.

Example:

Internet
↓
Your Laptop
Requirements

1. Run a Server

Example (Node.js):

import http from "node:http";

http.createServer((req, res) => {
res.end("Hello World");
}).listen(3000); 2. Public IP

You need a public IP address (or another way to expose your server).

3. Port Forwarding

If using a router:

Internet
↓
Router
↓
Laptop

The router must forward requests on a port (e.g. 3000) to your laptop.

4. Firewall Rules

Allow incoming connections on the server port.

Alternative (Easy for Learning)

Instead of buying a static IP, use tools like:

ngrok
Cloudflare Tunnel

They expose your local server to the internet.

Example

You run:

localhost:3000

and a tunnel gives:

https://random-name.ngrok.app

Anyone with that URL can access your laptop server.

Your Current Setup

Since you're using a VI mobile hotspot, you are most likely behind carrier NAT (CGNAT).

So:

Internet → Directly → Laptop

usually won't work without a tunneling service.
