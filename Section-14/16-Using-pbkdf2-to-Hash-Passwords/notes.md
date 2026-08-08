# Using `pbkdf2` to Hash Passwords

`pbkdf2` (**Password-Based Key Derivation Function 2**) is a built-in method in Node.js used to **securely hash passwords**.

It is available in the **`crypto`** module.

> **PBKDF2 = Password + Salt + Many Iterations → Secure Hash**

---

# Why Use PBKDF2?

Normal hashing (SHA-256):

- Very fast ❌
- Easy for attackers to brute-force

PBKDF2:

- Intentionally slow ✅
- Uses Salt ✅
- Uses Multiple Iterations ✅
- More secure for passwords ✅

---

# Import crypto

```javascript
import crypto from "crypto";
```

---

# pbkdf2() Syntax

```javascript
crypto.pbkdf2(password, salt, iterations, keyLength, digest, callback);
```

---

# Parameters

| Parameter  | Meaning                         |
| ---------- | ------------------------------- |
| password   | User password                   |
| salt       | Random value                    |
| iterations | Number of hashing rounds        |
| keyLength  | Length of generated key         |
| digest     | Hash algorithm (sha256, sha512) |
| callback   | Returns generated hash          |

---

# Example

```javascript
import crypto from "crypto";

crypto.pbkdf2(
  "Nishu@123",
  "randomSalt",
  100000,
  32,
  "sha256",
  (err, derivedKey) => {
    console.log(derivedKey.toString("hex"));
  },
);
```

### Output

```text
9e7b5c2f4a8d...
```

---

# How PBKDF2 Works

```text
Password
     ↓
Add Salt
     ↓
100000 Iterations
     ↓
SHA-256
     ↓
Secure Hash
```

---

# Registration Flow

```text
User Password
      ↓
Generate Salt
      ↓
PBKDF2
      ↓
Store Hash + Salt
```

---

# Login Flow

```text
Entered Password
       ↓
Use Stored Salt
       ↓
PBKDF2 Again
       ↓
Compare Hashes
       ↓
Login Success / Failed
```

---

# Why Store the Salt?

Example:

Database

```text
Email                Salt          Hash
nishu@gmail.com      xY8@2P        9e7b5c2f...
```

During login:

- Read stored salt.
- Hash entered password with the same salt.
- Compare the new hash with the stored hash.

---

# PBKDF2 vs bcrypt

| PBKDF2                            | bcrypt                                     |
| --------------------------------- | ------------------------------------------ |
| Built into Node.js (`crypto`)     | External package                           |
| Uses Password + Salt + Iterations | Uses Password + Salt + Cost Factor         |
| Widely supported                  | Designed specifically for password hashing |
| Good choice                       | Often preferred for password storage       |

---

# pbkdf2Sync()

Synchronous version.

```javascript
import crypto from "crypto";

const hash = crypto.pbkdf2Sync("Nishu@123", "randomSalt", 100000, 32, "sha256");

console.log(hash.toString("hex"));
```

---

# Important Points

✅ Uses random salt.

✅ Uses many iterations.

✅ Much slower than SHA-256.

✅ Makes brute-force attacks harder.

---

# Where is PBKDF2 Used?

- Password Hashing
- Key Generation
- Encryption Systems
- Secure Authentication

---

# Interview Questions

### 1. What is PBKDF2?

PBKDF2 (Password-Based Key Derivation Function 2) is a key derivation algorithm used to securely hash passwords using a salt and multiple iterations.

---

### 2. Which module provides PBKDF2 in Node.js?

**`crypto`**

---

### 3. Why is PBKDF2 better than normal hashing?

Because it uses **salt** and **many iterations**, making brute-force attacks much more difficult.

---

### 4. What does the `iterations` parameter do?

It specifies how many times the hashing process runs. More iterations increase security but also increase processing time.

---

### 5. What should be stored in the database?

- Password Hash ✅
- Salt ✅

Never store the original password.

---

# Quick Revision (1 Minute)

- **PBKDF2 = Password + Salt + Iterations**
- **Built into `crypto` Module**
- **Uses `crypto.pbkdf2()`**
- **Uses Salt**
- **Uses Thousands of Iterations**
- **Store Hash + Salt**
- **Better than Simple SHA-256 for Passwords**
- **Common Digest → SHA-256 / SHA-512**

---

## ⭐ Interview Trick

### Remember:

- **SHA-256 → Fast**
- **PBKDF2 → Slow + Secure**
- **Password + Salt + Iterations = Secure Hash**

### Easy Formula

```text
Password
    +
Salt
    ↓
PBKDF2
    ↓
100000 Iterations
    ↓
Secure Hash
    ↓
Store Hash + Salt
```

> **One-Line Interview Answer:**
> **PBKDF2 is a password hashing algorithm that derives a secure hash from a password using a random salt and many iterations, making brute-force and rainbow table attacks much harder.**
