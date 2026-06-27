Handling File Uploads in Express

File uploads in Express are commonly handled using the Multer middleware.

Install Multer:

npm install multer

Example:

import express from "express";
import multer from "multer";

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
res.send("File uploaded successfully");
});

Here:

upload.single("file") handles a single file upload.
"file" is the name of the form field containing the file.
Uploaded files are stored in the uploads/ directory.

In one line:
Multer is a middleware used in Express to process and handle file uploads from client requests.
