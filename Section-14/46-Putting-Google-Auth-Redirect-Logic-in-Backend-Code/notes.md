# Putting Google Auth Redirect Logic in Backend

The backend can handle the **Google OAuth redirect** by creating a route that sends the user to Google's authorization page.

### Flow

```text
Login with Google
       ↓
Backend /auth/google
       ↓
Google Login Page
       ↓
User Authenticates
       ↓
/auth/google/callback
       ↓
Authorization Code
```

### 1. Google Redirect Route

```javascript
app.get("/auth/google", (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: "openid email profile",
  });

  const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;

  res.redirect(googleUrl);
});
```

Here:

- `client_id` → Identifies your application
- `redirect_uri` → Google sends the user here after login
- `response_type: "code"` → Requests an authorization code
- `scope` → Requests user identity information

### 2. Callback Route

```javascript
app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;

  console.log("Authorization Code:", code);

  // Exchange code for tokens
});
```

### Important

The **redirect URL must exactly match** the URL registered in Google Cloud.

Example:

```env
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback
```

### Quick Revision

> **The backend redirect route creates Google's authorization URL and redirects the user to Google. After authentication, Google redirects the user back to the backend callback route with an authorization code.**

```text
Backend
  ↓
Google Authorization URL
  ↓
Google Login
  ↓
Backend Callback
  ↓
Auth Code
```
