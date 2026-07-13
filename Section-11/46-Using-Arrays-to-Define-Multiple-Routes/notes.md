Using Arrays to Define Multiple Routes

Express allows you to use an array of paths to handle multiple routes with the same route handler.

Example
app.get(
["/", "/home", "/index"],
(req, res) => {
res.send("Home Page");
}
);

Requests:

/
/home
/index

All three routes execute the same handler.

Another Example
app.get(
["/about", "/company"],
(req, res) => {
res.send("About Us");
}
);

Requests:

/about
/company

Both routes return:

About Us
Benefits
Reduces duplicate code
Multiple URLs can share the same logic
Easier route management

One-line definition:
An array of paths can be used to map multiple routes to a single Express route handler. 🚀
