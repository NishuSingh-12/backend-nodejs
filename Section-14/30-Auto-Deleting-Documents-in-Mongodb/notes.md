# Auto-Deleting Documents in MongoDB

MongoDB provides **TTL (Time To Live) indexes** to automatically delete documents after a specified amount of time.

> **TTL Index = Automatically deletes expired documents**

### Why Use TTL?

TTL is useful for temporary data such as:

- Sessions
- OTPs
- Temporary tokens
- Logs
- Cache data

---

## How TTL Works

You create a **TTL index** on a field containing a date.

```javascript
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

Here:

- `createdAt` → Date field
- `3600` → Document expires after 1 hour

Example document:

```javascript
{
  userId: 101,
  createdAt: new Date()
}
```

After the specified time, MongoDB automatically removes the document.

---

## TTL with Mongoose

```javascript
const sessionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});
```

Here:

```text
expires: 3600
```

means the document will expire approximately **1 hour after `createdAt`**.

---

## Important Point

TTL deletion is **not exactly at the expiration second**.

MongoDB's TTL monitor runs periodically, so deletion can happen **a little after** the expiration time.

Therefore, TTL should not be used when deletion must happen at an exact moment.

---

## Quick Revision

- **TTL = Time To Live**
- Used for **automatic document deletion**
- Works with a **Date field + TTL index**
- Useful for **sessions, OTPs, tokens, logs**
- `expireAfterSeconds` specifies the lifetime
- Deletion happens **approximately after the expiry time**

### ⭐ Interview Answer

> **MongoDB TTL indexes automatically delete documents after a specified period. They are commonly used for temporary data such as sessions, OTPs, tokens, and logs.**
