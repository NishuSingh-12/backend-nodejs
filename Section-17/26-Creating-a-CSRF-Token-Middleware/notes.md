# 🛡️ Creating a CSRF Token Middleware

### 📌 What is CSRF Token Middleware?

**CSRF Token Middleware** is middleware that:

1. Generates a CSRF token.
2. Makes the token available to the client.
3. Validates the token on protected requests.
4. Rejects requests with an invalid or missing token.

---

### 🔹 Basic Flow

```text
Client Request
      ↓
CSRF Middleware
      ↓
Token exists?
   ↙       ↘
 Yes        No
 ↓           ↓
Validate    Generate
 ↓           ↓
Valid?    Send token
 ↙   ↘
Yes   No
 ↓     ↓
Next  403
```

---

### 🔹 Example in Express

A simplified middleware can look like:

```js
import crypto from "crypto";

function csrfMiddleware(req, res, next) {
  if (!req.session.csrfToken) {
    req.session.csrfToken = crypto.randomBytes(32).toString("hex");
  }

  if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
    const token = req.headers["x-csrf-token"];

    if (token !== req.session.csrfToken) {
      return res.status(403).json({
        message: "Invalid CSRF token",
      });
    }
  }

  next();
}
```

Then use it:

```js
app.use(csrfMiddleware);
```

---

### 🔹 How Client Sends the Token

The server provides the token to the legitimate client, and the client sends it in a request header:

```http
X-CSRF-Token: abc123...
```

The middleware compares it with the token stored for the user's session.

---

### 🧠 Remember

> **Generate → Send → Validate → Reject if invalid**

CSRF middleware should protect **state-changing requests**, not normally `GET`, `HEAD`, or `OPTIONS`.

### 🎤 Interview Point

**Q: What does CSRF middleware do?**

**A:** It generates and/or validates a CSRF token for state-changing requests. If the token is missing or invalid, the middleware rejects the request, helping prevent attackers from performing unauthorized actions using a victim's authenticated session.
