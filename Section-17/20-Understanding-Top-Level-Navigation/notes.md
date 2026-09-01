# 🌐 Understanding Top-Level Navigation

### 📌 What is Top-Level Navigation?

**Top-level navigation** means navigating the **main browser window/tab** from one URL to another.

Examples:

- Clicking a normal link `<a href="...">`
- Entering a URL in the browser
- Redirecting the main page using JavaScript

```js
window.location.href = "https://example.com";
```

Here, the **main browsing context** is being navigated.

---

### 🔹 Top-Level vs Subframe Navigation

| Type                     | Meaning                               |
| ------------------------ | ------------------------------------- |
| **Top-Level Navigation** | Navigates the main browser tab/window |
| **Subframe Navigation**  | Navigates a page inside an `<iframe>` |

Example:

```text
Browser Tab
└── Main Page          ← Top-level
    └── iframe         ← Subframe
```

---

### 🔐 Why is it Important for Security?

Top-level navigation is important when dealing with **cookies, SameSite policies, CSRF, and cross-origin requests**.

For example, with **SameSite cookies**, whether a request is associated with a top-level navigation can affect whether the browser sends the cookie.

### 🧠 Remember

> **Top-Level Navigation = Navigation of the main browser page/tab, not a page inside an iframe.**

### 🎤 Interview Point

**Q: What is top-level navigation?**

**A:** Top-level navigation is when the **main browsing context** (browser tab or window) navigates from one URL to another, such as when a user clicks a link or the page performs a redirect.
