# Using GSI Library in React.js

**GSI (Google Identity Services)** can be used in React to implement **Sign in with Google**.

### 1. Add GSI Script

In `index.html`:

```html
<script src="https://accounts.google.com/gsi/client"></script>
```

### 2. Create Google Login

```jsx
import { useEffect } from "react";

function GoogleLogin() {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredential,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("google-btn"),
      {
        theme: "outline",
        size: "large",
      },
    );
  }, []);

  function handleCredential(response) {
    console.log(response.credential);
  }

  return <div id="google-btn"></div>;
}

export default GoogleLogin;
```

### Flow

```text
React App
   ↓
GSI Library
   ↓
Google Login
   ↓
ID Token
   ↓
Send Token to Backend
   ↓
Verify Token
   ↓
Create Session
```

### Important

```javascript
response.credential;
```

contains the **Google ID Token**.

Send it to your backend for verification:

```javascript
fetch("/auth/google", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    idToken: response.credential,
  }),
});
```

> **Never verify or trust the ID Token only on the frontend.** The backend should verify it.

### Quick Revision

> **In React, GSI is initialized using `google.accounts.id.initialize()` and the official button is rendered using `renderButton()`. After login, the ID Token is received in `response.credential` and sent to the backend for verification.**
