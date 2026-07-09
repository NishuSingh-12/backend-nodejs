Setting Cookies from Server

Setting a cookie means sending a Set-Cookie header from the server to the browser. The browser stores the cookie and automatically includes it in future requests to the same server.

Basic Example
app.get("/login", (req, res) => {
res.cookie("username", "Nishu");
res.send("Cookie Set");
});

When this route is accessed, Express sends:

Set-Cookie: username=Nishu

The browser stores:

username=Nishu
Setting a Cookie with Options
app.get("/login", (req, res) => {
res.cookie("username", "Nishu", {
maxAge: 60000,
httpOnly: true
});

res.send("Cookie Set");
});
Important Options
maxAge

Specifies how long the cookie should remain valid.

res.cookie("username", "Nishu", {
maxAge: 60000
});
60000 ms = 60 seconds
httpOnly

Prevents JavaScript from accessing the cookie.

res.cookie("token", "abc123", {
httpOnly: true
});

More secure for authentication cookies.

secure

Cookie is sent only over HTTPS.

res.cookie("token", "abc123", {
secure: true
});
sameSite

Helps protect against CSRF attacks.

res.cookie("token", "abc123", {
sameSite: "strict"
});
Real Authentication Example
app.post("/login", (req, res) => {
const token = "xyz123";

res.cookie("token", token, {
httpOnly: true,
maxAge: 24 _ 60 _ 60 \* 1000
});

res.send("Logged In");
});

Flow:

User Logs In
↓
Server Creates Token
↓
Server Sends Cookie
↓
Browser Stores Cookie
↓
Browser Sends Cookie with Future Requests
Interview Answer

Cookies are set from the server using the Set-Cookie HTTP header. In Express, the res.cookie() method is used to send cookies to the browser, which then stores and automatically includes them in future requests.

One-line definition:
res.cookie() is used to send a cookie from the Express server to the client's browser. 🚀
