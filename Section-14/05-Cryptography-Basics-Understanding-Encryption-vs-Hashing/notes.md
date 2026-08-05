# Cryptography Basics

**Cryptography** is the technique of **protecting data** from unauthorized access.

It is used to keep data **secure, private, and confidential**.

### Uses of Cryptography

- Password Security
- Online Banking
- UPI Payments
- HTTPS Websites
- Digital Signatures
- JWT Tokens

---

# Encryption

**Encryption** is the process of converting **Plain Text** into **Cipher Text** using an encryption key.

The encrypted data can be converted back to the original data using a **Decryption Key**.

### Formula

```text
Plain Text
     ↓
Encryption + Key
     ↓
Cipher Text
     ↓
Decryption + Key
     ↓
Original Data
```

### Example

```text
Original:
Hello Nishu

Encrypted:
A7xP9#LmQ@
```

After decryption:

```text
Hello Nishu
```

---

## Uses of Encryption

- HTTPS Communication
- Credit/Debit Card Data
- Banking Transactions
- Sensitive Files
- API Data Transfer

---

## Key Point

✅ Encryption is **Reversible**.

You can get the original data back using the correct key.

---

# Hashing

**Hashing** is the process of converting data into a **fixed-length hash value**.

Hashing is **One-Way**, which means the original data **cannot be recovered** from the hash.

### Formula

```text
Password
     ↓
Hash Function
     ↓
Hash Value
```

### Example

```text
Password:
Nishu@123

Hash:
$2b$10$Qw8xKJ3Lp...
```

The hash cannot be converted back to the original password.

---

## Uses of Hashing

- Password Storage
- Data Integrity Check
- Digital Signatures
- Blockchain

---

## Key Point

✅ Hashing is **Irreversible (One-Way)**.

---

# Encryption vs Hashing

| Encryption                     | Hashing                           |
| ------------------------------ | --------------------------------- |
| Reversible                     | Irreversible                      |
| Uses Encryption Key            | No Decryption Key                 |
| Original data can be recovered | Original data cannot be recovered |
| Used for secure communication  | Used for password storage         |
| Two-way process                | One-way process                   |

---

# Real-Life Example

### Encryption 🔒

Imagine you lock a box with a key.

- Lock → Encryption
- Unlock with key → Decryption

You can open the box again.

---

### Hashing 🔑

Imagine putting a paper into a paper shredder.

Once shredded, you cannot get the original paper back.

That is hashing.

---

# In Node.js

### Encryption

Used when data needs to be read again.

Examples:

- Secure files
- Payment information
- Private messages

---

### Hashing

Used for passwords.

Example:

```text
User Password
      ↓
bcrypt.hash()
      ↓
Store Hash in Database
```

During login:

```text
Entered Password
       ↓
bcrypt.compare()
       ↓
Match?
       ↓
Login Success
```

---

# Why Hash Passwords?

❌ Never store passwords like this:

```text
Email                Password
nishu@gmail.com      123456
```

✅ Store them like this:

```text
Email                Password
nishu@gmail.com      $2b$10$Qw8xKJ3Lp...
```

Even if the database is leaked, attackers cannot directly see users' passwords.

---

# Interview Questions

### 1. What is Cryptography?

Cryptography is the practice of protecting data using techniques like encryption and hashing.

---

### 2. What is Encryption?

Encryption converts plain text into cipher text and can be reversed using the correct key.

---

### 3. What is Hashing?

Hashing converts data into a fixed-length hash value and cannot be reversed.

---

### 4. Which is used for password storage?

**Hashing** (commonly using **bcrypt** or **Argon2**).

---

### 5. What is the main difference between Encryption and Hashing?

Encryption is **reversible**, while hashing is **one-way (irreversible)**.

---

# Quick Revision (1 Minute)

- **Cryptography** → Protects data
- **Encryption** → Reversible
- **Hashing** → Irreversible
- **Encryption** → Uses a key
- **Hashing** → Fixed-length hash
- **Encryption** → Secure data transfer
- **Hashing** → Password storage
- **bcrypt** → Password hashing
- **bcrypt.compare()** → Verifies passwords

---

## ⭐ Interview Trick

**Encryption = Lock & Unlock 🔐**

**Hashing = Paper Shredder 🗑️**

### Easy Formula

> **Need original data later? → Encryption**
> **Need to store passwords securely? → Hashing**
