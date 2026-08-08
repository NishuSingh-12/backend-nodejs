# Using bcrypt to Hash Passwords

**bcrypt** is commonly used in Node.js to **hash passwords before storing them in the database**.

> **Never store the user's original password in the database.**

### Basic Flow

```text
User Password
      ↓
bcrypt.hash()
      ↓
Password Hash
      ↓
Database
```

---

# 1. Install bcrypt

```bash
npm install bcrypt
```

---

# 2. Import bcrypt

```javascript
import bcrypt from "bcrypt";
```

---

# 3. Hash a Password

```javascript
const password = "Nishu@123";

const hashedPassword = await bcrypt.hash(password, 10);

console.log(hashedPassword);
```

Example output:

```text
$2b$10$N7xK8h3....
```

Here `10` is the **cost factor**.

---

# 4. Save the Hash in Database

Suppose registration data is:

```javascript
const { name, email, password } = req.body;
```

Hash the password before creating the user:

```javascript
const hashedPassword = await bcrypt.hash(password, 10);

const user = await User.create({
  name,
  email,
  password: hashedPassword,
});
```

Database will contain:

```text
name: Nishu
email: nishu@gmail.com
password: $2b$10$N7xK8h3....
```

✅ Original password is not stored.

---

# 5. Verify Password During Login

When the user logs in, get the stored hash from the database.

```javascript
const isMatch = await bcrypt.compare(password, user.password);
```

If the password is correct:

```javascript
if (isMatch) {
  // Login successful
}
```

Otherwise:

```javascript
if (!isMatch) {
  // Invalid password
}
```

---

# Complete Registration Example

```javascript
import bcrypt from "bcrypt";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "User registered successfully",
  });
};
```

---

# Complete Login Example

```javascript
import bcrypt from "bcrypt";

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      error: "Invalid email or password",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      error: "Invalid email or password",
    });
  }

  res.json({
    message: "Login successful",
  });
};
```

---

# Why `compare()` Instead of Decrypting?

bcrypt hashes are **not decrypted**.

Wrong approach:

```text
Hash → Decrypt → Password ❌
```

Correct approach:

```text
Entered Password
       ↓
bcrypt.compare()
       ↓
Stored Hash
       ↓
true / false
```

---

# Why Does bcrypt Produce Different Hashes?

If you hash the same password multiple times:

```javascript
await bcrypt.hash("Nishu@123", 10);
```

you can get different hashes because bcrypt uses a **random salt**.

```text
Nishu@123
    ↓
Hash 1 → $2b$10$abc...
Hash 2 → $2b$10$xyz...
```

✅ This is expected.

`bcrypt.compare()` knows how to handle the salt stored within the bcrypt hash.

---

# `hash()` vs `compare()`

| Method             | Purpose              |
| ------------------ | -------------------- |
| `bcrypt.hash()`    | Create password hash |
| `bcrypt.compare()` | Verify password      |
| `hash()`           | Registration         |
| `compare()`        | Login                |

---

# Important Security Rules

### ❌ Never do this

```javascript
password: password;
```

### ✅ Do this

```javascript
const hashedPassword = await bcrypt.hash(password, 10);
```

Then:

```javascript
password: hashedPassword;
```

---

# Interview Questions

### 1. How do you hash a password using bcrypt?

```javascript
const hash = await bcrypt.hash(password, 10);
```

---

### 2. How do you verify a bcrypt password?

```javascript
const isMatch = await bcrypt.compare(password, hash);
```

---

### 3. Why do bcrypt hashes differ for the same password?

Because bcrypt generates a **random salt** for each hash.

---

### 4. Can we decrypt a bcrypt hash?

**No.** bcrypt is a one-way password hashing algorithm.

---

### 5. What should we store in the database?

**Only the password hash, never the original password.**

---

# Quick Revision

- `npm install bcrypt`
- `bcrypt.hash()` → **Hash password**
- `bcrypt.compare()` → **Verify password**
- `10` → **Cost factor**
- bcrypt uses **salt**
- Same password → **Different hashes**
- No decryption
- Store **hash only**
- Registration → `hash()`
- Login → `compare()`

## ⭐ Easy Formula

```text
REGISTER
Password
   ↓
bcrypt.hash()
   ↓
Hash
   ↓
Database


LOGIN
Password
   ↓
bcrypt.compare()
   ↓
Stored Hash
   ↓
true / false
```

> **Interview Answer:**
> **During registration, I hash the user's password using `bcrypt.hash()` and store only the hash in the database. During login, I use `bcrypt.compare()` to verify the entered password against the stored hash.**
