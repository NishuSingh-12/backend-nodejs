# Role-Based UI Rendering

### What is Role-Based UI Rendering?

**Role-Based UI Rendering** means showing or hiding UI elements based on the **user's role**.

For example:

- **Admin** → Can see `Delete User` button
- **Editor** → Can see `Edit Post` button
- **Viewer** → Cannot see edit/delete buttons

### How It Works

```text
User Login
    ↓
User Role
    ↓
Frontend checks role
    ↓
Show/Hide UI elements
```

### Example

```jsx
{
  user.role === "admin" && <button>Delete User</button>;
}
```

The button will be rendered only when the user's role is `admin`.

### Multiple Roles

```jsx
{
  ["admin", "editor"].includes(user.role) && <button>Edit Post</button>;
}
```

Here, both **admin** and **editor** can see the button.

### Important Point ⭐

**UI hiding is not security.**

Even if a button is hidden from a user, they may directly call the API.

Therefore:

```text
Frontend → UI visibility
Backend  → Actual authorization/security
```

The backend must **always verify the user's role** before allowing protected operations.

### Interview Point 🎯

> **Role-Based UI Rendering displays or hides UI elements according to the user's role, improving user experience. However, actual authorization must always be enforced on the backend.**
