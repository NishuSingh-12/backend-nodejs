Dynamic Routing in Express

Dynamic routing allows routes to accept variable values using route parameters.

Example:

app.get("/users/:id", (req, res) => {
res.send(`User ID: ${req.params.id}`);
});

Request:

/users/101

Response:

User ID: 101

Here, :id is a route parameter, and its value can be accessed using:

req.params.id

In one line:
Dynamic routing uses route parameters (e.g., :id) to handle URLs with variable values.
