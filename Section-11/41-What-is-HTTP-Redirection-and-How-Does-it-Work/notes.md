What is HTTP Redirection and How Does it Work?

HTTP Redirection is a mechanism where the server tells the client (browser) to visit a different URL instead of the requested one.

How It Works
Client requests a URL.
Server responds with a 3xx status code and a Location header.
Browser automatically sends a new request to the URL specified in the Location header.

Flow:

Client Request
↓
Server Response (3xx + Location)
↓
Browser Redirects
↓
New Request
↓
Final Response
Example

Client requests:

GET /old-page

Server responds:

HTTP/1.1 301 Moved Permanently
Location: /new-page

Browser automatically requests:

GET /new-page
Redirection in Express
app.get("/old-page", (req, res) => {
res.redirect("/new-page");
});

app.get("/new-page", (req, res) => {
res.send("Welcome to the new page");
});

When a user visits /old-page, Express redirects them to /new-page.

Common Redirect Status Codes
Status Code Meaning
301 Moved Permanently
302 Found (Temporary Redirect)
303 See Other
307 Temporary Redirect
308 Permanent Redirect

Example:

res.redirect(301, "/new-page");
Common Use Cases
Redirecting old URLs to new URLs
Redirecting users after login/logout
Enforcing HTTPS
URL shortening services
Website migrations

One-line definition:
HTTP Redirection allows a server to direct a client from one URL to another automatically. 🚀
