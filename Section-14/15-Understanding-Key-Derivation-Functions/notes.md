# Understanding Key Derivation Functions (KDF)

A **Key Derivation Function (KDF)** is a cryptographic algorithm that converts a **password** into a **strong, secure cryptographic key**.

> **KDF = Password → Secure Key**

---

# Why Do We Need KDF?

User passwords are usually:

- Short
- Easy to guess
- Not random

Example:

```text
123456
password
Nishu@123
```

These are **not secure enough** to be used directly as encryption keys.

A KDF makes them much stronger.

---

# How KDF Works

```text
Password
    ↓
Salt
    ↓
Key Derivation Function (KDF)
    ↓
Secure Key
```

---

# Example

Password:

```text
Nishu@123
```

Salt:

```text
xY8@2P
```

KDF Output:

```text
8f7a92bc4d9e...
```

This generated key can be used for encryption or authentication.

---

# Why Use KDF?

- Generate strong encryption keys
- Protect passwords
- Prevent brute-force attacks
- Prevent rainbow table attacks (using salt)

---

# Features of KDF

### 1. Uses Password

Starts with a user password.

---

### 2. Uses Salt

Adds a random salt before generating the key.

```text
Password + Salt
        ↓
Secure Key
```

---

### 3. Slow Computation

KDFs are intentionally slow.

This makes password guessing much harder.

---

### 4. Generates Strong Keys

Converts weak passwords into secure cryptographic keys.

---

# Popular KDF Algorithms

| Algorithm | Used For                          |
| --------- | --------------------------------- |
| bcrypt    | Password Hashing                  |
| scrypt    | Password Hashing & Key Derivation |
| Argon2    | Modern Password Hashing           |
| PBKDF2    | Key Derivation & Password Hashing |

---

# KDF vs Hash Function

| Hash Function           | KDF                                |
| ----------------------- | ---------------------------------- |
| Fast                    | Intentionally Slow                 |
| General-purpose hashing | Password security & key generation |
| No work factor          | Uses iterations/work factor        |
| Easier to brute-force   | Harder to brute-force              |

---

# KDF vs Encryption

| KDF                    | Encryption          |
| ---------------------- | ------------------- |
| Generates a secure key | Protects data       |
| Input: Password        | Input: Plain Text   |
| Output: Secure Key     | Output: Cipher Text |

---

# Real-Life Example

Imagine making a house key.

- **Password** → Raw metal
- **KDF** → Machine that cuts the metal
- **Secure Key** → Finished house key

The raw metal cannot open the door, but the finished key can.

---

# KDF in Node.js

Node.js provides **PBKDF2** through the built-in `crypto` module.

Example:

```javascript
import crypto from "crypto";

crypto.pbkdf2(
  "password",
  "randomSalt",
  100000,
  32,
  "sha256",
  (err, derivedKey) => {
    console.log(derivedKey.toString("hex"));
  },
);
```

### Parameters

- `"password"` → User password
- `"randomSalt"` → Random salt
- `100000` → Number of iterations
- `32` → Key length (32 bytes)
- `"sha256"` → Hash algorithm

---

# Where are KDFs Used?

- Password Hashing
- File Encryption
- Disk Encryption
- Password Managers
- Secure Key Generation

---

# Interview Questions

### 1. What is a Key Derivation Function (KDF)?

A KDF is a cryptographic algorithm that derives a strong, secure key from a password.

---

### 2. Why do we use KDF?

To generate secure keys and make password attacks like brute-force and rainbow table attacks more difficult.

---

### 3. Which KDF algorithms are commonly used?

- bcrypt
- scrypt
- Argon2
- PBKDF2

---

### 4. Which KDF is available in Node.js?

**PBKDF2** using the `crypto` module.

---

### 5. Why are KDFs intentionally slow?

To make brute-force attacks much slower and more expensive.

---

# Quick Revision (1 Minute)

- **KDF = Password → Secure Key**
- **Uses Salt**
- **Intentionally Slow**
- **Generates Strong Keys**
- **Prevents Brute-Force Attacks**
- **Protects Against Rainbow Table Attacks**
- **Node.js → `crypto.pbkdf2()`**
- **Popular KDFs → bcrypt, scrypt, Argon2, PBKDF2**

---

## ⭐ Interview Trick

### Remember:

- **Hash Function → Fast**
- **KDF → Slow**
- **Password + Salt → Secure Key**

### Easy Formula

```text
Password
    +
Salt
    ↓
KDF
    ↓
Secure Key
```

> **One-Line Interview Answer:**
> **A Key Derivation Function (KDF) is a cryptographic algorithm that converts a password into a strong cryptographic key using a salt and many iterations, making password attacks significantly more difficult.**
