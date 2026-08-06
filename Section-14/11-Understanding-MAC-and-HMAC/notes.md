# Understanding MAC and HMAC

**MAC (Message Authentication Code)** and **HMAC (Hash-based Message Authentication Code)** are techniques used to **verify the integrity and authenticity of a message**.

They help answer two questions:

- ✅ Was the message changed?
- ✅ Did it come from the expected sender?

> **MAC/HMAC do NOT encrypt the data.**

---

# What is MAC?

**MAC (Message Authentication Code)** is a security code generated using:

- Secret Key
- Message

Only the sender and receiver know the secret key.

### Formula

```text
Message + Secret Key
          ↓
        MAC
```

---

# How MAC Works

```text
Sender
   │
   ├── Message + Secret Key
   │
   ▼
Generate MAC
   │
   ▼
Send Message + MAC
   │
   ▼
Receiver
   │
   ├── Generate New MAC
   ├── Compare Both MACs
   │
   ▼
Valid / Invalid
```

If both MAC values match, the message is authentic and unchanged.

---

# Example

Message:

```text
Transfer ₹1000
```

Secret Key:

```text
mySecretKey
```

Generated MAC:

```text
A8F5D9X2...
```

Receiver generates a new MAC using the same secret key.

If both MACs match → ✅ Message is valid.

---

# What is HMAC?

**HMAC (Hash-based Message Authentication Code)** is a type of MAC that uses a **cryptographic hash function** (like SHA-256) along with a **secret key**.

> **HMAC = Hash Function + Secret Key**

---

# Formula

```text
Message + Secret Key
          ↓
     HMAC Algorithm
          ↓
      HMAC Value
```

---

# How HMAC Works

```text
Message
    │
    ├── Secret Key
    │
    ▼
HMAC-SHA256
    │
    ▼
HMAC Generated
```

---

# HMAC in Node.js

```javascript
import crypto from "crypto";

const hmac = crypto
  .createHmac("sha256", "mySecretKey")
  .update("Hello World")
  .digest("hex");

console.log(hmac);
```

### Output

```text
9f86d081884c7d65...
```

---

# MAC vs HMAC

| MAC                          | HMAC                                          |
| ---------------------------- | --------------------------------------------- |
| General concept              | Specific implementation of MAC                |
| Can use different algorithms | Uses a hash function (SHA-256, SHA-512, etc.) |
| Uses Secret Key              | Uses Secret Key + Hash Function               |
| Verifies integrity           | Verifies integrity and authenticity           |

---

# HMAC vs Hashing

| Hashing                  | HMAC                                                      |
| ------------------------ | --------------------------------------------------------- |
| Uses only data           | Uses data + secret key                                    |
| Anyone can generate hash | Only someone with the secret key can generate/verify HMAC |
| Checks integrity only    | Checks integrity + authenticity                           |

---

# Real-Life Example

Imagine sending a letter.

### Hashing 📄

You write a checksum on the letter.

Anyone can calculate the same checksum.

---

### HMAC 🔐

You and your friend share a **secret stamp**.

Every letter is stamped with that secret.

Only people who know the secret stamp can verify the letter.

---

# Where is HMAC Used?

- JWT Signatures
- API Authentication
- Webhooks (GitHub, Stripe, Razorpay)
- Secure Cookies
- Payment Gateways

---

# Interview Questions

### 1. What is MAC?

MAC (Message Authentication Code) is a value generated using a message and a secret key to verify integrity and authenticity.

---

### 2. What is HMAC?

HMAC (Hash-based Message Authentication Code) is a MAC that uses a cryptographic hash function (such as SHA-256) with a secret key.

---

### 3. What is the difference between Hashing and HMAC?

Hashing uses only the data, while HMAC uses both the data and a secret key.

---

### 4. Which Node.js method is used to create HMAC?

```javascript
crypto.createHmac();
```

---

### 5. Does HMAC encrypt data?

**No.** HMAC does not encrypt data. It only verifies integrity and authenticity.

---

# Quick Revision (1 Minute)

- **MAC = Message + Secret Key**
- **HMAC = Hash Function + Secret Key**
- **Checks Integrity**
- **Verifies Authenticity**
- **Not Encryption**
- **Node.js → `crypto.createHmac()`**
- **Common Algorithm → SHA-256**
- **Used in JWT, APIs, Webhooks**

---

## ⭐ Interview Trick

### Remember:

- **Hash = Data Only**
- **HMAC = Data + Secret Key**
- **Encryption = Hide Data**
- **HMAC = Verify Data**

### Easy Formula

```text
Message
    +
Secret Key
    ↓
HMAC (SHA-256)
    ↓
Verify Message
```

> **One-Line Interview Answer:**
> **HMAC is a secure way to verify both the integrity and authenticity of a message by combining a cryptographic hash function with a secret key.**
