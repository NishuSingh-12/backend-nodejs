Organizing Routes using Express Router

Express Router allows you to group related routes into separate modules, making your application more organized and maintainable.

users.routes.js

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
res.send("All Users");
});

router.get("/:id", (req, res) => {
res.send(`User ${req.params.id}`);
});

export default router;

server.js

import express from "express";
import userRouter from "./users.routes.js";

const app = express();

app.use("/users", userRouter);

Requests:

GET /users
GET /users/101

In one line:
Express Router helps organize related routes into separate files and mount them under a common path.
