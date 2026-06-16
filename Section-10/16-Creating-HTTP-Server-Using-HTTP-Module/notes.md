Creating HTTP Server Using HTTP Module

Creating an HTTP Server Using Node.js http Module
The built-in http module allows you to create a web server without installing any external packages.

Basic Example
import http from "node:http";

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader("Content-Type", "text/plain");

res.end("Hello, World!");
});

server.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
How It Works

1. Import the HTTP Module
   import http from "node:http";
   Loads Node.js's built-in HTTP functionality.

2. Create the Server
   const server = http.createServer((req, res) => {
   // Handle request
   });
   createServer() returns an HTTP server instance.

The callback runs every time a client sends a request.

Parameters:

req → Incoming request object

res → Outgoing response object

3. Set Response Information
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/plain");
   200 → Request successful

Content-Type tells the browser what kind of data is being returned.

Common content types:

"text/plain"
"text/html"
"application/json" 4. Send the Response
res.end("Hello, World!");
res.end() sends the response body and closes the connection.

5. Start Listening
   server.listen(3000, () => {
   console.log("Server running...");
   });
   The server starts accepting connections on port 3000.

Returning JSON
import http from "node:http";

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader("Content-Type", "application/json");

res.end(
JSON.stringify({
name: "Nishu",
role: "Developer"
})
);
});

server.listen(3000);
Response:

{
"name": "Nishu",
"role": "Developer"
}
Routing Example
import http from "node:http";

const server = http.createServer((req, res) => {
if (req.url === "/") {
res.end("Home Page");
} else if (req.url === "/about") {
res.end("About Page");
} else {
res.statusCode = 404;
res.end("Page Not Found");
}
});

server.listen(3000);
Request Lifecycle
Browser
│
▼
HTTP Request
│
▼
createServer Callback
(req, res)
│
▼
Process Request
│
▼
res.end()
│
▼
HTTP Response
│
▼
Browser
Key Points
http.createServer() creates the server.

req contains request details (URL, method, headers, etc.).

res is used to send data back.

res.end() must be called to finish the response.

server.listen(port) starts the server.

This is the foundation on which frameworks like Express, Fastify, and NestJS build their abstractions.
