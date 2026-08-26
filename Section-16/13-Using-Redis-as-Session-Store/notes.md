# Using Redis as a Session Store

### What is a Session Store?

- A **session store** is a place where server-side session data is stored.
- When a user logs in, the server creates a **session** and stores its data.
- Redis can be used to store these sessions because it is **fast** and supports **TTL**.

### How It Works

```text
User Login
    ↓
Server creates Session ID
    ↓
Session Data → Redis
    ↓
Session ID → Client (Cookie)
```

For later requests:

```text
Client sends Session ID
        ↓
      Server
        ↓
      Redis
        ↓
  Session Data
        ↓
 Authenticate User
```

### Example

Redis can store:

```text
session:abc123
    userId → 101
    role   → "user"
```

The client only stores the **session ID** in a cookie, not the complete session data.

### Why Use Redis for Sessions?

- ⚡ **Fast** session lookup
- ⏳ Supports **TTL** for automatic session expiration
- 🔄 Shared session storage across multiple servers
- 🚀 Useful for **distributed applications**
- 🧹 Expired sessions can be automatically removed

### Session Expiration

```text
session:abc123 → TTL: 3600 seconds
```

After 1 hour, Redis automatically removes the session.

### Logout

On logout, the session can be deleted:

```js
await client.del("session:abc123");
```

The session becomes invalid immediately.

### Redis Session Store vs In-Memory Session

| Redis                           | Server Memory                   |
| ------------------------------- | ------------------------------- |
| Shared between multiple servers | Stored on one server            |
| Suitable for distributed apps   | Difficult with multiple servers |
| Supports TTL                    | Depends on implementation       |
| Fast                            | Fast                            |
| Centralized session storage     | Server-specific storage         |

### Quick Revision ⭐

> **Redis as a Session Store** means storing server-side session data in Redis while the client typically keeps only the session ID in a cookie.

### Interview Question

**Q: Why is Redis commonly used as a session store?**

**A:** Redis provides fast session lookups, supports automatic expiration using TTL, and allows multiple application servers to share the same session data.
