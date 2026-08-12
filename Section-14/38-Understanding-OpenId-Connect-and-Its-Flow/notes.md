# Understanding OpenID Connect (OIDC) and Its Flow

**OpenID Connect (OIDC)** is an **authentication protocol built on top of OAuth 2.0**.

It allows an application to **verify the user's identity** and obtain basic information about the user.

> **OAuth → Authorization**
> **OpenID Connect → Authentication + Identity**

---

## Why OpenID Connect?

OAuth mainly answers:

> **"What is this application allowed to access?"**

OIDC adds:

> **"Who is the user?"**

For example, with **Login with Google**, OIDC can be used to authenticate the user.

---

# Main Participants

1. **User** → Person trying to log in
2. **Client** → Your application
3. **Identity Provider (IdP)** → Google, Microsoft, etc.
4. **Resource Server** → API containing protected resources

---

# OIDC Flow

The common flow uses the **Authorization Code Flow**.

```text
User
 ↓
Your Application
 ↓
Identity Provider (Google)
 ↓
User Login + Consent
 ↓
Authorization Code
 ↓
Your Backend
 ↓
Token Endpoint
 ↓
ID Token + Access Token
```

---

## Step 1: User Clicks Login

```text
Login with Google
       ↓
Your App redirects user to Google
```

---

## Step 2: User Authenticates

Google asks the user to log in and provide consent if required.

```text
User
 ↓
Google Login
 ↓
Authentication Successful
```

Your application **does not receive the user's Google password**.

---

## Step 3: Authorization Code

After successful authentication, Google redirects the user back to your application with a temporary **authorization code**.

```text
Google
  ↓
Authorization Code
  ↓
Your App
```

---

## Step 4: Exchange Code for Tokens

Your backend sends the authorization code to the Identity Provider's token endpoint.

It can receive:

- **ID Token**
- **Access Token**
- **Refresh Token** (if issued)

```text
Authorization Code
       ↓
Identity Provider
       ↓
ID Token + Access Token
```

---

# ID Token

The **ID Token** is the key difference between OAuth and OIDC.

It contains information about the authenticated user.

Usually, it is a **JWT**.

Example payload:

```json
{
  "sub": "123456",
  "name": "Nishu",
  "email": "user@example.com"
}
```

The `sub` claim is the user's unique identifier at that Identity Provider.

> **ID Token → Tells the application who the user is.**

---

# Access Token

The **Access Token** is used to access protected resources/APIs.

```text
ID Token
→ User Identity

Access Token
→ API Authorization
```

Do **not** confuse the two.

---

# OIDC vs OAuth

| OAuth 2.0                     | OpenID Connect               |
| ----------------------------- | ---------------------------- |
| Authorization                 | Authentication + Identity    |
| Access protected resources    | Identify the user            |
| Uses Access Token             | Uses ID Token + Access Token |
| Does not define user identity | Defines user identity        |

### Easy Example

```text
OAuth:
"Can this app access my photos?"

OIDC:
"Who is this user?"
```

---

# Complete OIDC Flow

```text
User
 ↓
Your App
 ↓
Google / Identity Provider
 ↓
Login
 ↓
Authorization Code
 ↓
Backend
 ↓
Token Endpoint
 ↓
ID Token + Access Token
 ↓
Verify ID Token
 ↓
User Authenticated ✅
```

---

# ⭐ Quick Revision

- **OIDC = OpenID Connect**
- Built on **OAuth 2.0**
- Used for **authentication**
- OAuth → **Authorization**
- OIDC → **Authentication + Identity**
- **ID Token** contains identity information
- **Access Token** is used for APIs/resources
- ID Token is commonly a **JWT**
- Common example → **Login with Google**

### Interview Answer

> **OpenID Connect is an authentication protocol built on OAuth 2.0. It allows an application to verify a user's identity using an ID Token. In the Authorization Code Flow, the user authenticates with the Identity Provider, the application receives an authorization code, exchanges it for tokens, and uses the ID Token to identify the user.**
