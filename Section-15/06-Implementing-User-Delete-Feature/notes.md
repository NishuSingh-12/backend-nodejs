# Implementing User Delete Feature

### What is User Delete?

**User Delete** is a feature that allows an authorized user, usually an **Admin**, to permanently remove a user from the database.

### Basic Flow

```text
Admin
  ↓
DELETE /users/:id
  ↓
Authentication
  ↓
Role Check (Admin)
  ↓
Find User
  ↓
Delete User
  ↓
Send Response
```

### HTTP Method

Use the **DELETE** method:

```http
DELETE /users/:id
```

Example:

```http
DELETE /users/64abc123
```

### Example Controller

```js
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  res.status(200).json({
    message: "User deleted successfully",
  });
};
```

### Route with RBAC

```js
router.delete("/users/:id", authenticate, authorize("admin"), deleteUser);
```

### Important Points ⭐

- Use **DELETE** for deleting a resource.
- `req.params.id` gets the user's ID from the URL.
- Only **authorized users** should be allowed to delete users.
- RBAC can restrict deletion to the **Admin** role.
- Return **404 Not Found** if the user doesn't exist.
- Return **403 Forbidden** if the user is authenticated but doesn't have permission.
- Be careful with deletion because it may be **irreversible**.

### Interview Point 🎯

> **A user delete feature uses a DELETE endpoint to remove a user from the database. The endpoint should be protected with authentication and authorization so that only permitted roles, such as Admin, can delete users.**
