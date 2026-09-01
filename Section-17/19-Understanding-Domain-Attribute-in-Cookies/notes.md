# 🍪 Understanding `Domain` Attribute in Cookies

### 📌 What is `Domain`?

The **`Domain` attribute** specifies which **domain(s) can receive a cookie**.

```http
Set-Cookie: sessionId=abc123; Domain=example.com
```

The browser sends this cookie to requests matching the specified domain.

---

### 🔹 Example

If the cookie is set with:

```http
Domain=example.com
```

It can generally be sent to:

```text
example.com
sub.example.com
```

But **not** to an unrelated domain:

```text
another.com
```

---

### 🔹 If `Domain` is Not Specified

If you don't specify `Domain`, the cookie becomes a **host-only cookie**.

Example:

```http
Set-Cookie: sessionId=abc123
```

If set by:

```text
app.example.com
```

the cookie is sent only to **`app.example.com`**, not to other subdomains such as:

```text
api.example.com
```

---

### ⚠️ Security Consideration

Setting:

```http
Domain=example.com
```

makes the cookie available to matching subdomains.

So, if you don't need cross-subdomain sharing, **prefer a host-only cookie** by omitting the `Domain` attribute.

### 🧠 Remember

> **`Domain` controls which host/domain receives the cookie.**
> **No `Domain` attribute → host-only cookie.**

### 🎤 Interview Point

**Q: What does the `Domain` attribute do in a cookie?**

**A:** It determines which domain or subdomains can receive the cookie. If the `Domain` attribute is omitted, the cookie is generally restricted to the host that set it.
