# Hashing Passwords Before Saving to the Database

When a user registers, we should **never store the password in plain text**.

Instead, we **hash the password** before saving it to the database.

> **Password → Hash → Store in Database**

---

# Why Hash Passwords?

If the database is hacked, plain text passwords can be stolen.

❌ Wrong

```text
Email                 Password
nishu@gmail.com       Nishu@123
rahul@gmail.com       rahul123
```

Anyone can read these passwords.

---

✅ Correct

```text
Email                 Password
nishu@gmail.com       $2b$10$AbCDeFgHiJ...
rahul@gmail.com       $2b$10$XyZaBcDeFg...
```

Even if the database is leaked, the original passwords are not directly visible.

---

# Why Use bcrypt?

`bcrypt` is a library specially designed for **password hashing**.

It provides:

- Password Hashing
- Automatic Salt Generation
- Secure Password Verification

---

# Install bcrypt

```bash
npm install bcrypt
```

---

# Import bcrypt

### ES Module

```javascript
import bcrypt from "bcrypt";
```

### CommonJS

```javascript
const bcrypt = require("bcrypt");
```

---

# Hashing a Password

### Syntax

```javascript
bcrypt.hash(password, saltRounds);
```

### Example

```javascript
import bcrypt from "bcrypt";

const password = "Nishu@123";

const hashedPassword = await bcrypt.hash(password, 10);

console.log(hashedPassword);
```

---

# What is Salt Rounds?

**Salt Rounds** (Cost Factor) determine how many times bcrypt processes the password.

```javascript
bcrypt.hash(password, 10);
```

Here:

- `10` = Salt Rounds

Higher rounds:

- ✅ More Secure
- ❌ Slower

---

# Registration Flow

```text
User Enters Password
        ↓
bcrypt.hash()
        ↓
Hash Generated
        ↓
Store Hash in Database
```

---

# Login Flow

During login, the entered password is **not compared directly**.

Instead, use `bcrypt.compare()`.

```text
User Enters Password
        ↓
bcrypt.compare()
        ↓
Compare with Stored Hash
        ↓
Login Success / Failed
```

---

# Example

### Registration

```javascript
const password = "Nishu@123";

const hashedPassword = await bcrypt.hash(password, 10);

// Save hashedPassword to Database
```

---

### Login

```javascript
const isMatch = await bcrypt.compare("Nishu@123", hashedPassword);

console.log(isMatch);
```

Output

```text
true
```

---

# Why Can't We Compare Passwords Directly?

Stored value:

```text
$2b$10$AbCdEfGhIj...
```

Entered Password:

```text
Nishu@123
```

❌ They are different.

`bcrypt.compare()` hashes the entered password and safely checks whether it matches the stored hash.

---

# Hashing Flow

```text
Password
    ↓
bcrypt.hash()
    ↓
Hashed Password
    ↓
Database
```

---

# Login Verification Flow

```text
Entered Password
       ↓
bcrypt.compare()
       ↓
Stored Hash
       ↓
Match?
       ↓
Success / Failed
```

---

# bcrypt vs crypto

| bcrypt             | crypto                          |
| ------------------ | ------------------------------- |
| Password Hashing   | General Hashing                 |
| Automatic Salt     | No automatic salt for passwords |
| Slow & Secure      | Fast                            |
| Best for Passwords | Best for Files & Data           |

---

# Best Practices

✅ Never store plain text passwords.

✅ Always hash passwords before saving.

✅ Use `bcrypt.compare()` for login.

✅ Use a suitable salt rounds value (commonly **10–12**, depending on your application's security and performance needs).

---

# Interview Questions

### 1. Why do we hash passwords?

To securely store passwords so that the original password is not saved in the database.

---

### 2. Which library is commonly used for password hashing in Node.js?

**bcrypt**

---

### 3. Which method hashes a password?

```javascript
bcrypt.hash();
```

---

### 4. Which method verifies a password?

```javascript
bcrypt.compare();
```

---

### 5. What are Salt Rounds?

Salt rounds (cost factor) determine how much work bcrypt performs to hash a password. Higher values increase security but also increase hashing time.

---

# Quick Revision (1 Minute)

- **Never Store Plain Password**
- **Use bcrypt**
- **`bcrypt.hash()` → Hash Password**
- **`bcrypt.compare()` → Verify Password**
- **Salt Rounds → Security Level**
- **Store Hash, Not Password**
- **bcrypt = Best for Passwords**

---

## ⭐ Interview Trick

### Remember:

- **Register → `hash()`**
- **Login → `compare()`**
- **Database → Store Hash Only**

### Easy Formula

```text
Registration
Password
    ↓
bcrypt.hash()
    ↓
Database

Login
Password
    ↓
bcrypt.compare()
    ↓
Login Success
```

> **One-Line Interview Answer:**
> **Before saving a user's password, we hash it using `bcrypt.hash()` and store only the hash in the database. During login, we use `bcrypt.compare()` to verify the entered password against the stored hash.**
