# 🖱️ Clickjacking

### 📌 What is Clickjacking?

**Clickjacking** is a web attack where an attacker **tricks a user into clicking on something different from what they think they are clicking**.

The attacker usually places a legitimate website or button inside a **hidden/transparent iframe** and overlays another UI on top of it.

---

### 🔹 How It Works

**Attacker's Website → Invisible/Hidden Frame → Victim Clicks → Unintended Action**

Example:

- Victim sees a **"Play Video"** button.
- A hidden layer contains a **"Delete Account"** button from another website.
- The victim clicks what they see.
- The click is actually received by the hidden page.

---

### ⚠️ What Can Clickjacking Cause?

Depending on the application, it may trick users into:

- Changing account settings
- Performing unwanted actions
- Submitting forms
- Making purchases
- Deleting or modifying data

---

### 🛡️ How to Prevent Clickjacking?

Use security headers to control whether your website can be embedded in a frame.

### 1. `X-Frame-Options`

```http
X-Frame-Options: DENY
```

Prevents the page from being loaded inside a frame.

### 2. CSP `frame-ancestors`

Modern approach:

```http
Content-Security-Policy: frame-ancestors 'none';
```

This tells the browser that **no website is allowed to embed the page in a frame**.

---

### 🧠 Remember

> **Clickjacking = Tricking a user into clicking an unintended element.**

### 🎤 Interview Point

**Q: What is Clickjacking and how can you prevent it?**

**A:** Clickjacking is an attack where users are tricked into interacting with a hidden or overlaid element. It can be prevented using **`X-Frame-Options`** or the CSP **`frame-ancestors`** directive.
