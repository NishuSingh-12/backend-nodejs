# 🚦 Add API Throttling with Custom Throttle Function

### 📌 What is API Throttling?

**API Throttling** limits how frequently a client can make requests to an API.

It helps prevent:

- Excessive API usage
- Server overload
- Abuse and automated attacks
- Resource exhaustion

### 🔹 Custom Throttle Function

A custom throttle middleware can track requests from each client and temporarily block requests when the limit is exceeded.

```js
const throttle = (limit, windowMs) => {
  const requests = new Map();

  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();

    const record = requests.get(key);

    if (!record || now - record.start >= windowMs) {
      requests.set(key, {
        start: now,
        count: 1,
      });

      return next();
    }

    if (record.count >= limit) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    record.count++;
    next();
  };
};
```

### 🔹 Using the Middleware

```js
app.use(throttle(10, 60 * 1000));
```

This means:

> **Maximum 10 requests per IP in 1 minute.**

If the limit is exceeded:

```http
429 Too Many Requests
```

### ⚠️ Limitation of Simple Custom Throttling

Using an in-memory `Map` has limitations:

- Data is lost when the server restarts.
- Doesn't work reliably across multiple server instances.
- Memory can grow if old client records aren't cleaned up.

For production applications, use a **shared store such as Redis** or a dedicated rate-limiting solution.

### 🧠 Remember

**Throttling = control request frequency**

```text
Client → API → Throttle Check → Allow / 429
```

### 🎤 Interview Point

> **API throttling controls how frequently a client can access an API to prevent abuse and protect server resources.**
