# Understanding bcrypt

**bcrypt** is a password-hashing algorithm/library used to **securely store user passwords**.

It is specifically designed for password security and is intentionally **slow**, which makes brute-force attacks harder.

> **bcrypt = Password + Salt + Cost Factor → Secure Hash**

---

# Why Use bcrypt?

We should never store passwords directly in the database.

❌ **Plain Text Password**

```text
Email              Password
nishu@gmail.com    Nishu@123
```

Instead:

```text
Email              Password Hash
nishu@gmail.com    $2b$10$N7x...
```

If the database is leaked, the actual password is not directly exposed.

---

# How bcrypt Works

```text
Password
    ↓
Generate Salt
    ↓
bcrypt + Cost Factor
    ↓
Password Hash
    ↓
Store Hash in Database
```

bcrypt automatically handles the salt and includes the necessary information in the resulting hash.

---

# Installing bcrypt

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

```javascript
const password = "Nishu@123";

const hash = await bcrypt.hash(password, 10);

console.log(hash);
```

Example output:

```text
$2b$10$N7xK8h....
```

Here:

- `$2b$` → bcrypt version identifier
- `10` → cost factor
- Remaining part → salt + derived hash

---

# What is Salt?

A **salt** is a random value added as part of the password-hashing process.

It ensures that the same password does not produce the same stored hash every time.

Example:

```text
Password: Nishu@123

Hash 1 → $2b$10$abc...
Hash 2 → $2b$10$xyz...
```

Both can be different even though the password is the same.

✅ This helps protect against **rainbow table attacks**.

---

# What is Cost Factor?

The second argument in:

```javascript
bcrypt.hash(password, 10);
```

is the **cost factor**.

```text
10 → Cost Factor
```

A higher cost means more computation and therefore a slower hash.

```text
Cost ↑
   ↓
Security ↑
   ↓
Time/CPU Usage ↑
```

The cost should be chosen based on your application's performance and security requirements.

---

# Verifying a Password

When the user logs in, we don't decrypt the stored hash.

Instead, use:

```javascript
bcrypt.compare();
```

Example:

```javascript
const isMatch = await bcrypt.compare("Nishu@123", storedHash);

console.log(isMatch);
```

Output:

```text
true
```

If the password is wrong:

```text
false
```

---

# Registration Flow

```text
User enters password
        ↓
bcrypt.hash()
        ↓
Password Hash
        ↓
Save Hash in Database
```

---

# Login Flow

```text
User enters password
        ↓
bcrypt.compare()
        ↓
Stored Hash
        ↓
Match?
   ↓         ↓
 true      false
   ↓         ↓
 Login     Reject
```

---

# Important: bcrypt Does NOT Decrypt

A common mistake is thinking:

```text
Password → bcrypt → Hash
Hash → bcrypt → Password
```

❌ This is wrong.

bcrypt is a **one-way password hashing mechanism**.

You don't decrypt a bcrypt hash.

Instead:

```text
Entered Password
       ↓
bcrypt.compare()
       ↓
Stored Hash
       ↓
Match / No Match
```

---

# bcrypt vs Encryption

| bcrypt                  | Encryption                      |
| ----------------------- | ------------------------------- |
| One-way                 | Two-way                         |
| Used for passwords      | Used for data                   |
| Cannot decrypt hash     | Can decrypt ciphertext          |
| Uses salt + cost factor | Uses encryption/decryption keys |

---

# bcrypt vs SHA-256

| bcrypt                 | SHA-256                                     |
| ---------------------- | ------------------------------------------- |
| Designed for passwords | General-purpose hash                        |
| Intentionally slow     | Very fast                                   |
| Uses salt              | No built-in password salt handling          |
| Has cost factor        | No password cost factor                     |
| Better for passwords   | Not recommended for direct password storage |

---

# Important Methods

### `bcrypt.hash()`

Used to create a password hash.

```javascript
bcrypt.hash(password, 10);
```

### `bcrypt.compare()`

Used to verify a password.

```javascript
bcrypt.compare(password, hash);
```

---

# Interview Questions

### 1. What is bcrypt?

**bcrypt is a password-hashing algorithm used to securely store passwords.**

### 2. Why is bcrypt better than SHA-256 for passwords?

bcrypt is intentionally slow and uses a salt and cost factor, making brute-force attacks more difficult.

### 3. Does bcrypt encrypt passwords?

**No.** bcrypt hashes passwords; it does not encrypt them.

### 4. How do you hash a password using bcrypt?

```javascript
const hash = await bcrypt.hash(password, 10);
```

### 5. How do you verify a password?

```javascript
const result = await bcrypt.compare(password, hash);
```

### 6. What is the cost factor?

It controls how computationally expensive bcrypt's hashing operation is. A higher cost increases both security and processing time.

---

# Quick Revision

- **bcrypt → Password Hashing**
- **One-way → No decryption**
- **Uses Salt**
- **Uses Cost Factor**
- **Intentionally Slow**
- **`bcrypt.hash()` → Create Hash**
- **`bcrypt.compare()` → Verify Password**
- **Store Hash, NOT Password**
- **Used to protect against brute-force attacks**

---

## ⭐ Interview Trick

Remember just this:

```text
Register
Password → bcrypt.hash() → Database

Login
Password → bcrypt.compare() → Stored Hash
```

> **One-line interview answer:**
> **bcrypt is a slow, salted password-hashing algorithm designed to make password cracking more difficult.**
