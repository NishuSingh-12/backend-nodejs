# Creating a Different Page for Redirect URL

In OAuth/OIDC, the **Redirect URL (Callback URL)** is the page or route where Google sends the user **after successful authentication**.

Instead of handling the callback on the same page, we can create a **separate callback page**.

> **Redirect URL = The URL where the OAuth provider sends the user after login.**

---

## Example

Suppose our application has:

```text
http://localhost:5173/
```

and we create a separate callback page:

```text
http://localhost:5173/auth/callback
```

We register this URL with Google.

```text
Google
   ↓
User Login
   ↓
http://localhost:5173/auth/callback
```

---

# 1. Create Callback Page

In a React application:

```text
src/
 ├── App.jsx
 ├── pages/
 │    ├── Home.jsx
 │    └── AuthCallback.jsx
```

`AuthCallback.jsx`:

```jsx
function AuthCallback() {
  return (
    <div>
      <h1>Logging you in...</h1>
    </div>
  );
}

export default AuthCallback;
```

---

# 2. Add the Route

Using React Router:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthCallback from "./pages/AuthCallback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/auth/callback" element={<AuthCallback />} />
    </Routes>
  );
}

export default App;
```

---

# 3. Register Redirect URL

In Google OAuth configuration, set:

```text
http://localhost:5173/auth/callback
```

The URL must match the registered redirect URI.

---

# 4. Google Redirects the User

After login:

```text
User
 ↓
Google Login
 ↓
Authentication
 ↓
Redirect
 ↓
/auth/callback
```

The browser reaches:

```text
http://localhost:5173/auth/callback?code=ABC123
```

The callback page can then handle the result.

---

# 5. Read the Authorization Code

Inside `AuthCallback.jsx`:

```jsx
import { useEffect } from "react";

function AuthCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");

    console.log("Authorization Code:", code);
  }, []);

  return <h1>Logging you in...</h1>;
}

export default AuthCallback;
```

---

## Important: Don't Trust the Code Directly

The frontend should **not exchange the authorization code using the Client Secret**.

The safer architecture is:

```text
Google
   ↓
Callback
   ↓
Your Backend
   ↓
Exchange Code
   ↓
Verify ID Token
   ↓
Create Session
   ↓
Frontend
```

The **Client Secret stays on the backend**.

---

# Better Practical Flow

```text
Login Button
     ↓
Google
     ↓
User Authentication
     ↓
Redirect URL
     ↓
/auth/callback
     ↓
Backend handles code
     ↓
Verify Google Identity
     ↓
Create Application Session
     ↓
Redirect to Dashboard
```

---

# Why Use a Separate Callback Page?

A separate callback page:

- Keeps OAuth logic separate from normal pages
- Makes authentication flow easier to manage
- Gives a dedicated place to process the callback
- Can show a loading message while authentication is completed

---

# ⭐ Quick Revision

> **A redirect/callback page is a dedicated route where the OAuth provider sends the user after authentication. It receives the authorization response and starts the application's authentication process.**

```text
Google Login
     ↓
/auth/callback
     ↓
Backend
     ↓
Verify User
     ↓
Create Session
     ↓
Dashboard
```

### Interview Answer

> **A separate redirect page is a dedicated callback route used to handle the response from the OAuth provider. After Google authenticates the user, it redirects to this route, where the application processes the authorization response and completes the login flow.**
