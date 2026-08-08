# What is a Session?

A **session** is a mechanism that allows a server to **maintain information about a client across multiple HTTP requests**.

Since HTTP is stateless, sessions help the server recognize the same user/client across requests.

> **Session = Maintaining user/client state across requests**

### Basic Flow

```text
Client
  ↓
Login / Request
  ↓
Server creates Session
  ↓
Session ID → Client
  ↓
Client sends Session ID with requests
  ↓
Server identifies the client
```

---

# Types of Sessions

## 1. Stateful Session

In a **stateful session**, the actual session data is stored on the **server**.

The client usually receives only a **Session ID**.

```text
Client → Session ID
              ↓
           Server
              ↓
        Session Data
```

### Common Storage

- Memory
- File
- Database
- Redis

### Pros

- Easy to revoke
- Easy to manage
- Good for traditional web applications

### Cons

- Server must maintain session state
- Requires shared storage when using multiple servers

---

## 2. Stateless Session

In a **stateless session**, the server does not store session state.

The client sends a token containing the required information.

Example:

**JWT**

```text
Client
  ↓
Token
  ↓
Server verifies token
```

### Pros

- No server-side session storage
- Easy to scale across multiple services

### Cons

- Harder to revoke before expiry
- Token must be securely protected
- Token may become large

---

# Stateful vs Stateless

| Stateful                         | Stateless                          |
| -------------------------------- | ---------------------------------- |
| Data stored on server            | Data carried by client token       |
| Client usually stores Session ID | Client stores token                |
| Easy to revoke                   | Harder to revoke                   |
| Requires session storage         | No session storage                 |
| Common in traditional web apps   | Useful in APIs/distributed systems |

---

# Stateful Session Storage

### 1. In-Memory

Session data is stored in server RAM.

```text
Fast ✅
Lost on restart ❌
Not ideal for production scaling ❌
```

Example:

```text
express-session MemoryStore
```

---

### 2. File-Based

Session data is stored in files.

```text
More persistent
Slower
Rarely used for large production systems
```

---

### 3. Database-Backed

Session data is stored in a database or dedicated store.

Examples:

- Redis
- MongoDB
- PostgreSQL

```text
Scalable ✅
Can work with multiple servers ✅
Production-friendly ✅
```

---

# ⭐ Quick Revision

- **Session → Maintains state across requests**
- **Stateful → Session data stored on server**
- **Stateless → Session data carried by client/token**
- **Session ID → Usually stored in a cookie**
- **Redis/DB → Common production session stores**
- **In-memory → Fast but not suitable for distributed production**
- **JWT → Common example of a stateless token**

### Easy Formula

```text
Stateful:
Client → Session ID → Server → Session Data

Stateless:
Client → Token → Server → Verify Token
```

> **Interview Answer:**
> **A session is a mechanism for maintaining a client's state across multiple HTTP requests. In a stateful session, the server stores the session data and the client sends a session ID. In a stateless approach, the client sends a token containing the necessary information, so the server does not need to store session state.**
