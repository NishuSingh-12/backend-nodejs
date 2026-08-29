# 🌐 Understanding Same-Origin Policy (SOP)

### 📌 What is Same-Origin Policy?

**Same-Origin Policy (SOP)** is a browser security mechanism that restricts a web page from accessing resources or data from a **different origin**.

Its main purpose is to prevent **unauthorized access to user data**.

---

### 🔹 What is an Origin?

An origin is made up of **3 parts**:

1. **Protocol** → `http` / `https`
2. **Host (Domain)** → `example.com`
3. **Port** → `3000`, `443`, etc.

Two URLs have the **same origin only when all three are the same**.

Example:

```text
https://example.com:443
```

---

### 🔹 Same-Origin Examples

```text
https://example.com/page1
https://example.com/page2
```

✅ Same origin

Because protocol, host, and port are the same.

---

### 🔹 Different-Origin Examples

```text
https://example.com
http://example.com
```

❌ Different origin → protocol differs.

```text
https://example.com
https://api.example.com
```

❌ Different origin → host differs.

```text
https://example.com:3000
https://example.com:4000
```

❌ Different origin → port differs.

---

### 🛡️ Why is SOP Important?

Without SOP, a malicious website could potentially access sensitive information from another website where the user is logged in.

For example:

```text
bank.com
   ↑
malicious-site.com
```

SOP helps prevent `malicious-site.com` from freely reading protected data from `bank.com`.

---

### 🔥 SOP vs CORS

- **SOP** → Browser's default security restriction.
- **CORS** → A mechanism that allows servers to explicitly permit certain cross-origin requests.

> **CORS does not remove SOP; it provides controlled exceptions to it.**

### 🧠 Remember

> **Same-Origin Policy = A browser security rule that prevents one origin from freely accessing another origin's data.**

### 🎤 Interview Point

**Q: What is Same-Origin Policy?**

**A:** Same-Origin Policy is a browser security mechanism that restricts scripts and web pages from accessing resources from a different origin unless cross-origin access is explicitly allowed.
