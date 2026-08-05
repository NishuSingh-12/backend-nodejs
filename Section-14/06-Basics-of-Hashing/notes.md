# Basics of Hashing

**Hashing** is the process of converting data into a **fixed-length hash value** using a **Hash Function**.

The original data **cannot be recovered** from the hash.

> **Hashing is a One-Way Process.**

---

# What is a Hash Function?

A **Hash Function** is an algorithm that converts input data into a unique fixed-length output called a **Hash** or **Digest**.

### Formula

```text
Input Data
     ↓
Hash Function
     ↓
Hash Value (Digest)
```

---

# Example

Input:

```text
Password = Nishu@123
```

Hash:

```text
$2b$10$wX8mN2pL...
```

The original password **cannot be obtained** from the hash.

---

# How Hashing Works

```text
Password
    ↓
Hash Function
    ↓
Hash Generated
    ↓
Store Hash in Database
```

When the user logs in:

```text
Entered Password
      ↓
Hash Again
      ↓
Compare with Stored Hash
      ↓
Match?
      ↓
Login Success
```

---

# Properties of a Good Hash Function

### 1. Deterministic

The same input always produces the same hash.

Example:

```text
Hello → ABC123
Hello → ABC123
```

---

### 2. One-Way

You cannot convert the hash back to the original data.

```text
Password
   ↓
Hash
```

❌ Cannot reverse it.

---

### 3. Fixed-Length Output

No matter how big or small the input is, the hash length remains fixed.

Example:

```text
Hi
↓
A8F2...

Hello World
↓
C9X5...
```

Both outputs have the same length (depending on the algorithm).

---

### 4. Fast

Hash functions generate hashes quickly, making login verification efficient.

---

### 5. Avalanche Effect

A tiny change in the input creates a completely different hash.

Example:

```text
Hello
↓
A1B2C3
```

```text
hello
↓
X9Y8Z7
```

Only one letter changed, but the hash changed completely.

---

# Why Hash Passwords?

Passwords should **never** be stored in plain text.

❌ Wrong

```text
Email              Password
nishu@gmail.com    123456
```

✅ Correct

```text
Email              Password
nishu@gmail.com    $2b$10$kL8...
```

If the database is leaked, attackers cannot directly read users' passwords.

---

# Hashing in Node.js

The **bcrypt** library is commonly used for password hashing.

### Registration

```text
Password
    ↓
bcrypt.hash()
    ↓
Store Hash in Database
```

### Login

```text
Entered Password
      ↓
bcrypt.compare()
      ↓
Compare with Stored Hash
      ↓
Login Success / Failed
```

---

# Common Hashing Algorithms

| Algorithm | Used For                   | Recommended?                |
| --------- | -------------------------- | --------------------------- |
| MD5       | File checksum              | ❌ No (insecure)            |
| SHA-1     | Data integrity             | ❌ No (broken for security) |
| SHA-256   | Data integrity, blockchain | ✅ Yes                      |
| bcrypt    | Password hashing           | ✅ Best for passwords       |
| Argon2    | Password hashing           | ✅ Modern & recommended     |
| scrypt    | Password hashing           | ✅ Good                     |

> **For password storage, use `bcrypt`, `Argon2`, or `scrypt` instead of MD5 or SHA-1.**

---

# Real-Life Example

Imagine a **paper shredder**.

- Put a paper in.
- It becomes tiny pieces.
- You cannot reconstruct the original paper.

This is similar to **hashing**.

---

# Interview Questions

### 1. What is Hashing?

Hashing is the process of converting data into a fixed-length hash value using a hash function. It is a one-way process.

---

### 2. Why is hashing used for passwords?

To securely store passwords so the original password is not saved in the database.

---

### 3. Can a hash be reversed?

No. Hashing is one-way and cannot be reversed.

---

### 4. What is the difference between hashing and encryption?

- **Hashing:** One-way, cannot recover original data.
- **Encryption:** Two-way, original data can be recovered using a key.

---

### 5. Which library is commonly used for password hashing in Node.js?

**bcrypt** (also Argon2 is a popular modern choice).

---

# Quick Revision (1 Minute)

- **Hashing = One-Way Process**
- **Uses Hash Function**
- **Produces Fixed-Length Output**
- **Cannot Recover Original Data**
- **Same Input → Same Hash**
- **Small Input Change → Completely Different Hash**
- **Used for Password Storage**
- **bcrypt.hash() → Create Hash**
- **bcrypt.compare() → Verify Password**

---

## ⭐ Interview Trick

### Remember:

- **Hashing = Password Security**
- **One-Way = Cannot Reverse**
- **bcrypt = Password Hashing**
- **compare() = Login Verification**

### Easy Formula

> **Password → Hash → Store**
> **Login → Hash Again → Compare → Access**
