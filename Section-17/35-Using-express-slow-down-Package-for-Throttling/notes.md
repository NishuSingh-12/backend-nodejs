# 🚦 Using `express-slow-down` Package for Throttling

### 📌 What is `express-slow-down`?

`express-slow-down` is an Express middleware that **slows down repeated requests** from a client instead of immediately blocking them.

It is useful for reducing API abuse and excessive traffic.

### 🔹 Installation

```bash
npm install express-slow-down
```

### 🔹 Basic Usage

```js
import express from "express";
import { slowDown } from "express-slow-down";

const app = express();

const speedLimiter = slowDown({
  windowMs: 60 * 1000, // 1 minute
  delayAfter: 5, // start slowing after 5 requests
  delayMs: () => 500, // add 500ms delay
});

app.use(speedLimiter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```

### 🔹 How It Works

If the limit is `5 requests/minute`:

```text
Request 1–5  → Normal response
Request 6   → 500ms delay
Request 7   → 1000ms delay
Request 8   → 1500ms delay
...
```

So, unlike a traditional rate limiter, the client is **slowed down progressively**.

### 🔄 Throttling vs Rate Limiting

| Throttling                             | Rate Limiting                    |
| -------------------------------------- | -------------------------------- |
| Slows requests                         | Blocks requests                  |
| Client can continue                    | Client gets rejected after limit |
| Useful for gradual control             | Useful for strict limits         |
| Usually doesn't return 429 immediately | Commonly returns `429`           |

### 🧠 Remember

> **`express-slow-down` = slow down excessive requests instead of immediately blocking them.**

It can also be combined with a **rate limiter** for stronger API protection.
