# 🔐 Using Inline Scripts with Hash in CSP

### 📌 What is CSP Hash?

A **CSP hash** allows a specific **inline script** to execute while keeping other inline scripts blocked.

Instead of allowing all inline scripts with `'unsafe-inline'`, CSP can allow only scripts whose content matches a trusted hash.

---

### 🔹 How It Works

**Inline Script → Generate Hash → Add Hash to CSP → Browser Verifies → Execute if Match**

Example inline script:

```html
<script>
  console.log("Hello");
</script>
```

A **SHA-256 hash** is generated from the exact script content.

Then add that hash to the CSP:

```http
Content-Security-Policy: script-src 'self' 'sha256-...';
```

The browser calculates the hash of the inline script and compares it with the hash in the CSP.

- ✅ Hash matches → Script is allowed
- ❌ Hash does not match → Script is blocked

---

### 🔹 Why Use Hashes?

Without a hash:

```http
script-src 'self' 'unsafe-inline'
```

`'unsafe-inline'` allows inline scripts broadly and weakens XSS protection.

With a hash:

```http
script-src 'self' 'sha256-...'
```

Only the **exact trusted inline script** is allowed.

---

### ⚠️ Important Point

The hash must match the script **exactly**.

Even a small change, such as:

- Different spaces
- Different characters
- Changed code

will produce a different hash, so the browser will block the script.

### 🧠 Remember

> **CSP Hash = Allow a specific inline script without allowing all inline scripts.**

### 🎤 Interview Point

**Q: Why are CSP hashes used?**

**A:** CSP hashes allow specific trusted inline scripts to execute while blocking other inline scripts, providing stronger XSS protection than using `'unsafe-inline'`.
