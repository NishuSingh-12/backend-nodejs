# Implementing User Logout Functionality

### What is Logout?

**Logout** is the process of ending a user's authenticated session so that the user can no longer access protected resources.

### Logout Flow

```text
User clicks Logout
       ↓
Frontend sends logout request
       ↓
Backend clears session / authentication cookie
       ↓
User is logged out
```

### Backend Example

For **cookie-based session authentication**:

```js
export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        error: "Logout failed",
      });
    }

    res.clearCookie("connect.sid");

    res.status(200).json({
      message: "Logged out successfully",
    });
  });
};
```

### Route

```js
router.post("/logout", logout);
```

### Important Points ⭐

- Logout should invalidate the user's authentication state.
- With **server-side sessions**, destroy the session on the server.
- Clear the authentication cookie from the browser.
- After logout, protected endpoints should reject the user.
- Use **POST** for logout because it changes server-side authentication state.

### Security Point 🔐

Simply redirecting the user to the login page is **not enough**.

The server must invalidate the session/token or authentication state.

### Interview Point 🎯

> **Logout terminates the user's authenticated state by invalidating the session or authentication mechanism and clearing the related cookie/token.**
