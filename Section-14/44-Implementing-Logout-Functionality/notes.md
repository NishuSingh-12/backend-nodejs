# Implementing Logout Functionality

**Logout** means ending the user's current authenticated session.

### Flow

```text
User clicks Logout
      ↓
Send Logout Request
      ↓
Delete Session
      ↓
Clear Cookie
      ↓
User Logged Out ✅
```

### Backend Example

```javascript
app.post("/logout", async (req, res) => {
  const sessionId = req.cookies.sessionId;

  await Session.deleteOne({ sessionId });

  res.clearCookie("sessionId");

  res.json({
    message: "Logout successful",
  });
});
```

### Frontend

```javascript
const logout = async () => {
  await fetch("/logout", {
    method: "POST",
    credentials: "include",
  });

  window.location.href = "/login";
};
```

### Important

```text
Session.deleteOne()
        ↓
Invalidates session on server

res.clearCookie()
        ↓
Removes session cookie from browser
```

**Just clearing the cookie is not enough** if the server-side session still exists.

### Quick Revision

> **Logout = Delete the server-side session + clear the session cookie.**

### Interview Answer

> **Logout functionality is implemented by invalidating the user's current session on the server and clearing the session cookie from the browser.**
