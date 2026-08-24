# What Is Role-Based Access Control (RBAC)?

### Definition

**Role-Based Access Control (RBAC)** is an authorization method where **permissions are assigned to roles**, and users are assigned those roles.

Instead of giving permissions directly to each user, we assign a **role** to the user.

### How RBAC Works

**User → Role → Permissions**

Example:

- **Admin** → Create, Read, Update, Delete users
- **Editor** → Create, Read, Update posts
- **Viewer** → Only Read posts

So, if a user has the **Editor** role, they automatically get all permissions assigned to the Editor role.

### Example

```text
User: Nishu
Role: Editor
Permissions: Create Post, Edit Post, Read Post
```

If we change the Editor role's permissions, all users with the Editor role get the updated permissions.

### Why Use RBAC?

- Easier to manage permissions
- Improves security
- Avoids assigning permissions individually
- Useful for applications with many users
- Makes authorization logic easier to maintain

### RBAC vs Authentication

| Authentication            | Authorization                   |
| ------------------------- | ------------------------------- |
| Who are you?              | What can you do?                |
| Verifies identity         | Checks permissions              |
| Login                     | Access control                  |
| Example: Email + Password | Example: Admin can delete users |

**RBAC is an authorization mechanism, not authentication.**

### Interview Point ⭐

> **RBAC is an authorization model where permissions are assigned to roles, and users are assigned those roles. This makes access control easier, more secure, and scalable.**
