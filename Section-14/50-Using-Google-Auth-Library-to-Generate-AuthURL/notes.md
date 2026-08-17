# Using Google Auth Library to Generate Auth URL

The **Google Auth Library** provides `generateAuthUrl()` to create the Google OAuth login URL.

### 1. Install

```bash
npm install google-auth-library
```

### 2. Create OAuth Client

```javascript
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,
);
```

### 3. Generate Auth URL

```javascript
app.get("/auth/google", (req, res) => {
  const authUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: ["openid", "email", "profile"],
  });

  res.redirect(authUrl);
});
```

### What Happens?

```text
User clicks "Login with Google"
          ↓
/auth/google
          ↓
generateAuthUrl()
          ↓
Google Login Page
          ↓
User logs in
          ↓
Google sends Authorization Code
```

### Important Options

```javascript
scope: ["openid", "email", "profile"];
```

- `openid` → Enables OpenID Connect
- `email` → Requests user's email
- `profile` → Requests basic profile information

```javascript
access_type: "offline";
```

Allows Google to issue a **refresh token** when applicable.

### Quick Revision

> **`generateAuthUrl()` creates the Google OAuth authorization URL. The backend redirects the user to this URL to start the Google login process.**

### Interview Answer

> **We use `generateAuthUrl()` from the Google Auth Library to generate the Google authorization URL with the required scopes and redirect URI. The user is then redirected to Google to authenticate.**
