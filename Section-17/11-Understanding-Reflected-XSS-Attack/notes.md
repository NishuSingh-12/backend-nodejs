# 🔄 Understanding Reflected XSS Attack

### 📌 What is Reflected XSS?

**Reflected XSS** is an XSS vulnerability where malicious user input is **immediately reflected by the server in the HTTP response** and executed by the victim's browser.

It is **not permanently stored** in the database.

### 🔹 How It Works

**Attacker → Malicious Request → Server → Reflected Response → Victim's Browser**

For example, an application may take a search value from a URL and directly include it in the HTML response.

```text
/search?query=<user-input>
```

If the application does not properly encode the output, the browser may interpret the input as HTML/JavaScript.

### 🔹 Common Sources

Reflected XSS often occurs through:

- URL query parameters
- Search fields
- Form submissions
- Error messages

### ⚠️ Why is it Dangerous?

An attacker may create a malicious URL and trick a victim into opening it.

If the application is vulnerable, the injected script can execute with the victim's browser privileges.

### 🛡️ Prevention

- **Encode/escape untrusted output** before rendering.
- Validate user input where appropriate.
- Avoid inserting untrusted data into HTML.
- Use safe DOM APIs such as `textContent`.
- Use **Content Security Policy (CSP)** as an additional defense.
- Sanitize HTML with **DOMPurify** when HTML rendering is genuinely required.

### 🧠 Remember

> **Reflected XSS = Malicious input → Server reflects it → Browser executes it.**

**Key difference:** Unlike **Stored XSS**, the malicious input is **not permanently stored** in the application.

### 🎤 Interview Point

**Q: What is Reflected XSS?**

**A:** Reflected XSS occurs when an application takes untrusted input from a request and reflects it directly into the response without proper encoding or sanitization, causing the browser to interpret it as executable content.
