# 🛡️ Using Helmet.js for Adding Security Headers

### 📌 What is Helmet.js?

**Helmet.js** is an Express.js middleware that automatically adds **security-related HTTP response headers** to protect web applications from common attacks.

```bash
npm install helmet
```

### 🔹 Basic Usage

```js
import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```

After `helmet()` is enabled, Express responses include several security headers automatically.

### 🔐 Important Headers Added by Helmet

| Header                       | Protection                      |
| ---------------------------- | ------------------------------- |
| `Content-Security-Policy`    | Helps prevent XSS               |
| `Strict-Transport-Security`  | Forces HTTPS                    |
| `X-Content-Type-Options`     | Prevents MIME sniffing          |
| `X-Frame-Options`            | Helps prevent Clickjacking      |
| `Referrer-Policy`            | Controls referrer information   |
| `Cross-Origin-Opener-Policy` | Helps isolate browsing contexts |

### 🔧 Customizing Helmet

You can configure individual security headers:

```js
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
```

For example, you may disable CSP temporarily if your application's existing scripts are incompatible with Helmet's default CSP.

### 🧠 Remember

- **Helmet = Express security middleware**
- Adds multiple **HTTP security headers**
- Helps protect against common browser-based attacks
- It does **not** replace input validation, authentication, authorization, rate limiting, etc.

### 🎤 Interview Point

> **Helmet.js is an Express middleware that sets various HTTP security headers to improve the security of Node.js web applications.**
