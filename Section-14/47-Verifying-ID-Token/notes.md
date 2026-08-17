# Verifying ID Token

After Google authentication, the backend receives an **ID Token**. We must **verify it before trusting the user's information**.

> **ID Token verification = Confirm that the token was actually issued for our application and is valid.**

### Flow

```text
Google
  ↓
ID Token
  ↓
Backend
  ↓
Verify ID Token
  ↓
User Identity Trusted ✅
```

### 1. Install Google Auth Library

```bash
npm install google-auth-library
```

### 2. Verify the ID Token

```javascript
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const ticket = await client.verifyIdToken({
  idToken,
  audience: process.env.GOOGLE_CLIENT_ID,
});

const payload = ticket.getPayload();

console.log(payload.email);
console.log(payload.name);
console.log(payload.sub);
```

### What is Checked?

Google's library verifies important things such as:

- **Signature** → Token is genuinely issued by Google
- **Audience (`aud`)** → Token belongs to your application
- **Issuer (`iss`)** → Token comes from the expected issuer
- **Expiration (`exp`)** → Token has not expired

### After Verification

You can safely use the verified user information:

```javascript
const email = payload.email;
const name = payload.name;
const googleId = payload.sub;
```

Then:

```text
Verify ID Token
      ↓
Find/Create User
      ↓
Create Session
      ↓
Login Successful ✅
```

### ⚠️ Important

**Do not simply decode the JWT and trust its payload.**

```javascript
// ❌ Not enough for authentication
const payload = JSON.parse(Buffer.from(idToken.split(".")[1], "base64"));
```

Decoding only reads the token; **verification confirms that it is valid and trustworthy**.

### Quick Revision

> **ID Token verification confirms that the token is valid, unexpired, issued by the expected provider, and intended for our application.**

### Interview Answer

> **We verify Google's ID Token on the backend using Google's authentication library. This validates the token's signature and important claims such as issuer, audience, and expiration before we trust the user's identity.**
