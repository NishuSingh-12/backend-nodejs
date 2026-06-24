Adding Global Middleware with app.use() Method

The app.use() method is used to register global middleware in an Express application.

A global middleware runs for every incoming request unless a specific path is provided.

Example:

app.use((req, res, next) => {
console.log("Request received");
next();
});

In this example, the middleware executes for every request before the route handler.

Request
↓
Global Middleware
↓
Route Handler
↓
Response

Example:

app.use((req, res, next) => {
console.log(`${req.method} ${req.url}`);
next();
});

app.get("/", (req, res) => {
res.send("Home Page");
});

app.get("/about", (req, res) => {
res.send("About Page");
});

The middleware will run for both / and /about requests.

In one line:
app.use() adds middleware to the application's request-processing pipeline, allowing it to run for every incoming request.
