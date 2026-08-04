# Stateful vs Stateless Authentication

Authentication mainly has **2 types**:

1. **Stateful Authentication**
2. **Stateless Authentication**

---

# 1. Stateful Authentication

In **Stateful Authentication**, the **server stores the user's login session**.

After login, the server creates a **Session ID** and stores it in memory or a database. The Session ID is sent to the client as a cookie.

### Flow

```text
User Login
    ↓
Server Creates Session
    ↓
Session Stored on Server
    ↓
Session ID Sent to Browser (Cookie)
    ↓
Browser Sends Cookie on Every Request
    ↓
Server Verifies Session
```

---

### Example

1. User logs in.
2. Server creates **Session ID = ABC123**.
3. Session is stored on the server.
4. Browser stores the Session ID in a cookie.
5. Every request sends the cookie.
6. Server checks the Session ID and allows access.

---

### Advantages

- More secure (Session stored on server)
- Easy to logout
- Session can be destroyed anytime

### Disadvantages

- Server needs extra memory
- Harder to scale for large applications

---

# 2. Stateless Authentication

In **Stateless Authentication**, the **server does not store any session**.

After login, the server generates a **JWT (JSON Web Token)** and sends it to the client.

The client stores the token (Local Storage, Session Storage, or Cookie) and sends it with every request.

### Flow

```text
User Login
    ↓
Server Generates JWT
    ↓
JWT Sent to Client
    ↓
Client Stores Token
    ↓
Client Sends Token in Every Request
    ↓
Server Verifies JWT
```

---

### Example

1. User logs in.
2. Server generates a JWT.
3. Browser stores the JWT.
4. Browser sends the JWT in every request.
5. Server verifies the JWT.
6. If valid, access is granted.

---

### Advantages

- No session storage needed
- Easy to scale
- Faster for distributed systems
- Good for REST APIs

### Disadvantages

- Logout is harder (token remains valid until it expires unless additional mechanisms are used)
- If a token is stolen, it can be misused until it expires

---

# Stateful vs Stateless

| Stateful                   | Stateless                     |
| -------------------------- | ----------------------------- |
| Server stores session      | Server does not store session |
| Uses Session ID            | Uses JWT Token                |
| Cookie contains Session ID | Client stores JWT             |
| More server memory         | Less server memory            |
| Easy logout                | Logout needs extra handling   |
| Hard to scale              | Easy to scale                 |

---

# Real-Life Example

### Stateful

🏨 **Hotel**

- Reception keeps your room details.
- You only show your room card.
- Reception checks your record.

➡️ Information is stored by the hotel.

---

### Stateless

✈️ **Boarding Pass**

- Your boarding pass contains your information.
- Staff reads the pass.
- No need to look up a stored session.

➡️ Information travels with you.

---

# Interview Questions

### 1. What is Stateful Authentication?

Stateful Authentication stores the user's session on the server and identifies the user using a Session ID.

---

### 2. What is Stateless Authentication?

Stateless Authentication does not store sessions on the server. It uses a JWT token to verify the user.

---

### 3. Which authentication is better for REST APIs?

**Stateless Authentication (JWT)** is generally preferred because it is scalable and the server does not need to store session data.

---

### 4. Which authentication uses sessions?

**Stateful Authentication.**

---

### 5. Which authentication uses JWT?

**Stateless Authentication.**

---

# Quick Revision (1 Minute)

- **Stateful = Session**
- **Stateless = JWT**
- **Stateful → Server stores session**
- **Stateless → Server stores nothing**
- **Stateful → Uses Session ID**
- **Stateless → Uses Token**
- **Stateful → Easy Logout**
- **Stateless → Best for REST APIs**
- **Stateful → More server memory**
- **Stateless → Less server memory**

---

## ⭐ Interview Trick

**Stateful = State stored on Server = Session**

**Stateless = No State on Server = JWT**

### Easy Formula

> **Session → Stateful**
> **JWT → Stateless**
