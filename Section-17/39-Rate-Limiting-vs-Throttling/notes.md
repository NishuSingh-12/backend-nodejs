# 🚦 Rate Limiting vs Throttling

Both control excessive API traffic, but they work differently.

| Rate Limiting                           | Throttling                                   |
| --------------------------------------- | -------------------------------------------- |
| Limits the **number of requests**       | Controls the **speed/frequency** of requests |
| Usually **blocks** requests after limit | Usually **slows down** requests              |
| Often returns `429 Too Many Requests`   | Adds delay to responses                      |
| Example: 100 requests/minute            | Example: add 500ms delay after 10 requests   |
| Best for strict usage limits            | Best for gradually controlling traffic       |

### 🔹 Example

**Rate Limiting:**

```text
Requests 1–100 → Allowed
Request 101    → ❌ 429
```

**Throttling:**

```text
Requests 1–10 → Normal
Request 11+   → 🐢 Slower responses
```

### 🧠 Remember

> **Rate Limiting = How many requests?**
> **Throttling = How fast can requests happen?**

### 🎤 Interview Point

> **Rate limiting restricts the number of requests within a time window, while throttling controls the rate at which requests are processed, often by slowing excessive requests.**
