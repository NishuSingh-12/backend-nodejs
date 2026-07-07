Error Handling in Express

Error handling is the process of catching and responding to errors that occur during request processing.

Example:

app.get("/", (req, res) => {
throw new Error("Something went wrong");
});

Express uses a special middleware with 4 parameters for error handling:

app.use((err, req, res, next) => {
res.status(500).send("Internal Server Error");
});

Example:

app.get("/", (req, res, next) => {
try {
throw new Error("Error");
} catch (err) {
next(err);
}
});

app.use((err, req, res, next) => {
res.status(500).send(err.message);
});

Output:

Error

In one line:
Error handling in Express is done using special middleware (err, req, res, next) that catches and processes application errors.
