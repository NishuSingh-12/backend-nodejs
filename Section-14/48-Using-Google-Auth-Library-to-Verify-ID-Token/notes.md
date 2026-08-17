# Using Google Auth Library to Verify ID Token

The **Google Auth Library** provides `verifyIdToken()` to verify an ID Token received from Google.

> **Goal:** Verify the token before trusting the user's identity.

### 1. Install

```bash
npm install google-auth-library
```

### 2. Create OAuth Client

```javascript
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
```

### 3. Verify ID Token

```javascript
const ticket = await client.verifyIdToken({
  idToken,
  audience: process.env.GOOGLE_CLIENT_ID,
});

const payload = ticket.getPayload();

console.log(payload);
```

### Practical Backend Example

```javascript
app.post("/auth/google", async (req, res) => {
  try {
    const { idToken } = req.body;

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { sub, email, name, picture } = payload;

    console.log(sub, email, name);

    res.json({
      message: "Google authentication successful",
      user: {
        googleId: sub,
        email,
        name,
        picture,
      },
    });
  } catch (error) {
    res.status(401).json({
      error: "Invalid ID token",
    });
  }
});
```

### What Does `verifyIdToken()` Check?

It verifies important claims such as:

- **Signature** → Token is genuinely from Google
- **Audience (`aud`)** → Token belongs to your application
- **Issuer (`iss`)** → Expected issuer
- **Expiration (`exp`)** → Token is not expired

### `payload.sub`

```javascript
const googleId = payload.sub;
```

`sub` is the user's **unique Google identifier**.

You can use it to find or create the user:

```javascript
const user = await User.findOne({
  googleId: payload.sub,
});
```

### Important

❌ Don't simply decode the JWT and trust its payload.

```text
Decode → Only reads the token
Verify → Checks whether the token is valid
```

### Quick Revision

```text
ID Token
   ↓
verifyIdToken()
   ↓
Validate Token
   ↓
getPayload()
   ↓
Get User Information
   ↓
Find/Create User
```

### ⭐ Interview Answer

> **`verifyIdToken()` from the Google Auth Library verifies Google's ID Token by checking its signature and important claims such as audience, issuer, and expiration. After successful verification, we can safely use the user's identity information from the token payload.**
