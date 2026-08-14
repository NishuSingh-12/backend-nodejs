# How to Open a Popup for Google Login?

A **Google Login Popup** allows users to authenticate with Google in a separate popup window instead of redirecting the entire page.

> **Popup Login → Open Google authentication in a new window → Receive callback → Continue in your app**

---

## 1. Basic Popup

We can use `window.open()`:

```javascript
const loginWithGoogle = () => {
  window.open(
    "http://localhost:5000/auth/google",
    "Google Login",
    "width=500,height=600",
  );
};
```

Button:

```html
<button onclick="loginWithGoogle()">Login with Google</button>
```

This opens:

```text
Your App
   ↓
Google Login Popup
   ↓
User logs in
```

---

## 2. Backend Google Route

Your backend redirects the popup to Google's authorization URL:

```javascript
app.get("/auth/google", (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: "openid email profile",
  });

  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
});
```

---

## 3. Google Callback

After login, Google redirects to:

```text
http://localhost:5000/auth/google/callback?code=ABC123
```

Your backend processes the code.

After successful authentication, the popup can communicate with the main window.

For example:

```javascript
res.send(`
  <script>
    window.opener.postMessage(
      { type: "GOOGLE_LOGIN_SUCCESS" },
      "http://localhost:5173"
    );

    window.close();
  </script>
`);
```

### What happens?

```text
Google Login
     ↓
Callback
     ↓
postMessage()
     ↓
Main Window receives message
     ↓
Popup closes
```

---

## 4. Listen for the Message

In the main application:

```javascript
window.addEventListener("message", (event) => {
  if (event.origin !== "http://localhost:5000") {
    return;
  }

  if (event.data.type === "GOOGLE_LOGIN_SUCCESS") {
    console.log("Google login successful");
  }
});
```

> Always check `event.origin` before trusting messages from a popup.

---

# Complete Flow

```text
┌─────────────┐
│ Main Window │
└──────┬──────┘
       │
       │ window.open()
       ↓
┌─────────────┐
│   Popup     │
└──────┬──────┘
       ↓
     Google
       ↓
 User Login
       ↓
Authorization Code
       ↓
   Backend
       ↓
Verify ID Token
       ↓
postMessage()
       ↓
┌─────────────┐
│ Main Window │
└─────────────┘
       ↓
Popup closes
```

---

## ⚠️ Important Security Points

- Use **HTTPS in production**.
- Do not put the Google **Client Secret** in frontend code.
- Validate the OAuth callback on the backend.
- Verify the **ID Token** before trusting user information.
- Check `event.origin` when using `postMessage()`.
- Use a proper **OAuth `state` parameter** to protect against CSRF/login-injection attacks.

---

# Quick Revision

- `window.open()` → Opens login popup
- Google → Authenticates user
- Callback → Returns authorization code
- Backend → Exchanges code and verifies identity
- `postMessage()` → Sends result to main window
- `window.close()` → Closes popup

### ⭐ Interview Answer

> **A Google login popup can be implemented by opening the OAuth authorization URL using `window.open()`. After authentication, the backend handles the callback and can notify the original window using `postMessage()`. The popup can then be closed.**
