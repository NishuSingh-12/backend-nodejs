# 🌐 DOM-Based XSS Attack

### 📌 What is DOM-Based XSS?

**DOM-Based XSS** is an XSS vulnerability that occurs when **client-side JavaScript takes untrusted data and uses it in an unsafe way to modify the DOM**.

Unlike Reflected XSS, the malicious input does **not need to be reflected by the server**.

### 🔹 How It Works

**Untrusted Input → JavaScript → Unsafe DOM Manipulation → XSS**

Example:

```js
const input = location.hash.substring(1);

element.innerHTML = input;
```

Here, data from the URL is directly inserted into the DOM using `innerHTML`.

If the input contains malicious HTML, the browser may interpret it as executable content.

---

### 🔹 Common Sources

Untrusted data can come from:

- `location.hash`
- `location.search`
- `location.href`
- `document.referrer`
- User input

### 🔹 Common Dangerous Sinks

These APIs can become dangerous when used with untrusted input:

- `innerHTML`
- `outerHTML`
- `document.write()`
- `insertAdjacentHTML()`
- `eval()`

---

### 🛡️ Prevention

- Prefer `textContent` for plain text.
- Avoid unsafe DOM APIs with untrusted input.
- Validate and sanitize user input when necessary.
- Use DOMPurify when rendering trusted-looking HTML from untrusted sources.
- Use **Content Security Policy (CSP)** as an additional defense.

### 🧠 Remember

> **DOM-Based XSS = Untrusted data + Unsafe client-side JavaScript + DOM manipulation.**

### 🎤 Interview Point

**Q: What is the difference between Reflected XSS and DOM-Based XSS?**

**A:** In **Reflected XSS**, the malicious input is reflected by the server in the response. In **DOM-Based XSS**, client-side JavaScript processes the untrusted input and creates the vulnerability through unsafe DOM manipulation.
