# Customizing OAuth Login Popup with `prompt` and `login_hint`

OAuth provides parameters like **`prompt`** and **`login_hint`** to control the Google login experience.

### 1. `prompt`

`prompt` tells Google **how the authentication/consent screen should behave**.

Example:

```javascript
const authUrl = client.generateAuthUrl({
  access_type: "offline",
  scope: ["openid", "email", "profile"],
  prompt: "select_account",
});
```

### Common Values

| Value            | Purpose                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| `select_account` | Lets the user choose a Google account                                         |
| `consent`        | Shows the consent screen                                                      |
| `none`           | No user interaction; only works when Google can complete the request silently |

For a login popup, `select_account` is commonly useful.

---

### 2. `login_hint`

`login_hint` tells Google **which account the user is likely to use**.

```javascript
const authUrl = client.generateAuthUrl({
  access_type: "offline",
  scope: ["openid", "email", "profile"],
  prompt: "select_account",
  login_hint: "user@gmail.com",
});
```

Google can use this email as a hint when choosing the account.

> `login_hint` is only a **hint**. It does not authenticate the user by itself.

---

## Practical Backend Example

```javascript
app.get("/auth/google", (req, res) => {
  const authUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: ["openid", "email", "profile"],
    prompt: "select_account",
    login_hint: req.query.email,
  });

  res.redirect(authUrl);
});
```

Now:

```text
Your App
   ↓
Google Popup
   ↓
select_account
   ↓
User chooses account
   ↓
Google Login
   ↓
Authorization Code
```

### Quick Revision

> **`prompt` controls the Google authentication/consent behavior, while `login_hint` suggests which Google account should be used.**

```text
prompt     → How Google should show login/consent
login_hint → Which account to suggest
```

### Interview Answer

> **OAuth `prompt` and `login_hint` parameters customize the login experience. `prompt` controls whether Google shows account selection or consent, while `login_hint` provides a user's email as a hint for account selection.**
