# 🚨 Reporting CSP Violations

### 📌 What is CSP Violation Reporting?

**CSP violation reporting** allows a website to receive information when the browser **blocks content because it violates the Content Security Policy**.

It helps developers **identify and fix security issues**.

---

## 🔹 How Does It Work?

**Browser detects violation → Generates report → Sends report to server**

For example, if the CSP allows scripts only from the same origin:

```http
Content-Security-Policy: script-src 'self'; report-uri /csp-report
```

If a script from another source is blocked, the browser can send a violation report to `/csp-report`.

---

## 🔹 `report-uri`

`report-uri` specifies where the browser should send violation reports.

```http
Content-Security-Policy:
  default-src 'self';
  report-uri /csp-report;
```

⚠️ `report-uri` is an older mechanism. **`report-to` / the Reporting API** is the newer approach, though browser support and implementation details vary.

---

## 🔹 Report-Only Mode

During testing, use:

```http
Content-Security-Policy-Report-Only:
  default-src 'self';
  report-uri /csp-report;
```

In this mode:

- CSP violations are **reported**
- Resources are **not blocked**
- Useful for testing a new CSP safely

### 🧠 Remember

> **CSP reporting helps developers monitor policy violations without necessarily blocking content.**

### 🎤 Interview Point

**Q: Why is CSP violation reporting useful?**

**A:** It helps developers detect when resources violate the CSP, allowing them to identify unexpected or potentially malicious behavior and improve the security policy.
