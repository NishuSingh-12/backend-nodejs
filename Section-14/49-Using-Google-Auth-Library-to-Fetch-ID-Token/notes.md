# Using Google Auth Library to Fetch ID Token

After receiving the **Authorization Code** from Google, the backend can use the **Google Auth Library** to exchange the code for tokens.

> **Authorization Code → Google → ID Token**

### 1. Create OAuth Client

```javascript
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,
);
```

### 2. Exchange Code for Tokens

```javascript
app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;

  const { tokens } = await client.getToken(code);

  console.log(tokens);
});
```

The response may contain:

```javascript
{
  access_token: "...",
  id_token: "...",
  refresh_token: "...",
  expiry_date: 123456789
}
```

### 3. Get the ID Token

```javascript
const idToken = tokens.id_token;

console.log(idToken);
```

Then verify it:

```javascript
const ticket = await client.verifyIdToken({
  idToken,
  audience: process.env.GOOGLE_CLIENT_ID,
});

const payload = ticket.getPayload();

console.log(payload.email);
console.log(payload.name);
```

### Complete Flow

```text
Google Login
     ↓
Authorization Code
     ↓
client.getToken(code)
     ↓
ID Token
     ↓
verifyIdToken()
     ↓
User Information
```

### ⭐ Quick Revision

- `getToken(code)` → Exchanges authorization code for tokens
- `tokens.id_token` → Gets the ID Token
- `verifyIdToken()` → Verifies the ID Token
- `getPayload()` → Gets verified user information

### Interview Answer

> **After receiving the authorization code, we use `client.getToken(code)` to exchange it for tokens. The returned `id_token` is then verified using `verifyIdToken()` before using the user's identity information.**
