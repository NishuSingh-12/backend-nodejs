# One Tap Login & Fixing Implicit Flow Issue

**Google One Tap** provides a quick login experience where Google can show the user's account without requiring a full login page.

### One Tap Flow

```text
User opens app
      ↓
Google One Tap appears
      ↓
User selects account
      ↓
Google returns ID Token
      ↓
Backend verifies token
      ↓
Login ✅
```

### Basic Frontend

```html
<script src="https://accounts.google.com/gsi/client"></script>
```

```javascript
google.accounts.id.initialize({
  client_id: GOOGLE_CLIENT_ID,
  callback: handleCredential,
});

google.accounts.id.prompt();

function handleCredential(response) {
  console.log(response.credential);
}
```

`response.credential` contains the **Google ID Token**.

### Send Token to Backend

```javascript
await fetch("/auth/google", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    idToken: response.credential,
  }),
});
```

Backend verifies it:

```javascript
const ticket = await client.verifyIdToken({
  idToken,
  audience: process.env.GOOGLE_CLIENT_ID,
});

const user = ticket.getPayload();
```

### Why This Fixes the Implicit Flow Problem

```text
❌ Implicit Flow
Google → Access Token → Browser

✅ One Tap / OIDC
Google → ID Token → Backend
                         ↓
                    Verify Token
```

**One Tap is not simply a replacement for every OAuth flow**; it provides a Google identity credential that your backend verifies.

### Quick Revision

> **Google One Tap provides a fast sign-in experience and returns a Google ID Token. The backend verifies the token and then creates the application's session.**
