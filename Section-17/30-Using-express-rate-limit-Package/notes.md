# 🚦 Using `express-rate-limit` Package

### 📌 What is `express-rate-limit`?

`express-rate-limit` is an Express middleware used to **limit the number of requests** a client can make within a specific time window.

It helps protect APIs against:

- DoS/resource exhaustion
- Brute-force attacks
- Excessive API requests
- Automated abuse

---

### 🔹 Installation

```bash
npm install express-rate-limit
```

---

### 🔹 Basic Usage

```js
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  limit: 100, // 100 requests
});

app.use(limiter);
```

This allows **100 requests per client per minute**.

After the limit is exceeded, the middleware returns:

```text
429 Too Many Requests
```

---

### 🔹 Apply Rate Limiting to Specific Routes

You don't always need to limit the entire application.

For example, login should have a stricter limit:

```js
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
});

app.post("/login", loginLimiter, loginController);
```

So a client can make only **5 login requests in 15 minutes**.

---

### 🔹 Global vs Route-Specific

```js
// Global
app.use(limiter);
```

Protects all routes.

```js
// Specific route
app.post("/login", loginLimiter, loginController);
```

Protects only the login route.

**Best practice:** Use different limits depending on the sensitivity and expected traffic of each endpoint.

---

### 🧠 Remember

> **`express-rate-limit` = Express middleware for controlling request frequency.**

**Too many requests → `429 Too Many Requests`**

### 🎤 Interview Point

**Q: How do you implement rate limiting in Express?**

**A:** Install `express-rate-limit`, configure a time window and request limit, and apply the middleware globally or to specific routes. For sensitive endpoints like login, stricter limits can be configured.
