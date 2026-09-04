# 🔐 Important Security Headers You Should Know

### 📌 What are Security Headers?

**Security headers** are HTTP response headers that tell the browser how to handle a web application securely.

They provide **additional protection against common web attacks**.

---

### 🔹 Important Security Headers

| Header                                  | Purpose                                             |
| --------------------------------------- | --------------------------------------------------- |
| **Content-Security-Policy (CSP)**       | Helps prevent **XSS** and unwanted resource loading |
| **Strict-Transport-Security (HSTS)**    | Forces browsers to use **HTTPS**                    |
| **X-Content-Type-Options**              | Prevents MIME-type sniffing                         |
| **X-Frame-Options**                     | Helps prevent **Clickjacking**                      |
| **Referrer-Policy**                     | Controls how much referrer information is sent      |
| **Permissions-Policy**                  | Controls access to browser features                 |
| **Cross-Origin-Opener-Policy (COOP)**   | Helps isolate browsing contexts                     |
| **Cross-Origin-Resource-Policy (CORP)** | Controls which origins can load resources           |

---

### 🔹 1. Content-Security-Policy

Controls which resources the browser is allowed to load.

```http
Content-Security-Policy: default-src 'self'
```

**Protection:** XSS and malicious resource loading.

---

### 🔹 2. Strict-Transport-Security

Forces the browser to use HTTPS:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

**Protection:** Protocol downgrade and some HTTPS-related attacks.

> Use HSTS only when the site is properly configured for HTTPS.

---

### 🔹 3. X-Content-Type-Options

```http
X-Content-Type-Options: nosniff
```

Prevents browsers from trying to guess a resource's MIME type.

**Protection:** MIME-type sniffing attacks.

---

### 🔹 4. X-Frame-Options

```http
X-Frame-Options: DENY
```

Prevents the page from being loaded inside a frame.

**Protection:** Clickjacking.

> Modern applications can also use CSP's `frame-ancestors` directive.

---

### 🔹 5. Referrer-Policy

Controls the amount of URL/referrer information sent to another site.

Example:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

**Purpose:** Reduce unnecessary information leakage.

---

### 🔹 6. Permissions-Policy

Controls access to browser features such as:

- Camera
- Microphone
- Geolocation

Example:

```http
Permissions-Policy: camera=(), microphone=()
```

---

### 🧠 Remember

The most important ones to remember for interviews:

```text
CSP                  → XSS
HSTS                 → HTTPS
X-Content-Type-Options → MIME sniffing
X-Frame-Options      → Clickjacking
Referrer-Policy      → Referrer information
Permissions-Policy   → Browser features
```

### 🎤 Interview Point

**Q: What are security headers?**

**A:** Security headers are HTTP response headers that instruct browsers to apply security controls. Common examples include **CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Permissions-Policy**.
