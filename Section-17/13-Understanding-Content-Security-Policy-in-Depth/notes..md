# 🛡️ Content Security Policy (CSP)

### 📌 What is CSP?

**Content Security Policy (CSP)** is a browser security mechanism that helps protect web applications from attacks such as **XSS** and unauthorized content loading.

It works by telling the browser **which sources of content are allowed** to load or execute.

---

## 🔹 How CSP Works

**Server → CSP Policy → Browser → Allows/Blocks Content**

A server sends a CSP policy using the `Content-Security-Policy` HTTP response header.

Example:

```http
Content-Security-Policy: default-src 'self'
```

This tells the browser to allow resources primarily from the **same origin**.

---

## 🔹 Common CSP Directives

| Directive         | Controls                                    |
| ----------------- | ------------------------------------------- |
| `default-src`     | Default source for different resource types |
| `script-src`      | JavaScript sources                          |
| `style-src`       | CSS sources                                 |
| `img-src`         | Images                                      |
| `font-src`        | Fonts                                       |
| `connect-src`     | `fetch`, XHR, WebSocket connections         |
| `media-src`       | Audio/video                                 |
| `object-src`      | Plugins/objects                             |
| `frame-src`       | Resources loaded inside frames              |
| `frame-ancestors` | Which sites can embed the page              |

### 🔹 Example

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  img-src 'self' https://images.example.com;
```

Meaning:

- Resources → same origin by default
- JavaScript → only from same origin
- Images → same origin or `images.example.com`

---

## 🔥 CSP and XSS

Suppose an attacker manages to inject a `<script>` into a page.

A properly configured CSP can **prevent the browser from executing that script**, depending on the policy.

So:

> **CSP is an additional layer of defense against XSS, not a replacement for input validation and output encoding.**

---

## 🔹 Nonce-Based CSP

For applications that need specific inline scripts, a **nonce** can be used.

Example policy:

```http
Content-Security-Policy: script-src 'nonce-abc123'
```

The corresponding script must contain the same nonce:

```html
<script nonce="abc123">
  // Allowed script
</script>
```

A nonce should be **random and unpredictable**, and normally generated for each response.

---

## 🔹 Report-Only Mode

You can test a CSP without blocking resources by using:

```http
Content-Security-Policy-Report-Only
```

It reports violations but does not enforce the policy.

Useful when **testing a new CSP before enforcing it**.

---

## 🛡️ Best Practices

- Start with a restrictive policy.
- Prefer **nonces or hashes** over allowing arbitrary inline scripts.
- Avoid `'unsafe-inline'` where possible.
- Avoid `'unsafe-eval'` where possible.
- Restrict third-party resources to trusted domains.
- Test using **Report-Only** before enforcing.
- Keep CSP as an additional security layer.

### 🧠 Remember

> **CSP = A browser-enforced allowlist that controls where web content can come from and what can execute.**

### 🎤 Interview Point

**Q: What is Content Security Policy?**

**A:** CSP is a browser security mechanism implemented through HTTP headers that controls the sources from which scripts, styles, images, and other resources can be loaded. It helps reduce risks such as **XSS and unauthorized resource loading**.
