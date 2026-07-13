Understanding app.route() Method

The app.route() method is used to create chainable route handlers for the same path.

Instead of writing:

app.get("/users", (req, res) => {
res.send("Get Users");
});

app.post("/users", (req, res) => {
res.send("Create User");
});

You can write:

app.route("/users")
.get((req, res) => {
res.send("Get Users");
})
.post((req, res) => {
res.send("Create User");
});
Benefits
Keeps routes for the same path together
Makes code cleaner and easier to maintain
Reduces repetition of route paths
Example
app.route("/products")
.get((req, res) => {
res.send("Get Products");
})
.post((req, res) => {
res.send("Create Product");
})
.put((req, res) => {
res.send("Update Product");
})
.delete((req, res) => {
res.send("Delete Product");
});

Requests:

GET /products
POST /products
PUT /products
DELETE /products

All are handled under the same route definition.

One-line definition:
app.route() groups handlers for different HTTP methods under a single route path. 🚀
