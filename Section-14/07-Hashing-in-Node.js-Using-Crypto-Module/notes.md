# Hashing in Node.js Using Crypto Module

The **`crypto`** module is a built-in Node.js module used for **hashing, encryption, decryption, and generating random values**.

For hashing, it provides the **`createHash()`** method.

> **Note:** The `crypto` module is suitable for general-purpose hashing (e.g., file integrity, checksums). **For password hashing, use `bcrypt` or `Argon2` instead**, because they are designed to resist brute-force attacks.

---

# Import Crypto Module

```javascript
import crypto from "crypto";
```

or

```javascript
const crypto = require("crypto");
```

---

# createHash() Method

Used to create a hash object.

### Syntax

```javascript
crypto.createHash("algorithm");
```

Example algorithms:

- sha256
- sha512
- md5 (Not Recommended)
- sha1 (Not Recommended)

---

# Example

```javascript
import crypto from "crypto";

const hash = crypto.createHash("sha256").update("Hello World").digest("hex");

console.log(hash);
```

### Output

```text
a591a6d40bf420404...
```

---

# How It Works

```text
Input Data
     ↓
createHash()
     ↓
update()
     ↓
digest()
     ↓
Hash Value
```

---

# update() Method

Adds the data that you want to hash.

### Syntax

```javascript
hash.update(data);
```

Example:

```javascript
hash.update("Nishu");
```

---

# digest() Method

Generates the final hash.

### Syntax

```javascript
hash.digest("hex");
```

Common formats:

- hex ✅
- base64

---

# Complete Example

```javascript
import crypto from "crypto";

const password = "Nishu@123";

const hashedPassword = crypto
  .createHash("sha256")
  .update(password)
  .digest("hex");

console.log(hashedPassword);
```

---

# Same Input → Same Hash

```javascript
crypto.createHash("sha256").update("Hello").digest("hex");
```

Output:

```text
185f8db32271fe25...
```

Again:

```javascript
crypto.createHash("sha256").update("Hello").digest("hex");
```

Output:

```text
185f8db32271fe25...
```

✅ Same input always produces the same hash.

---

# Different Input → Different Hash

```text
Hello
↓
185f8db3...
```

```text
hello
↓
2cf24dba...
```

Even a small change in the input creates a completely different hash.

---

# Common Hash Algorithms

| Algorithm | Recommended? |
| --------- | ------------ |
| SHA-256   | ✅ Yes       |
| SHA-512   | ✅ Yes       |
| MD5       | ❌ No        |
| SHA-1     | ❌ No        |

---

# When to Use Crypto Hashing?

Use `crypto.createHash()` for:

- File Integrity Check
- Data Verification
- Checksums
- Digital Signatures (as part of the process)
- Generating fingerprints of data

---

# When NOT to Use It?

❌ Do **not** use `crypto.createHash()` directly for storing passwords.

Instead use:

- ✅ bcrypt
- ✅ Argon2
- ✅ scrypt

Reason:

These algorithms are intentionally slow and include features like salts, making passwords much harder to crack.

---

# crypto vs bcrypt

| crypto                          | bcrypt                        |
| ------------------------------- | ----------------------------- |
| General-purpose hashing         | Password hashing              |
| Fast                            | Intentionally slow            |
| No built-in password protection | Includes salt and cost factor |
| Used for files/data             | Used for passwords            |

---

# Interview Questions

### 1. What is the crypto module?

The `crypto` module is a built-in Node.js module used for hashing, encryption, decryption, and generating random values.

---

### 2. Which method is used for hashing?

**`crypto.createHash()`**

---

### 3. What does `update()` do?

It adds the input data that needs to be hashed.

---

### 4. What does `digest("hex")` do?

It generates the final hash in hexadecimal format.

---

### 5. Can we use `crypto.createHash()` for passwords?

Technically yes, but **it is not recommended**. Use **bcrypt**, **Argon2**, or **scrypt** for password hashing.

---

# Quick Revision (1 Minute)

- **crypto** → Built-in Node.js module
- **createHash()** → Creates hash object
- **update()** → Adds input data
- **digest("hex")** → Generates hash
- **SHA-256** → Recommended algorithm
- **Same Input → Same Hash**
- **Different Input → Different Hash**
- **Use crypto** → File/Data hashing
- **Use bcrypt/Argon2** → Password hashing

---

## ⭐ Interview Trick

### Remember the Formula

```text
createHash()
      ↓
update(data)
      ↓
digest("hex")
      ↓
Hash Generated
```

### Easy Formula

> **Files & Data → crypto**
> **Passwords → bcrypt / Argon2**
