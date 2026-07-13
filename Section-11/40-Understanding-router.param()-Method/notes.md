Understanding router.param() Method

The router.param() method is used to run middleware automatically whenever a specific route parameter is present in the URL.

Syntax
router.param("id", (req, res, next, id) => {
// logic
next();
});

Here, "id" is the route parameter name.

Example
import { Router } from "express";

const router = Router();

router.param("id", (req, res, next, id) => {
console.log(`User ID: ${id}`);
next();
});

router.get("/users/:id", (req, res) => {
res.send("User Found");
});

Request:

/users/101

Output:

User ID: 101

Response:

User Found
Common Use Case

Fetching data before the route handler:

router.param("id", (req, res, next, id) => {
req.user = {
id,
name: "John"
};

next();
});

router.get("/users/:id", (req, res) => {
res.json(req.user);
});

Request:

/users/101

Response:

{
"id": "101",
"name": "John"
}

One-line definition:
router.param() runs middleware automatically for specific route parameters before the route handler executes. 🚀
