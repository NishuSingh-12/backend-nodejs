# Receiving Auth Code on Backend

After Google login, Google redirects the user to the **backend callback URL** with an **authorization code**.

### Flow

```text
Google Login
    ↓
User Authenticates
    ↓
Google Redirects
    ↓
Backend Callback
    ↓
Authorization Code
```

### Backend Route

```javascript
app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;

  console.log("Auth Code:", code);

  // Use this code to request tokens from Google
});
```

If Google redirects to:

```text
http://localhost:5000/auth/google/callback?code=ABC123
```

Then:

```javascript
req.query.code;
```

gives:

```text
ABC123
```

### Next Step

The backend sends this code to Google's token endpoint:

```text
Authorization Code
        ↓
Google Token Endpoint
        ↓
ID Token + Access Token
```

### Important

- The **authorization code is temporary**.
- It should be handled by the **backend**.
- Do not expose the **Client Secret** to the frontend.
- The code itself is **not the ID Token**.

### Quick Revision

> **The backend receives the authorization code from `req.query.code` when Google redirects the user to the callback URL. The backend then exchanges this code for tokens.**

### Interview Answer

> **After successful Google authentication, Google sends an authorization code to the registered callback URL. The backend reads the code from the query parameters and exchanges it with Google for tokens.**
