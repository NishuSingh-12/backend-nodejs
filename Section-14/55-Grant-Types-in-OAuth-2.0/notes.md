# Grant Types in OAuth 2.0

**Grant Type** defines **how a client obtains an access token** in OAuth 2.0.

### Main Grant Types

| Grant Type               | Use                        |
| ------------------------ | -------------------------- |
| **Authorization Code**   | Web apps / user login      |
| **Client Credentials**   | Server-to-server           |
| **Refresh Token**        | Get a new access token     |
| **Device Authorization** | Devices with limited input |

### 1. Authorization Code

Used when a user is involved.

```text id="7yqk8a"
User → Login → Authorization Code → Access Token
```

✅ Recommended for web applications.
**PKCE** should be used for public clients.

### 2. Client Credentials

Used for **server-to-server communication**.

```text id="0p4q7e"
Server → Client ID + Secret → Access Token
```

No user is involved.

### 3. Refresh Token

Used to obtain a **new access token** after the old one expires.

```text id="l0t2zz"
Refresh Token → New Access Token
```

### 4. Device Authorization

Used for devices where typing or browser interaction is limited, such as TVs or consoles.

---

### ❌ Avoid

**Implicit Grant** and **Resource Owner Password Credentials Grant** are considered legacy approaches and should generally not be used in new applications.

### ⭐ Quick Revision

> **Grant Type = Method used by a client to obtain an access token.**

**Interview Answer:**

> **OAuth 2.0 grant types define how a client obtains an access token. Common modern flows include Authorization Code with PKCE, Client Credentials, Refresh Token, and Device Authorization.**
