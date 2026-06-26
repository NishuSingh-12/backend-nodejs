Sending JSON using Express

Express provides the res.json() method to send a JSON response to the client.

Example:

app.get("/user", (req, res) => {
res.json({
name: "John",
age: 25
});
});

Response:

{
"name": "John",
"age": 25
}

res.json() automatically:

Converts JavaScript objects into JSON
Sets the Content-Type header to application/json

In one line:
res.json() is used to send JSON data from an Express server to the client.
