Creating an HTTP Client (Node.js)
Definition

An HTTP Client is used to send HTTP requests to a server and receive HTTP responses.

Interview Answer:

An HTTP client is a program that sends requests to a server and receives responses over the HTTP protocol.

Using the http Module
Example
import http from "node:http";

const req = http.request(
{
hostname: "jsonplaceholder.typicode.com",
path: "/users/1",
method: "GET",
},
(res) => {
let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(JSON.parse(data));
    });

}
);

req.end();
How It Works

1. Create Request
   const req = http.request(options, callback);

Creates an HTTP request object.

2. Send Request
   req.end();

Actually sends the request to the server.

3. Receive Data
   res.on("data", (chunk) => {
   data += chunk;
   });

Data arrives in chunks (streams).

4. Request Completed
   res.on("end", () => {
   console.log(data);
   });

Fires when the complete response has been received.

Using http.get()

For simple GET requests:

import http from "node:http";

http.get(
"http://jsonplaceholder.typicode.com/users/1",
(res) => {
let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(JSON.parse(data));
    });

}
);
Quick Revision
HTTP Client
↓
Sends Request
↓
Server
↓
Returns Response
↓
Client Processes Data
Important Methods
http.request() → Any HTTP Method
http.get() → GET Requests Only
req.end() → Send Request
res.on("data") → Receive Chunks
res.on("end") → Response Complete
