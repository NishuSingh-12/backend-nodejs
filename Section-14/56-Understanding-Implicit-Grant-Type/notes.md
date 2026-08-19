# Understanding Implicit Grant Type

The **Implicit Grant** is an older OAuth 2.0 flow where the client receives the **Access Token directly** from the Authorization Server.

### Flow

```text
User
 ↓
Authorization Server
 ↓
Login + Consent
 ↓
Access Token
 ↓
Client
```

Unlike Authorization Code Flow:

```text
Implicit → Access Token directly
Authorization Code → Code → Access Token
```

### Example

```text id="6q1e4a"
https://example.com/callback#access_token=ABC123
```

The token is returned in the **URL fragment**.

### Why Is It Not Recommended?

- Access token is exposed to the browser
- Higher risk of token leakage
- No secure backend code exchange
- Difficult to manage securely

> **Modern applications should generally use Authorization Code Flow with PKCE instead.**

### Quick Revision

**Implicit Grant:**

> **Authorization Server → Access Token → Client**

### Interview Answer

> **Implicit Grant is an older OAuth 2.0 flow where the access token is returned directly to the client without an authorization code exchange. It is no longer recommended because of security concerns and has largely been replaced by Authorization Code Flow with PKCE.**
