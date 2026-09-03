# 🛡️ Preventing CSRF Attacks Using Custom Headers

### 📌 Basic Idea

For API requests, instead of relying only on cookies, the client can send a **custom HTTP header** containing a CSRF token.

Example:

```http
X-CSRF-Token: abc123
```

The server checks this header before processing the request.

---

### 🔹 Why Custom Headers Help

A malicious website can usually trigger a simple cross-site request, but it **cannot freely set arbitrary custom headers** such as:

```http
X-CSRF-Token: abc123
```

for a cross-origin request.

Therefore, requiring a custom header makes CSRF attacks much harder.

---

### 🔹 Example

Client sends:

```js
fetch("/api/transfer", {
  method: "POST",
  headers: {
    "X-CSRF-Token": csrfToken,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: 1000,
  }),
});
```

Server checks:

```js
const token = req.headers["x-csrf-token"];

if (token !== expectedToken) {
  return res.status(403).json({
    message: "Invalid CSRF token",
  });
}
```

If the header is missing or invalid:

```text
403 Forbidden
```

---

### 🔹 Important: CORS

For **cross-origin API requests**, custom headers can trigger a **CORS preflight (`OPTIONS`) request**.

The server should allow the expected origin and header, for example:

```http
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Headers: X-CSRF-Token, Content-Type
```

Do **not** use:

```http
Access-Control-Allow-Origin: *
```

with credentialed requests.

---

### 🔹 Custom Header vs CSRF Token

| Method          | Idea                                          |
| --------------- | --------------------------------------------- |
| CSRF Token      | Server verifies a secret token                |
| Custom Header   | Client sends the token in a non-simple header |
| SameSite Cookie | Browser restricts cross-site cookie sending   |

In practice, **CSRF token + custom header** is a common pattern for APIs.

### 🧠 Remember

> **Require a custom header → attacker cannot normally set it from a malicious site → forged request is rejected.**

### 🎤 Interview Point

**Q: How can custom headers help prevent CSRF?**

**A:** The server can require a CSRF token in a custom header such as `X-CSRF-Token`. A malicious cross-origin page cannot normally set such headers due to browser security restrictions, so the server can reject requests that don't contain the expected header.
