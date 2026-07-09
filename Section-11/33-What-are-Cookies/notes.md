What are Cookies?

A cookie is a small piece of data that a server sends to a browser. The browser stores this data and automatically sends it back to the server with future requests to the same website.

Cookies help servers remember information about users between requests because HTTP is a stateless protocol.

Why Do We Need Cookies?

HTTP treats every request as a new request.

Without cookies:

Request 1 → Login Successful
Request 2 → Server forgets who you are

With cookies:

Request 1 → Login Successful
↓
Cookie Stored

Request 2 → Cookie Sent
↓
User Recognized
How Cookies Work
Step 1: Server Sends a Cookie
HTTP/1.1 200 OK
Set-Cookie: username=Nishu

The browser stores:

username=Nishu
Step 2: Browser Sends the Cookie Back

For every future request to the same website:

GET /profile HTTP/1.1
Cookie: username=Nishu

The server can now identify the user.

Setting Cookies in Express

Install cookie-parser:

npm install cookie-parser
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get("/login", (req, res) => {
res.cookie("username", "Nishu");
res.send("Cookie Set");
});
Reading Cookies
app.get("/profile", (req, res) => {
console.log(req.cookies);
res.send("Profile");
});

If the browser sends:

Cookie: username=Nishu

Then:

req.cookies

Output:

{
username: "Nishu"
}
Deleting Cookies
res.clearCookie("username");

This removes the cookie from the browser.

Common Cookie Attributes

1. maxAge

Determines how long the cookie should exist.

res.cookie("username", "Nishu", {
maxAge: 60000
});

Cookie expires after:

60 seconds 2. httpOnly

Prevents JavaScript from accessing the cookie.

res.cookie("token", "abc123", {
httpOnly: true
});

More secure for authentication cookies.

3. secure

Cookie is sent only over HTTPS.

res.cookie("token", "abc123", {
secure: true
}); 4. sameSite

Helps protect against CSRF attacks.

res.cookie("token", "abc123", {
sameSite: "strict"
});
Types of Cookies
Session Cookies

Stored temporarily.

Created → Browser Open
Deleted → Browser Closed

Used for login sessions.

Persistent Cookies

Stored until expiration date.

res.cookie("theme", "dark", {
maxAge: 86400000
});

Used for:

Remember Me
Language settings
User preferences
Authentication Example

When a user logs in:

app.post("/login", (req, res) => {
res.cookie("token", "xyz123");
res.send("Logged In");
});

Browser stores:

token=xyz123

Future requests:

Cookie: token=xyz123

Server verifies the token and recognizes the user.

Advantages of Cookies
Maintain user sessions
Remember login state
Store user preferences
Automatically sent by the browser
Simple to use
Limitations of Cookies
Small storage size (about 4 KB per cookie)
Sent with every request (adds network overhead)
Can be stolen if not secured properly
Users can disable or delete them
Interview Answer

Cookies are small pieces of data stored by the browser and automatically sent with future requests to the same server. They are commonly used for session management, authentication, personalization, and tracking user activity.

One-Line Definition

Cookies are browser-stored key-value pairs that help a server remember information about a user across multiple HTTP requests. 🚀
