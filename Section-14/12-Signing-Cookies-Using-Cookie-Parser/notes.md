# Signing Cookies Using Cookie-Parser

**`cookie-parser`** is an Express middleware used to **read, parse, and sign cookies**.

To create **Signed Cookies**, we use `cookie-parser` with a **Secret Key**.

> **Signed Cookie = Cookie + Digital Signature**

---

# Why Use Signed Cookies?

A normal cookie can be modified by the user.

Example:

```text id="pkpjrh"
role=user
```

User changes it to:

```text id="z5w7im"
role=admin
```

❌ Security Risk

A signed cookie detects such modifications.

---

# Step 1: Install cookie-parser

```bash id="l9yr5k"
npm install cookie-parser
```

---

# Step 2: Import cookie-parser

```javascript id="6g8yli"
import cookieParser from "cookie-parser";
```

---

# Step 3: Use Middleware

Pass a **Secret Key** to `cookie-parser`.

```javascript id="lqqvk2"
app.use(cookieParser("mySecretKey"));
```

- `"mySecretKey"` → Used to sign and verify cookies.
- Keep it **private**.

---

# Step 4: Create a Signed Cookie

```javascript id="75yxlw"
res.cookie("username", "Nishu", {
  signed: true,
});
```

### Parameters

- `"username"` → Cookie name
- `"Nishu"` → Cookie value
- `signed: true` → Makes it a signed cookie

---

# Step 5: Read Signed Cookie

```javascript id="3k4ch7"
console.log(req.signedCookies.username);
```

Signed cookies are stored in:

```javascript id="tn5l27"
req.signedCookies;
```

---

# Normal Cookie

```javascript id="s38zrn"
console.log(req.cookies);
```

Normal cookies are stored in:

```javascript id="m5qlsx"
req.cookies;
```

---

# Complete Example

```javascript id="h7jlwm"
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser("mySecretKey"));

app.get("/set", (req, res) => {
  res.cookie("user", "Nishu", {
    signed: true,
  });

  res.send("Signed Cookie Created");
});

app.get("/get", (req, res) => {
  res.send(req.signedCookies.user);
});

app.listen(3000);
```

---

# How It Works

```text id="y1kavl"
User Request
      ↓
Server Creates Signed Cookie
      ↓
Browser Stores Cookie
      ↓
Browser Sends Cookie
      ↓
cookie-parser Verifies Signature
      ↓
Valid / Invalid
```

---

# If Cookie is Modified

Original:

```text id="8x6bws"
user=Nishu
```

User changes it:

```text id="65bdgz"
user=Admin
```

Server checks the signature.

❌ Signature does not match.

Result:

```text id="5l8y8g"
Cookie Rejected
```

---

# Important Points

✅ Signed cookies detect tampering.

✅ Cookie value is still visible.

❌ Signed cookies do **not** encrypt data.

---

# Normal Cookie vs Signed Cookie

| Normal Cookie           | Signed Cookie                 |
| ----------------------- | ----------------------------- |
| Easy to modify          | Modification detected         |
| Stored in `req.cookies` | Stored in `req.signedCookies` |
| No signature            | Has digital signature         |
| Less secure             | More secure                   |

---

# Real-Life Example

Imagine a **college ID card**.

- **Normal Paper Card** → Anyone can edit it.
- **Official ID with University Seal** → If someone changes the details, the seal becomes invalid.

The **University Seal** is like the **digital signature** of a signed cookie.

---

# Interview Questions

### 1. What is cookie-parser?

`cookie-parser` is an Express middleware used to parse cookies and support signed cookies.

---

### 2. How do you create a signed cookie?

```javascript id="4xjg4j"
res.cookie("user", "Nishu", {
  signed: true,
});
```

---

### 3. Where are signed cookies stored?

```javascript id="p5ftbi"
req.signedCookies;
```

---

### 4. Why is a Secret Key required?

The secret key is used to **sign** cookies and **verify** that they have not been modified.

---

### 5. Are signed cookies encrypted?

**No.** They are signed to detect tampering, but their values are still readable.

---

# Quick Revision (1 Minute)

- **`cookie-parser`** → Express middleware
- **Secret Key** → Signs cookies
- **`signed: true`** → Creates signed cookie
- **`req.cookies`** → Normal cookies
- **`req.signedCookies`** → Signed cookies
- **Detects Tampering**
- **Not Encryption**

---

## ⭐ Interview Trick

### Remember:

- **Normal Cookie → `req.cookies`**
- **Signed Cookie → `req.signedCookies`**
- **`cookie-parser` + Secret Key = Signed Cookies**

### Easy Formula

```text id="gqvtki"
cookie-parser
      +
Secret Key
      ↓
Signed Cookie
      ↓
Browser
      ↓
Server Verifies
      ↓
Valid / Invalid
```

> **One-Line Interview Answer:**
> **`cookie-parser` is an Express middleware that uses a secret key to create and verify signed cookies, allowing the server to detect if a cookie has been tampered with.**
