# 🚦 Protecting APIs with Rate Limiting

### 📌 What is Rate Limiting?

**Rate Limiting** restricts how many requests a client can make to an API within a specific time period.

Example:

```text
100 requests / 1 minute / IP
```

If the limit is exceeded, the server rejects further requests temporarily.

---

### 🔹 Why Rate Limiting?

Rate limiting helps protect APIs from:

- **DoS attacks**
- Brute-force attacks
- Excessive API usage
- Bot/automated abuse
- Server resource exhaustion

---

### 🔹 Example

Suppose:

```text
Limit = 100 requests/minute
```

A client sends:

```text
Request 1  → ✅
Request 2  → ✅
...
Request 100 → ✅
Request 101 → ❌ 429 Too Many Requests
```

The standard HTTP status code is:

```http
429 Too Many Requests
```

---

### 🔹 Express Example

A simple rate-limiting middleware can track requests by IP:

```js
const requests = new Map();

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();

  const record = requests.get(ip) || {
    count: 0,
    start: now,
  };

  if (now - record.start > 60_000) {
    record.count = 0;
    record.start = now;
  }

  record.count++;

  if (record.count > 100) {
    return res.status(429).json({
      message: "Too many requests",
    });
  }

  requests.set(ip, record);
  next();
}
```

> In production, rate limiting is usually implemented with a dedicated middleware/library and a shared store such as **Redis**, especially when multiple server instances are running.

---

### 🔹 Where to Apply Rate Limiting?

Use stricter limits for sensitive endpoints:

```text
/login       → Strict
/otp         → Very Strict
/password    → Strict
/api/users   → Moderate
/public data → Higher limit
```

---

### 🧠 Remember

> **Rate Limiting = Limit requests → Prevent abuse → Protect server resources**

**Too many requests → `429 Too Many Requests`**

### 🎤 Interview Point

**Q: What is rate limiting and why is it used?**

**A:** Rate limiting controls the number of requests a client can make within a specific time period. It helps prevent abuse, brute-force attacks, and resource exhaustion, improving API availability and stability.
