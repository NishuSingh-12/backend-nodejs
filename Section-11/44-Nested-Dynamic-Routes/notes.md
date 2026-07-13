Nested Dynamic Routes

Nested Dynamic Routes are routes that contain multiple dynamic parameters at different levels of the URL.

Example:

app.get(
"/users/:userId/posts/:postId",
(req, res) => {
res.send(req.params);
}
);

Request:

/users/101/posts/500

Parameters:

req.params

Output:

{
userId: "101",
postId: "500"
}
URL Structure
/users/:userId/posts/:postId
↓ ↓
101 500

Here:

userId → 101
postId → 500
Use Cases
User → Posts
Category → Product
Course → Lesson
Blog → Comment

Example:

/categories/10/products/25
/courses/2/lessons/8
/blogs/5/comments/12

One-line definition:
Nested dynamic routes contain multiple dynamic parameters at different levels of a URL path. 🚀
