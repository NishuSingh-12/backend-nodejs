# Understanding OAuth and Its Flow

**OAuth** is an authorization framework that allows an application to access a user's resources **without asking for the user's password**.

> **OAuth = Delegated Authorization**

For example, when you use **“Login with Google”**, your application does not receive your Google password. Google authenticates you and provides the application with authorization information.

---

## Why OAuth?

Without OAuth:

```text
App → Ask for Google Password ❌
```

With OAuth:

```text
App → Google → User Approves → Access Token → App
```

The application never needs the user's Google password.

---

# Main Participants

OAuth commonly involves:

1. **Resource Owner** → The user
2. **Client** → Your application
3. **Authorization Server** → Google, GitHub, etc.
4. **Resource Server** → Server containing the user's protected data

Example:

```text
User → Your App → Google
                    ↓
              User's Data
```

---

# OAuth Flow

A simplified OAuth flow:

```text
1. User opens your application
          ↓
2. App redirects user to Google
          ↓
3. User logs in and gives permission
          ↓
4. Google redirects back with an Authorization Code
          ↓
5. App sends the code to Google
          ↓
6. Google returns an Access Token
          ↓
7. App uses Access Token to access allowed resources
```

---

## Step-by-Step Example

Suppose your application has:

```text
Login with Google
```

### Step 1: Redirect to Google

```text
Your App
   ↓
Google Authorization Page
```

The user sees Google's login/consent page.

---

### Step 2: User Gives Permission

```text
User
 ↓
Login to Google
 ↓
Allow requested permissions
```

---

### Step 3: Authorization Code

Google redirects the user back to your application with a temporary **authorization code**.

```text
Google
  ↓
Authorization Code
  ↓
Your App
```

The code itself is **not the access token**.

---

### Step 4: Exchange Code for Token

Your backend sends the code to Google's token endpoint.

```text
Authorization Code
       ↓
Google
       ↓
Access Token
```

---

### Step 5: Access Protected Resource

Your application can use the access token to request resources that the user authorized.

```text
App
 ↓
Access Token
 ↓
Resource Server
 ↓
Allowed Data
```

---

# OAuth Flow in One Diagram

```text
User
 ↓
Your Application
 ↓
Authorization Server
 ↓
User Login + Consent
 ↓
Authorization Code
 ↓
Your Backend
 ↓
Access Token
 ↓
Resource Server
 ↓
Protected Resource
```

---

# Important Terms

### Authorization Code

A temporary code returned after successful authorization.

```text
Code → exchanged for Access Token
```

### Access Token

Used by the application to access authorized resources.

```text
Access Token → Protected API
```

### Refresh Token

Can be used to obtain a new access token without requiring the user to authorize again, when the authorization server issues one.

---

# OAuth vs Authentication

OAuth is primarily about **authorization**, not authentication.

```text
Authentication → Who are you?
Authorization  → What are you allowed to access?
```

For **user authentication/identity**, OAuth is commonly combined with **OpenID Connect (OIDC)**.

---

# Quick Revision

- **OAuth → Authorization**
- User does **not** give their password to your application
- User authenticates with the authorization server
- App receives an **authorization code**
- Code is exchanged for an **access token**
- Access token is used to access permitted resources
- **Refresh token** can be used to obtain new access tokens
- **OAuth ≠ Authentication**
- **OpenID Connect (OIDC)** adds an identity/authentication layer on top of OAuth 2.0

### ⭐ Interview Answer

> **OAuth is an authorization framework that allows an application to access a user's protected resources without knowing the user's password. In a typical flow, the user authorizes the application, the application receives an authorization code, exchanges it for an access token, and uses that token to access permitted resources.**
