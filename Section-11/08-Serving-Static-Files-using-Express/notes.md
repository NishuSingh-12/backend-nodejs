Serving Static Files using Express

Express provides the built-in express.static() middleware to serve static files such as HTML, CSS, JavaScript, images, and fonts.

Example:

app.use(express.static("public"));

Project structure:

project/
│
├── public/
│ ├── index.html
│ ├── style.css
│ └── logo.png
│
└── server.js

Now these files can be accessed directly:

http://localhost:3000/index.html
http://localhost:3000/style.css
http://localhost:3000/logo.png

In one line:
express.static() is a built-in middleware that serves static files directly from a specified directory.
