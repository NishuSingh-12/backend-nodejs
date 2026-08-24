# Adding Role-Based Access in Users Route

### What is it?

**Role-Based Access** means allowing or denying access to a route based on the **user's role**.

For example, the `GET /users` endpoint should be accessible only to **Admin** users.

### Basic Flow

```text
Request
   ↓
Authentication Middleware
   ↓
Identify User
   ↓
Check User Role
   ↓
Admin? ── Yes → Controller → Get All Users
   │
   └─ No → 403 Forbidden
```

### Example

Suppose the user has a role:

```js
{
  name: "Nishu",
  role: "admin"
}
```

We can create a role-checking middleware:

```js
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: "Access denied",
      });
    }

    next();
  };
};
```

Then protect the users route:

```js
router.get("/users", authenticate, authorize("admin"), getAllUsers);
```

### Important Points ⭐

- **Authentication** identifies the user.
- **Authorization** checks whether the user has permission.
- RBAC checks the user's **role** before allowing access.
- `403 Forbidden` is used when the user is authenticated but **does not have sufficient permission**.
- Role-checking should be done in **middleware** so it can be reused on multiple routes.

### Interview Point 🎯

> **Role-based access in a route restricts access based on the authenticated user's role. For example, only users with the `admin` role can access the GET All Users endpoint.**
