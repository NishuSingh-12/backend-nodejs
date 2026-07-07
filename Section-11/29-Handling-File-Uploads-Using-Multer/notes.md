Handling File Uploads Using Multer

Multer is an Express middleware used to handle multipart/form-data, which is primarily used for file uploads.

Install Multer:

npm install multer

Example:

import express from "express";
import multer from "multer";

const app = express();

const upload = multer({
dest: "uploads/"
});

app.post(
"/upload",
upload.single("file"),
(req, res) => {
res.send("File uploaded successfully");
}
);

HTML Form:

<form
  action="/upload"
  method="POST"
  enctype="multipart/form-data"
>
  <input type="file" name="file" />
  <button>Upload</button>
</form>

Here:

upload.single("file") uploads one file.
"file" must match the input's name attribute.
Uploaded files are stored in the uploads/ directory.

In one line:
Multer is an Express middleware that processes file uploads sent through multipart/form-data requests.
