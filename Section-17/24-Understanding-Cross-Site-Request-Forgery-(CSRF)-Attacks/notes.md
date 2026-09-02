# 🔐 Understanding Cross-Site Request Forgery (CSRF) Attacks

### 📌 What is CSRF?

**CSRF (Cross-Site Request Forgery)** is an attack where an attacker tricks a logged-in user’s browser into sending an **unwanted request** to a trusted website.

The browser automatically sends the user's **authentication cookies**, so the server may think the request was made intentionally by the user.

---

### 🔹 Simple Example

Suppose a user is logged in to:

`bank.com`

The user has an authentication cookie:

```text
sessionId=abc123
```

An attacker creates a malicious page containing:

```html
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="amount" value="10000" />
  <input type="hidden" name="to" value="attacker" />
</form>

<script>
  document.forms[0].submit();
</script>
```

If the victim visits this page while logged in:

1. Browser sends the request to `bank.com`.
2. Browser automatically includes the bank's cookie.
3. Server sees a valid session.
4. Server may process the transfer.
5. The victim didn't intentionally make the request.

That's **CSRF**.

---

### 🔹 Why CSRF Works

CSRF mainly works because:

- Browser automatically sends cookies with requests.
- Server uses the cookie to identify/authenticate the user.
- Server cannot automatically know whether the request was intentionally made by the user.

**Important:** CSRF is primarily a problem with **cookie-based authentication**.

---

### 🔹 CSRF vs XSS

| CSRF                                         | XSS                                                 |
| -------------------------------------------- | --------------------------------------------------- |
| Tricks user into sending an unwanted request | Injects/runs malicious JavaScript                   |
| Abuses user's authenticated session          | Runs attacker-controlled script in victim's browser |
| Usually targets state-changing actions       | Can steal data, modify UI, perform actions          |
| Server-side CSRF defenses are important      | Output encoding/sanitization + CSP are important    |

---

### 🛡️ How to Prevent CSRF

#### 1. SameSite Cookies

Use:

```http
Set-Cookie: sessionId=abc123; Secure; HttpOnly; SameSite=Lax
```

For many applications, `SameSite=Lax` or `Strict` significantly reduces CSRF risk.

---

#### 2. CSRF Token

Server generates a random token:

```text
csrfToken = random_value
```

Client sends it with the request:

```http
POST /transfer
X-CSRF-Token: random_value
```

Server verifies the token before performing the action.

An attacker generally cannot obtain the legitimate token from the target site due to browser same-origin restrictions.

---

#### 3. Check `Origin` / `Referer`

Server can verify that sensitive requests came from an expected origin.

Example:

```text
Origin: https://myapp.com
```

Server rejects unexpected origins.

---

### 🧠 Remember

> **CSRF = Attacker makes the victim's browser perform an unwanted authenticated action.**

**Cookie authentication + state-changing request + missing CSRF protection → CSRF risk**

### 🎤 Interview Point

**Q: What is CSRF?**

**A:** CSRF is an attack in which an attacker tricks an authenticated user's browser into sending an unwanted request to a trusted application. It commonly targets cookie-based authentication and can be mitigated using **SameSite cookies, CSRF tokens, and Origin/Referer validation**.
