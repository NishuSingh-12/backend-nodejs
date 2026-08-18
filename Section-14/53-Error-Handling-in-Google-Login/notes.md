# Error Handling in Google Login

Google Login can fail at different stages, such as **authorization, token exchange, or ID token verification**. We should handle these errors properly instead of allowing the server to crash.

### Common Errors

- User cancels Google login
- Invalid or missing authorization code
- Invalid Client ID/Secret
- Redirect URI mismatch
- Expired or invalid ID Token
- Google API/network error

---

## Backend Example

```javascript
app.get("/auth/google/callback", async (req, res) => {
  try {
    const { code, error } = req.query;

    if (error) {
      return res.status(400).json({
        error: "Google login was cancelled",
      });
    }

    if (!code) {
      return res.status(400).json({
        error: "Authorization code missing",
      });
    }

    const { tokens } = await client.getToken(code);

    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // Find/Create user
    // Create session

    res.json({
      message: "Google login successful",
    });
  } catch (error) {
    console.error("Google Login Error:", error);

    res.status(500).json({
      error: "Google login failed",
    });
  }
});
```

---

## Important Error Handling

### 1. User Cancels Login

Google may return:

```text
?error=access_denied
```

Handle it:

```javascript
if (error === "access_denied") {
  return res.status(400).json({
    error: "Login cancelled by user",
  });
}
```

### 2. Missing Authorization Code

```javascript
if (!code) {
  return res.status(400).json({
    error: "Authorization code missing",
  });
}
```

### 3. Token Verification Failure

```javascript
try {
  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
} catch {
  return res.status(401).json({
    error: "Invalid ID token",
  });
}
```

---

## Quick Revision

```text
Google Login
     ↓
Error?
 ┌───┴────┐
Yes       No
 ↓         ↓
Handle    Get Code
Error       ↓
          Get Tokens
             ↓
        Verify ID Token
             ↓
        Create Session
```

### ⭐ Remember

> **Always validate the authorization response, handle token errors, verify the ID token, and return a safe error message to the client.**

### Interview Answer

> **Google Login errors should be handled at each stage of the OAuth flow. We check for authorization errors, validate the authorization code, handle token-exchange failures, verify the ID token, and use try-catch to prevent authentication errors from crashing the server.**
