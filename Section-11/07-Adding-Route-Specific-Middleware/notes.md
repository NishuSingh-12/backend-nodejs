Adding Route-Specific Middleware

Route-specific middleware runs only for a particular route instead of every request.

Example:

function auth(req, res, next) {
console.log("Authentication Check");
next();
}

app.get("/profile", auth, (req, res) => {
res.send("Profile Page");
});

Flow:

Request (/profile)
↓
Auth Middleware
↓
Route Handler
↓
Response

If a user visits /profile, the auth middleware runs first, then the route handler executes.

In one line:
Route-specific middleware is attached to a specific route and executes only when that route is requested.
