# Understanding JSON Web Tokens (JWT)

**JWT (JSON Web Token)** is a compact, URL-safe token used to **transfer information between a client and a server**.

It is commonly used for **authentication** in web applications and APIs.

> **JWT = Token used to identify/authenticate a user**

---

# Why Do We Use JWT?

After a user logs in successfully, the server needs a way to recognize that user on future requests.

Instead of storing a session on the server, the server can create a **JWT** and give it to the client.

```text
Login
  ↓
Verify Email + Password
  ↓
Generate JWT
  ↓
Send JWT to Client
  ↓
Client sends JWT with future requests
  ↓
Server verifies JWT
```

---

# What Does a JWT Look Like?

A JWT looks like this:

```text
xxxxx.yyyyy.zzzzz
```

It has **3 parts**, separated by dots:

```text
Header.Payload.Signature
```

---

# 1. Header

The Header contains information about the token.

Usually:

- `alg` → Algorithm
- `typ` → Token type

Example:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

---

# 2. Payload

The Payload contains **claims**, which are pieces of information about the user or token.

Example:

```json
{
  "userId": "12345",
  "role": "user"
}
```

Common claims:

- `sub` → Subject/user identifier
- `iat` → Issued At
- `exp` → Expiration Time
- `iss` → Issuer

⚠️ **Important:** JWT payload is normally **encoded, not encrypted**.

So don't put sensitive information such as:

```text
Password
Credit Card Number
```

inside the payload.

---

# 3. Signature

The Signature is used to verify that the token **has not been modified** and was created by a trusted party.

For an HMAC-based JWT, conceptually:

```text
Header + Payload + Secret Key
             ↓
          Signature
```

The server verifies the signature when the token comes back.

---

# Complete JWT Structure

```text
Header
   +
Payload
   +
Signature
   ↓
JWT
```

Or:

```text
Header.Payload.Signature
```

---

# JWT Authentication Flow

### Step 1: User Login

```text
Email + Password
      ↓
Server
```

### Step 2: Verify Password

```text
bcrypt.compare()
      ↓
Password Correct
```

### Step 3: Generate JWT

```text
User Information
      ↓
JWT
```

### Step 4: Send JWT

```text
Server → Client
```

### Step 5: Future Requests

Client sends the JWT with requests.

```text
Client
   ↓
JWT
   ↓
Server
```

### Step 6: Verify JWT

```text
JWT
 ↓
Verify Signature + Claims
 ↓
Valid?
 ↓
Allow / Reject
```

---

# JWT Example

A JWT can look like:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VySWQiOiIxMjM0NSIsInJvbGUiOiJ1c2VyIn0.
abc123signature
```

Don't try to remember the actual characters.

Just remember:

```text
Header.Payload.Signature
```

---

# JWT vs Session

| JWT                      | Session                        |
| ------------------------ | ------------------------------ |
| Stateless authentication | Stateful authentication        |
| Token contains claims    | Server stores session data     |
| Server verifies token    | Server looks up session        |
| Easy to scale            | Requires session storage       |
| Common in APIs           | Common in traditional web apps |

---

# Important JWT Security Points

### 1. JWT is not encryption

JWT payload can usually be decoded easily.

```text
Encoded ≠ Encrypted
```

---

### 2. Use HTTPS

Always send authentication tokens over **HTTPS** to protect them during transmission.

---

### 3. Keep Secret Key Safe

If using a secret key for signing JWTs:

```text
SECRET_KEY
```

never expose it to the client.

---

### 4. Set Expiration

JWTs should generally have an expiration time.

Example:

```json
{
  "exp": 1780000000
}
```

---

# JWT in Node.js

A commonly used package is:

```bash
npm install jsonwebtoken
```

Create a token:

```javascript
import jwt from "jsonwebtoken";

const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});
```

Verify it:

```javascript
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

---

# `jwt.sign()` vs `jwt.verify()`

| Method         | Purpose                                     |
| -------------- | ------------------------------------------- |
| `jwt.sign()`   | Creates a JWT                               |
| `jwt.verify()` | Verifies a JWT                              |
| `jwt.decode()` | Decodes payload without verifying signature |

⚠️ **Never use `decode()` alone for authentication.** Use `verify()`.

---

# Interview Questions

### 1. What is JWT?

JWT is a compact, URL-safe token commonly used to authenticate users and securely transfer claims between a client and server.

### 2. What are the three parts of JWT?

**Header, Payload, and Signature.**

### 3. Is JWT encrypted?

**Not by default.** A normal signed JWT is encoded and signed, not encrypted.

### 4. What is the purpose of the signature?

To verify the token's integrity and authenticity.

### 5. Which package is commonly used for JWT in Node.js?

**`jsonwebtoken`**

### 6. Which methods are commonly used?

```javascript
jwt.sign();
jwt.verify();
```

---

# Quick Revision

- **JWT = JSON Web Token**
- Used for **Authentication**
- **Stateless**
- Structure → `Header.Payload.Signature`
- **Header** → Algorithm + Token Type
- **Payload** → Claims
- **Signature** → Integrity & Authenticity
- `jwt.sign()` → Create token
- `jwt.verify()` → Verify token
- `jwt.decode()` → Decode only; **does not verify**
- JWT is **not encrypted by default**
- Don't store passwords in JWT payload
- Use **expiration (`exp`)**
- Keep secret key private

---

## ⭐ Interview Trick

Remember:

```text
JWT
 ↓
Header → How?
Payload → What?
Signature → Valid?
```

### Easy Formula

```text
Login
  ↓
Verify Password
  ↓
jwt.sign()
  ↓
JWT
  ↓
Client
  ↓
Request + JWT
  ↓
jwt.verify()
  ↓
Access Granted / Denied
```

> **One-line interview answer:**
> **JWT is a stateless authentication mechanism in which the server signs a token containing claims, and the client sends that token with subsequent requests so the server can verify the user's identity.**
