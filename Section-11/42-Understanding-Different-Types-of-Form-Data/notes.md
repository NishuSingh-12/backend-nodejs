Understanding Different Types of Form Data

When a form sends data to a server, it can use different Content-Types. The server reads the data based on the Content-Type.

1. application/x-www-form-urlencoded

Default format for HTML forms.

HTML:

<form method="POST">
  <input name="username" />
  <input name="password" />
</form>

Sent data:

username=nishu&password=123

Express:

app.use(express.urlencoded({
extended: true
})); 2. application/json

Used when sending JSON data, commonly from APIs and frontend frameworks.

Request Body:

{
"username": "nishu",
"password": "123"
}

Express:

app.use(express.json()); 3. multipart/form-data

Used when uploading files.

HTML:

<form
  method="POST"
  enctype="multipart/form-data"
>
  <input type="file" name="photo" />
</form>

Express usually handles this using Multer:

app.post(
"/upload",
upload.single("photo"),
handler
);
Comparison
Content-Type Used For
application/x-www-form-urlencoded Simple form fields
application/json JSON data / APIs
multipart/form-data File uploads

One-line definition:
Different form data types define how client data is encoded and transmitted to the server. 🚀
