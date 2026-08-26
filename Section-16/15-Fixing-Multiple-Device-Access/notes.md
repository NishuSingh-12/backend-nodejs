# Fixing Multiple Device Access

### Problem

If the same user logs in from multiple devices, each device can create a separate session.

```text
Device 1 → Session A
Device 2 → Session B
Device 3 → Session C
```

If we want **only one active session per user**, we can store the active session ID in Redis.

### Solution

Store:

```text
user:101:session → abc123
```

When the user logs in again, replace the old session.

### Login

```js
const sessionId = crypto.randomUUID();

await client.set(`user:${userId}:session`, sessionId, { EX: 3600 });
```

### Validate Session

```js
const activeSession = await client.get(`user:${userId}:session`);

if (activeSession !== sessionId) {
  return res.status(401).json({
    error: "Session expired",
  });
}
```

### What Happens?

```text
Device 1 → Session A
             ↓
        Redis stores A

Device 2 → Session B
             ↓
        Redis replaces A with B
```

Now **Session A becomes invalid**.

### Quick Revision ⭐

> Store the user's **current session ID** in Redis. When a new login occurs, replace the old session ID, automatically invalidating the previous device session.

**Interview:**
**Q: How can Redis restrict a user to one active device?**
**A:** Store the user's active session ID in Redis and invalidate the previous session whenever a new login occurs.
