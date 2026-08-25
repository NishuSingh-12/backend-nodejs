# Time-to-Live (TTL): Expiring Keys in Redis

### What is TTL?

- **TTL (Time-to-Live)** defines how long a Redis key should remain available.
- After the TTL expires, Redis **automatically deletes the key**.
- TTL is useful for **temporary data**.

### Setting TTL

Using `SET` with `EX`:

```bash
SET otp 123456 EX 60
```

- `EX 60` → key expires after **60 seconds**.

Using `SETEX`:

```bash
SETEX otp 123456 60
```

> `SETEX` sets a value with an expiration time in seconds.

### Checking TTL

```bash
TTL otp
```

Example:

```text
45
```

This means the key has approximately **45 seconds remaining**.

### Removing Expiration

Use `PERSIST`:

```bash
PERSIST otp
```

- Removes the expiration.
- The key will remain until it is explicitly deleted.

### Important TTL Return Values

```text
TTL key
```

| Return Value    | Meaning                          |
| --------------- | -------------------------------- |
| Positive number | Remaining time in seconds        |
| `-1`            | Key exists but has no expiration |
| `-2`            | Key does not exist               |

### Common Use Cases

- **OTP / verification codes**
- **Session data**
- **Cache entries**
- **Password reset tokens**
- **Temporary locks**
- **Rate-limiting data**

### Example

```bash
SET otp 123456 EX 300
```

The OTP will automatically expire after **5 minutes**.

### Quick Revision ⭐

**TTL = Time-To-Live**

```text
SET key value EX seconds
        ↓
   Key expires
        ↓
 Redis automatically deletes it
```

### Interview Question

**Q: What is TTL in Redis?**
**A:** TTL specifies how long a Redis key should exist. Once the TTL expires, Redis automatically removes the key.
