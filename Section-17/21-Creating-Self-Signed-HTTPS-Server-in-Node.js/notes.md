# 🔒 Creating a Self-Signed HTTPS Server in Node.js

### 📌 What is HTTPS?

**HTTPS (HTTP Secure)** encrypts communication between the **client and server** using **TLS/SSL**.

Node.js can create an HTTPS server using the built-in `https` module.

---

## 🔹 What is a Self-Signed Certificate?

A **self-signed certificate** is an SSL/TLS certificate that is **created and signed by the developer themselves**, instead of being issued by a trusted Certificate Authority (CA).

It is mainly useful for:

- Local development
- Testing HTTPS
- Learning TLS/SSL

⚠️ Browsers usually show a **security warning** because the certificate is not trusted by a public CA.

---

## 🔹 Steps to Create HTTPS Server

### 1. Generate Certificate and Private Key

A self-signed certificate typically consists of:

- **Private Key** → Used by the server and must be kept secret.
- **Certificate** → Contains the server's public information and public key.

---

### 2. Use Node.js `https` Module

```js
import https from "node:https";
import fs from "node:fs";

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("Hello HTTPS");
  })
  .listen(443);
```

### 🔹 Important

- `key` → Private key file
- `cert` → SSL/TLS certificate
- `https.createServer()` → Creates the HTTPS server

---

## 🔐 HTTP vs HTTPS

| HTTP                  | HTTPS                |
| --------------------- | -------------------- |
| Data is not encrypted | Data is encrypted    |
| Uses HTTP             | HTTP over TLS        |
| Less secure           | More secure          |
| Typically port `80`   | Typically port `443` |

---

### ⚠️ Self-Signed Certificate Limitation

A self-signed certificate provides **encryption**, but it is **not automatically trusted** by browsers or operating systems.

For production websites, certificates are normally obtained from a **trusted Certificate Authority**.

### 🧠 Remember

> **Self-signed HTTPS = HTTPS server using a certificate signed by yourself, mainly for development and testing.**

### 🎤 Interview Point

**Q: What is a self-signed certificate?**

**A:** A self-signed certificate is an SSL/TLS certificate signed by its own creator rather than a trusted Certificate Authority. It can provide encrypted communication but is generally not trusted by browsers by default.
