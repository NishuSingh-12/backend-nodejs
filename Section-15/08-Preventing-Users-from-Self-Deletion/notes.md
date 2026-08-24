# Preventing Users from Self-Deletion

### What is Self-Deletion?

**Self-deletion** means a user tries to delete their **own account**.

In an admin user-management system, we may want to prevent this so that an Admin cannot accidentally or intentionally delete their own account.

### How It Works

Before deleting a user, compare:

```text
Logged-in User ID
       ↓
Target User ID
       ↓
Are they the same?
       ↓
   Yes → Reject request
   No  → Continue deletion
```

### Example

```js
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (req.user._id.toString() === id) {
    return res.status(403).json({
      error: "You cannot delete your own account",
    });
  }

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  res.status(200).json({
    message: "User deleted successfully",
  });
};
```

### Important Points ⭐

- Get the **logged-in user's ID** from the authenticated request.
- Get the **target user's ID** from the route parameter.
- Compare both IDs before performing deletion.
- If both IDs are the same, reject the request.
- Use **403 Forbidden** because the user is authenticated but is not allowed to perform this action.
- This check should be done on the **backend**, not only in the UI.

### Interview Point 🎯

> **Self-deletion can be prevented by comparing the authenticated user's ID with the target user's ID and rejecting the request when both IDs match.**
