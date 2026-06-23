What is Middleware in Express?

Middleware is a function that runs between receiving a request and sending a response.

It has access to:

req (Request object)
res (Response object)
next() (Function to pass control to the next middleware)

Basic syntax:

function middleware(req, res, next) {
// Do something

next();
}
Why Do We Need Middleware?

Middleware lets us perform tasks before the request reaches the route handler.

Common uses:

Logging requests
Authentication
Authorization
Parsing JSON
Error handling
Validation
Basic Example
import express from "express";

const app = express();

app.use((req, res, next) => {
console.log("Middleware executed");
next();
});

app.get("/", (req, res) => {
res.send("Home Page");
});

app.listen(3000);

Output when visiting /:

Middleware executed

Then the route handler runs and sends:

Home Page
How Middleware Flow Works
Request
↓
Middleware 1
↓
Middleware 2
↓
Route Handler
↓
Response

Example:

app.use((req, res, next) => {
console.log("M1");
next();
});

app.use((req, res, next) => {
console.log("M2");
next();
});

app.get("/", (req, res) => {
res.send("Done");
});

Output:

M1
M2
What is next()?

next() tells Express:

"I'm done, move to the next middleware or route handler."

app.use((req, res, next) => {
console.log("Checking...");
next();
});

Without next():

app.use((req, res, next) => {
console.log("Stopped");
});

The request gets stuck because Express never moves forward.

Middleware Can Modify the Request
app.use((req, res, next) => {
req.user = {
name: "Nishu"
};

next();
});

app.get("/", (req, res) => {
res.json(req.user);
});

Response:

{
"name": "Nishu"
}
Middleware Can End the Request

A middleware doesn't have to call next().

app.use((req, res) => {
res.send("Blocked");
});

Flow:

Request
↓
Middleware
↓
Response Sent

The route handler will never execute.

Built-in Middleware
JSON Parser
app.use(express.json());

Converts JSON request bodies into:

req.body

Example:

{
"name": "John"
}

becomes:

req.body.name;
Static Files
app.use(express.static("public"));

Serves files directly from the public folder.

Example:

public/
├── style.css
└── logo.png

Accessible as:

http://localhost:3000/style.css
Route-Level Middleware

Middleware can be applied to specific routes only.

function auth(req, res, next) {
console.log("Auth Check");
next();
}

app.get("/profile", auth, (req, res) => {
res.send("Profile Page");
});

Flow:

Request
↓
Auth Middleware
↓
Profile Route
Multiple Middleware on a Route
app.get(
"/dashboard",
auth,
logger,
(req, res) => {
res.send("Dashboard");
}
);

Execution order:

auth
↓
logger
↓
route handler
Real-World Authentication Middleware
function auth(req, res, next) {
const token = req.headers.authorization;

if (!token) {
return res.status(401).send("Unauthorized");
}

next();
}

Usage:

app.get("/admin", auth, (req, res) => {
res.send("Admin Panel");
});
Types of Middleware in Express

1. Application-Level Middleware
   app.use(...)

Runs for the whole application.

2. Router-Level Middleware
   router.use(...)

Runs only for a specific router.

3. Built-in Middleware
   express.json()
   express.static()

Provided by Express itself.

4. Error-Handling Middleware

Has 4 parameters:

app.use((err, req, res, next) => {
res.status(500).send("Something went wrong");
});

Used to catch and handle errors.
