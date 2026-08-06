# Understanding Digital Signatures

A **Digital Signature** is a cryptographic technique used to **verify the authenticity and integrity of data**.

It proves:

- ✅ Who sent the data (**Authentication**)
- ✅ The data was not changed (**Integrity**)
- ✅ The sender cannot deny sending it (**Non-Repudiation**)

> **Digital Signature = Authentication + Integrity + Non-Repudiation**

---

# Why Do We Need Digital Signatures?

Suppose Alice sends a file to Bob.

Without a digital signature:

- ❌ Anyone can modify the file.
- ❌ Bob cannot be sure who sent it.

With a digital signature:

- ✅ Bob knows the file is from Alice.
- ✅ Bob knows the file was not modified.

---

# How Digital Signatures Work

### Step 1: Create Hash

The sender creates a hash of the original data.

```text
Original File
      ↓
Hash Function
      ↓
Hash Value
```

---

### Step 2: Sign the Hash

The sender encrypts the hash using their **Private Key**.

```text
Hash
   ↓
Private Key
   ↓
Digital Signature
```

---

### Step 3: Send Data

The sender sends:

- Original Data
- Digital Signature

```text
Original File + Digital Signature
          ↓
        Receiver
```

---

### Step 4: Verify

The receiver:

- Creates a new hash from the received file.
- Uses the sender's **Public Key** to verify the digital signature.
- Compares both hashes.

```text
Received File
      ↓
Hash Function
      ↓
Hash 1

Digital Signature
      ↓
Public Key
      ↓
Hash 2

Hash 1 = Hash 2
      ↓
Valid Signature ✅
```

If both hashes match, the data is authentic and unchanged.

---

# Simple Flow

```text
Sender
   │
   ├── Create Hash
   ├── Sign Hash with Private Key
   │
   ▼
Send File + Signature
   │
   ▼
Receiver
   │
   ├── Create New Hash
   ├── Verify Signature using Public Key
   │
   ▼
Hashes Match?
   │
 ├── Yes → Valid
 └── No → Data Modified
```

---

# Public Key & Private Key

| Private Key              | Public Key               |
| ------------------------ | ------------------------ |
| Secret                   | Shared with everyone     |
| Used to create signature | Used to verify signature |
| Kept safe by owner       | Anyone can use it        |

---

# Real-Life Example

Imagine you sign a document with your personal signature.

- Your signature proves the document belongs to you.
- If someone changes the document after signing, the signature is no longer valid.

A **Digital Signature** works the same way, but uses cryptography instead of a handwritten signature.

---

# Where Are Digital Signatures Used?

- HTTPS (SSL/TLS Certificates)
- Software Downloads
- Git Commit Signing
- PDF Documents
- Banking Transactions
- Government Documents
- Email Security

---

# Digital Signature vs Hashing

| Hashing                  | Digital Signature                 |
| ------------------------ | --------------------------------- |
| Creates a hash           | Uses a hash + private/public keys |
| Checks data integrity    | Checks integrity + authenticity   |
| No identity verification | Verifies sender's identity        |

---

# Digital Signature vs Encryption

| Digital Signature        | Encryption                               |
| ------------------------ | ---------------------------------------- |
| Verifies sender          | Protects data privacy                    |
| Uses Private Key to sign | Uses Public Key to encrypt (common case) |
| Verifies with Public Key | Decrypts with Private Key                |

---

# Interview Questions

### 1. What is a Digital Signature?

A Digital Signature is a cryptographic technique used to verify the authenticity and integrity of data.

---

### 2. Why are Digital Signatures used?

To verify the sender's identity, ensure the data has not been modified, and provide non-repudiation.

---

### 3. Which keys are used?

- **Private Key** → Create the signature
- **Public Key** → Verify the signature

---

### 4. Does a Digital Signature encrypt the entire file?

**No.** It signs the **hash** of the file, not the complete file.

---

### 5. What happens if the file is modified?

The newly generated hash will not match the verified hash, so the signature becomes invalid.

---

# Quick Revision (1 Minute)

- **Digital Signature** → Verifies sender & data
- **Uses Hash + Public/Private Keys**
- **Private Key** → Sign
- **Public Key** → Verify
- **Checks Integrity**
- **Checks Authentication**
- **Provides Non-Repudiation**
- **If Data Changes → Signature Invalid**

---

## ⭐ Interview Trick

### Remember:

- **Hash → Detects Changes**
- **Private Key → Sign**
- **Public Key → Verify**

### Easy Formula

```text
Data
   ↓
Hash
   ↓
Sign with Private Key
   ↓
Digital Signature
   ↓
Verify with Public Key
   ↓
Valid / Invalid
```

### One-Line Interview Answer

> **A Digital Signature uses a hash and asymmetric cryptography to verify the sender's identity and ensure that the data has not been altered.**
