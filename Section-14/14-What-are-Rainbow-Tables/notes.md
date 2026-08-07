# What are Rainbow Tables?

A **Rainbow Table** is a **precomputed table of passwords and their hash values**.

Attackers use rainbow tables to find the **original password** from a known hash.

> **Rainbow Table = Password ↔ Hash Database**

---

# Why are Rainbow Tables Used?

Suppose a hacker steals a database containing hashed passwords.

Example:

```text id="n9kmf4"
Email                Password Hash
nishu@gmail.com      03ac674216f3e15c...
rahul@gmail.com      e99a18c428cb38d5...
```

The hacker cannot directly read the passwords.

Instead, they search the hash in a **Rainbow Table**.

If the hash exists, they get the original password.

---

# How Rainbow Tables Work

```text id="7w9a3m"
Password
     ↓
Hash Function
     ↓
Hash Value
     ↓
Stored in Rainbow Table
```

Later:

```text id="nsqjhm"
Stolen Hash
     ↓
Search Rainbow Table
     ↓
Original Password Found
```

---

# Example

Rainbow Table

| Password | Hash          |
| -------- | ------------- |
| 123456   | e10adc3949... |
| password | 5f4dcc3b5...  |
| admin    | 21232f297a... |
| qwerty   | d8578edf84... |

Database:

```text id="yn8vfh"
Hash:
5f4dcc3b5...
```

Hacker searches the Rainbow Table.

Result:

```text id="75ctj5"
password
```

---

# Problem with Simple Hashing

Suppose two users have the same password.

```text id="ljlwmn"
Password:
123456
```

Both generate the same hash.

```text id="gw3b2z"
Hash:
e10adc3949...
```

Attackers can easily find this hash in a Rainbow Table.

---

# Solution: Salt

A **Salt** is a random value added to the password before hashing.

Formula:

```text id="njlwmu"
Password + Salt
        ↓
Hash
```

Example:

```text id="z6kggr"
Password:
123456

Salt:
xY7@9P
```

Hash:

```text id="u4l3iw"
9fa8d72bc...
```

Another user with the same password gets a different salt.

```text id="wjlwmj"
Password:
123456

Salt:
A8#mQ2
```

Hash:

```text id="dljlwm"
2f91bc81d...
```

✅ Same password, different hashes.

---

# Why Salt Prevents Rainbow Table Attacks

Without Salt:

```text id="vjlwmq"
123456
    ↓
Same Hash
```

With Salt:

```text id="awjlwm"
123456 + Salt1
      ↓
Hash A

123456 + Salt2
      ↓
Hash B
```

Rainbow Tables become ineffective because every salted password has a unique hash.

---

# bcrypt and Salt

`bcrypt` automatically generates a **random salt** before hashing.

Example:

```javascript id="yjlwmw"
const hash = await bcrypt.hash(password, 10);
```

You don't need to create the salt manually.

---

# Rainbow Table vs Salt

| Rainbow Table              | Salt                             |
| -------------------------- | -------------------------------- |
| Used by attackers          | Used by developers               |
| Stores password-hash pairs | Adds random value before hashing |
| Helps crack hashes         | Prevents rainbow table attacks   |

---

# Real-Life Example

Imagine a dictionary.

### Without Salt

Every English word is already listed.

Finding a word is easy.

---

### With Salt

Every word has random characters added.

Example:

```text id="jlwmx9"
password
```

becomes

```text id="jlwmya"
password@A7#
```

Now the old dictionary is useless.

---

# Interview Questions

### 1. What is a Rainbow Table?

A Rainbow Table is a precomputed database of passwords and their hash values used to crack hashed passwords.

---

### 2. Why are Rainbow Tables dangerous?

They allow attackers to quickly match known hashes to common passwords.

---

### 3. How can Rainbow Table attacks be prevented?

By adding a **unique random salt** before hashing passwords.

---

### 4. Does bcrypt use salt?

**Yes.** bcrypt automatically generates and stores a random salt with each password hash.

---

### 5. Why is salt important?

Salt ensures that even if two users have the same password, their hashes will be different.

---

# Quick Revision (1 Minute)

- **Rainbow Table = Password + Hash Database**
- **Used to Crack Hashes**
- **Works on Unsalted Hashes**
- **Salt = Random Value**
- **Password + Salt → Hash**
- **Same Password + Different Salt = Different Hash**
- **bcrypt Automatically Adds Salt**
- **Salt Protects Against Rainbow Table Attacks**

---

## ⭐ Interview Trick

### Remember:

- **Rainbow Table → Attack**
- **Salt → Protection**
- **bcrypt → Automatic Salt**

### Easy Formula

```text id="jlwmyb"
Without Salt
Password
    ↓
Hash
    ↓
Rainbow Table Attack

With Salt
Password + Salt
       ↓
Unique Hash
       ↓
Attack Prevented
```

> **One-Line Interview Answer:**
> **A Rainbow Table is a precomputed list of passwords and their hashes used to crack unsalted password hashes. Using a unique salt (as bcrypt does automatically) makes Rainbow Table attacks ineffective.**
