# Implementing Google Login Using Implicit Grant

> **Note:** Implicit Grant is a **legacy OAuth flow** and is **not recommended for new applications**. Use **Authorization Code + PKCE** instead.

### Flow

```text
Login Button
     ↓
Google Login
     ↓
User gives consent
     ↓
Access Token directly
     ↓
Frontend
```

### Example

The frontend redirects the user to Google's authorization URL:

```javascript
const params = new URLSearchParams({
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: "http://localhost:5173/callback",
  response_type: "token",
  scope: "openid email profile",
});

window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
```

The important part is:

```javascript
response_type: "token";
```

This tells Google to use the **Implicit Grant** flow.

After login, Google returns the token in the URL fragment:

```text
http://localhost:5173/callback#access_token=ABC123
```

The frontend can read it:

```javascript
const params = new URLSearchParams(window.location.hash.substring(1));

const accessToken = params.get("access_token");

console.log(accessToken);
```

### Quick Revision

```text
Implicit Grant
     ↓
response_type = "token"
     ↓
Google Login
     ↓
Access Token directly
     ↓
Frontend
```

### Remember

> **Implicit Grant returns the access token directly to the client, which is why it has higher security risks and is no longer recommended.**

**Interview Answer:**

> **In the Implicit Grant flow, the client requests `response_type=token`, and after user authorization, Google returns the access token directly to the client. However, this flow is legacy and should generally be replaced with Authorization Code Flow with PKCE.**
