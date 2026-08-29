# 🔥 Types of XSS Attacks

There are **3 main types of XSS attacks**:

| Type              | Description                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| **Stored XSS**    | Malicious script is stored on the server/database and executed when users view the content.                   |
| **Reflected XSS** | Malicious input is immediately reflected by the server in the response.                                       |
| **DOM-Based XSS** | Malicious input is processed and executed by client-side JavaScript without necessarily involving the server. |

---

## 1. 🔹 Stored XSS

The malicious script is **saved in the application's database**.

**Flow:**

`Attacker → Malicious Input → Database → Victim's Browser`

**Example:**
An attacker adds malicious content to a comment. The application stores it, and every user who views that comment may be affected.

➡️ **Also called Persistent XSS.**

---

## 2. 🔹 Reflected XSS

The malicious input is sent as part of a request and is **immediately reflected in the server's response**.

**Flow:**

`Attacker → Malicious Request → Server → Victim's Browser`

**Common places:**

- Search parameters
- URL parameters
- Error messages

➡️ The payload is **not permanently stored** by the application.

---

## 3. 🔹 DOM-Based XSS

The vulnerability exists in **client-side JavaScript**.

The application takes untrusted data and places it into the DOM using an unsafe method.

**Flow:**

`Untrusted Input → Client-side JavaScript → DOM → XSS`

Example of an unsafe pattern:

```js
element.innerHTML = userInput;
```

➡️ The server does not necessarily need to process the malicious input.

---

### 🧠 Easy Way to Remember

- **Stored XSS** → 💾 **Stored** in database
- **Reflected XSS** → 🔄 **Reflected** by server
- **DOM XSS** → 🌐 **DOM/JavaScript** handles it

### 🎤 Interview Point

**Q: What are the three main types of XSS?**

**A:** The three main types are **Stored XSS, Reflected XSS, and DOM-Based XSS**. Stored XSS persists on the server, Reflected XSS is returned immediately in a response, and DOM-Based XSS occurs through unsafe client-side JavaScript and DOM manipulation.
