Difference Between extended: true and extended: false

In Express, express.urlencoded() uses the extended option to determine how URL-encoded data is parsed.

app.use(express.urlencoded({
extended: true
}));
extended: false

Uses Node.js's built-in querystring library.

Supports only simple key-value pairs.

Example:

name=Nishu&age=22

Parsed as:

{
name: "Nishu",
age: "22"
}

Nested objects are not supported.

extended: true

Uses the qs library.

Supports nested objects and arrays.

Example:

user[name]=Nishu&user[age]=22

Parsed as:

{
user: {
name: "Nishu",
age: "22"
}
}

Arrays:

colors[]=red&colors[]=blue

Parsed as:

{
colors: ["red", "blue"]
}
Comparison
extended: false extended: true
Uses querystring Uses qs
Simple key-value pairs Supports nested objects and arrays
Limited parsing Advanced parsing

One-line definition:
Use extended: true when you need to parse nested objects or arrays from form data. 🚀
