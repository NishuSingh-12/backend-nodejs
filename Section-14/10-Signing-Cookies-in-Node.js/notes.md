# Signing Cookies in Node.js

A **Signed Cookie** is a cookie that contains a **digital signature** to detect whether its value has been modified.

> **Signed Cookie = Cookie + Digital Signature**

It helps ensure the **integrity** of cookie data.

---

# Why Do We Need Signed Cookies?

Normal cookies are stored in the user's browser.

A user can modify them using browser developer tools.

Example:

```text
role=user
```

A user may change it to:

```text
role=admin
```

❌ This is a security risk.

With a **Signed Cookie**, if the value is changed, the signature becomes invalid.

---

# How Signed Cookies Work

```text
Server
   │
   ├── Create Cookie
   ├── Sign Cookie using Secret Key
   │
   ▼
Browser Stores Cookie
   │
   ▼
Browser Sends Cookie
   │
   ▼
Server Verifies Signature
   │
 ├── Valid → Accept
 └── Invalid → Reject
```

---

# Secret Key

A **Secret Key** is used by the server to sign cookies.

Example:

```javascript
app.use(cookieParser("mySecretKey"));
```

The secret key should be:

- Long
- Random
- Kept private

❌ Never share it with users.

---

# Setting a Signed Cookie

```javascript
res.cookie("username", "Nishu", {
  signed: true,
});
```

- `"username"` → Cookie name
- `"Nishu"` → Cookie value
- `signed: true` → Creates a signed cookie

---

# Reading a Signed Cookie

```javascript
req.signedCookies.username;
```

Signed cookies are available in:

```javascript
req.signedCookies;
```

Normal cookies are available in:

```javascript
req.cookies;
```

---

# Flow

```text
User Login
     ↓
Server Creates Signed Cookie
     ↓
Cookie Stored in Browser
     ↓
Browser Sends Cookie
     ↓
Server Verifies Signature
     ↓
Access Granted / Denied
```

---

# Normal Cookie vs Signed Cookie

| Normal Cookie           | Signed Cookie                 |
| ----------------------- | ----------------------------- |
| Not protected           | Digitally signed              |
| Can be modified         | Modification can be detected  |
| Stored in `req.cookies` | Stored in `req.signedCookies` |
| Less secure             | More secure                   |

---

# Important Point

✅ A **Signed Cookie is NOT encrypted.**

The user can still **see** its value.

It only helps detect if the cookie has been modified.

---

# Real-Life Example

Imagine a movie ticket.

- **Normal Ticket** → Anyone can edit it with a pen.
- **Official Ticket with Stamp** → If someone changes the details, the official stamp no longer matches.

The **official stamp** is like the **digital signature** on a signed cookie.

---

# In Express.js

Install packages:

```bash
npm install cookie-parser
```

Use middleware:

```javascript
import cookieParser from "cookie-parser";

app.use(cookieParser("mySecretKey"));
```

Create signed cookie:

```javascript
res.cookie("user", "Nishu", {
  signed: true,
});
```

Read signed cookie:

```javascript
console.log(req.signedCookies.user);
```

---

# Interview Questions

### 1. What is a Signed Cookie?

A signed cookie is a cookie protected with a digital signature to detect whether its value has been modified.

---

### 2. Why do we use Signed Cookies?

To ensure the integrity of cookie data and detect tampering.

---

### 3. Are Signed Cookies encrypted?

**No.** They are signed, not encrypted. The value is visible but cannot be changed without detection.

---

### 4. Which package is used for Signed Cookies in Express?

**cookie-parser**

---

### 5. Where are Signed Cookies stored?

They are accessed through:

```javascript
req.signedCookies;
```

---

# Quick Revision (1 Minute)

- **Signed Cookie = Cookie + Digital Signature**
- **Uses Secret Key**
- **Detects Cookie Tampering**
- **Not Encrypted**
- **Set → `signed: true`**
- **Read → `req.signedCookies`**
- **Uses `cookie-parser`**
- **Provides Data Integrity**

---

## ⭐ Interview Trick

### Remember:

- **Normal Cookie → Can be Modified**
- **Signed Cookie → Modification Detected**
- **Signed ≠ Encrypted**

### Easy Formula

```text
Cookie
   ↓
Sign with Secret Key
   ↓
Signed Cookie
   ↓
Browser
   ↓
Server Verifies Signature
   ↓
Valid / Invalid
```

> **One-Line Interview Answer:**
> **A signed cookie is a cookie protected with a digital signature using a secret key. It does not hide the cookie's value, but it allows the server to detect if the cookie has been tampered with.**
