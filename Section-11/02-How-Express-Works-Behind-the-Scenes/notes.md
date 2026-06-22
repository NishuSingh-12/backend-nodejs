How Express Works Behind the Scenes

When you write:

import express from "express";

const app = express();

app.get("/", (req, res) => {
res.send("Hello World");
});

app.listen(3000);

it looks simple, but Express performs several steps internally.

1. express() Creates an Application Object
   const app = express();

Internally, Express creates a function object that can handle HTTP requests.

Conceptually:

function app(req, res) {
app.handle(req, res);
}

This app function becomes the callback for Node.js's HTTP server.

2. Routes Are Stored in Memory

When you write:

app.get("/", handler);

Express stores route information in an internal routing table.

Something like:

[
{
method: "GET",
path: "/",
handler: handler
}
]

Every route you define gets added to this collection.

3. app.listen() Creates a Node.js HTTP Server

When you call:

app.listen(3000);

Express internally does something similar to:

import http from "http";

const server = http.createServer(app);

server.listen(3000);

Notice that app itself is passed as the request handler.

So Express is actually sitting on top of Node's native http module.

4. A Request Arrives

Suppose a browser sends:

GET / HTTP/1.1

Node.js receives the TCP connection and parses the HTTP request.

Node creates:

req // IncomingMessage
res // ServerResponse

and passes them to Express:

app(req, res); 5. Express Starts the Middleware Chain

Express processes middleware in the order they were registered.

Example:

app.use(logger);
app.use(auth);
app.get("/", homeHandler);

Flow:

Request
↓
logger
↓
auth
↓
homeHandler
↓
Response

Internally Express keeps an array:

[
logger,
auth,
homeHandler
]

and executes them one by one.

6. next() Moves to the Next Middleware

Example:

app.use((req, res, next) => {
console.log("Middleware 1");
next();
});

When next() is called:

Middleware 1
↓
Middleware 2
↓
Route Handler

Without next(), Express stops processing.

7. Route Matching Happens

Suppose request:

GET /users/101

Express checks its routing table.

app.get("/users/:id", handler);

Express converts the route into a pattern and compares:

/users/:id
↓
/users/101

Match found.

Parameters extracted:

req.params = {
id: "101"
};

Then the handler executes.

8. Response Helpers Are Added

Node.js provides:

res.end();

Express extends it with extra methods:

res.send();
res.json();
res.status();
res.redirect();

For example:

res.json({ name: "Nishu" });

Internally:

res.setHeader(
"Content-Type",
"application/json"
);

res.end(
JSON.stringify({ name: "Nishu" })
);

Express is basically making Node's response object easier to use.

9. Response Is Sent Back

When you call:

res.send("Hello");

Express:

Sets headers
Calculates content length
Writes data
Ends the response

Conceptually:

res.write("Hello");
res.end();

The browser receives the response and displays it.

Complete Flow
Browser
│
▼
Node.js HTTP Server
│
▼
Express App
│
▼
Middleware Stack
│
▼
Route Matching
│
▼
Route Handler
│
▼
res.send()/res.json()
│
▼
Client Response
