Adding Directory Creation Functionality

Directory creation can be done using Node.js's fs.mkdir() or fs.mkdirSync() method.

Example:

import fs from "fs";

app.post("/create/:dirname", (req, res) => {
fs.mkdir(`./${req.params.dirname}`, (err) => {
if (err) {
return res.status(500).send("Directory creation failed");
}

    res.send("Directory created successfully");

});
});

Request:

POST /create/photos

This creates:

photos/

For nested directories:

fs.mkdir("./photos/2025/june", {
recursive: true
}, (err) => {
if (err) throw err;
});

The recursive: true option automatically creates any missing parent directories.

In one line:
Directory creation functionality uses Node.js's fs.mkdir() method to create folders on the server.
