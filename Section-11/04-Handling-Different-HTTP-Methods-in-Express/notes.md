Handling Different HTTP Methods in Express

Express provides different methods to handle different types of HTTP requests:

app.get("/users", (req, res) => {
res.send("Get Users");
});

app.post("/users", (req, res) => {
res.send("Create User");
});

app.put("/users/:id", (req, res) => {
res.send("Update User");
});

app.delete("/users/:id", (req, res) => {
res.send("Delete User");
});
GET → Retrieve data
POST → Create new data
PUT → Update existing data
DELETE → Remove data

Express matches both the URL path and the HTTP method of an incoming request, then executes the corresponding route handler.
