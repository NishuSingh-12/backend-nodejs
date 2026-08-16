# Implementing Login with Google on Backend

Google Login on the backend uses **OAuth 2.0 / OpenID Connect** to authenticate the user.

### Flow

```text
User
 ↓
Google Login
 ↓
Authorization Code
 ↓
Backend
 ↓
Exchange Code for Tokens
 ↓
Verify ID Token
 ↓
Find/Create User
 ↓
Create Session
```

### 1. Install Packages

```bash
npm install google-auth-library
```

### 2. Environment Variables

```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback
```

### 3. Google Login Route

```javascript
app.get("/auth/google", (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: "openid email profile",
  });

  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
});
```

### 4. Handle Callback

```javascript
app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;

  // Exchange code for tokens
  // Verify ID token
  // Find or create user
  // Create application session

  res.redirect("/dashboard");
});
```

### Important

```text
Client ID     → Identifies your app
Client Secret → Keep private on backend
Authorization Code → Exchange for tokens
ID Token       → Verify user's identity
Session        → Maintain login in your app
```

### Quick Revision

> **Backend Google Login receives the authorization code, exchanges it for tokens, verifies the ID Token, finds or creates the user, and then creates a session for the application.**
