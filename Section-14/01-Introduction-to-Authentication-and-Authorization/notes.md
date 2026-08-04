# Authentication and Authorization

## What is Authentication?

Authentication is the process of **verifying a user's identity**.

**Question it answers:**

> **Who are you?**

It checks whether the user is genuine or not.

### Example

- Login with Email & Password
- Login with Google
- Login with OTP
- Login with Fingerprint

---

## What is Authorization?

Authorization is the process of **checking what an authenticated user can access**.

**Question it answers:**

> **What can you access?**

It checks the user's permissions.

### Example

- Admin → Can delete users
- Teacher → Can upload courses
- Student → Can watch courses

---

# Authentication vs Authorization

| Authentication    | Authorization                |
| ----------------- | ---------------------------- |
| Verifies identity | Verifies permissions         |
| Who are you?      | What can you do?             |
| Happens first     | Happens after authentication |
| Login process     | Access control               |

---

# Real Life Example

🏢 **Office Building**

**Authentication**

Show your ID Card.

✔ Security verifies your identity.

**Authorization**

Access different rooms.

- Employee → Office
- HR → HR Room
- Admin → Server Room

---

# Authentication Flow

```text
User Login
     ↓
Verify Email & Password
     ↓
Authenticated
```

---

# Authorization Flow

```text
User Logged In
      ↓
Check User Role
      ↓
Allow / Deny Access
```

---

# Common Authentication Methods

- Username & Password
- OTP
- JWT
- Session
- Google Login (OAuth)
- Fingerprint
- Face ID

---

# Common Authorization Methods

- User Roles
- Permissions
- RBAC (Role-Based Access Control)

---

# HTTP Status Codes

| Code | Meaning           |
| ---- | ----------------- |
| 200  | Success           |
| 401  | Not Authenticated |
| 403  | No Permission     |

---

# Interview Questions

### 1. What is Authentication?

Authentication is the process of verifying a user's identity.

---

### 2. What is Authorization?

Authorization is the process of checking what an authenticated user is allowed to access.

---

### 3. Authentication or Authorization, which comes first?

**Authentication comes first.**

---

### 4. What is the difference?

Authentication checks **identity**, while authorization checks **permissions**.

---

### 5. Can a user be authenticated but not authorized?

**Yes.**

Example:
A normal user logs in successfully but cannot access the admin panel.

---

# Quick Revision (1 Minute)

- **Authentication = Who are you?**
- **Authorization = What can you do?**
- Authentication → First
- Authorization → Second
- **401** = Not Logged In
- **403** = Permission Denied
- Authentication = Login
- Authorization = Access Control

---

## ⭐ Interview Trick (Remember)

**Authentication → Identity → Login**

**Authorization → Permission → Access**

**Easy Formula:**

> **Login First ➜ Permission Later**

---
