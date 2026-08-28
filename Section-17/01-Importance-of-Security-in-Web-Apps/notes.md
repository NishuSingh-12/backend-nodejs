# 🔐 Importance of Security in Web Apps

### 📌 What is Web App Security?

**Web App Security** means protecting a web application, its users, and its data from **unauthorized access, attacks, and misuse**.

### 🎯 Why is Security Important?

1. **Protects User Data**
   - Prevents theft of passwords, personal information, payment details, etc.

2. **Prevents Unauthorized Access**
   - Ensures only authorized users can access protected resources.

3. **Protects Against Attacks**
   - Helps prevent attacks like **XSS, SQL Injection, CSRF, and Authentication attacks**.

4. **Maintains Data Integrity**
   - Prevents attackers from modifying or deleting important data.

5. **Maintains User Trust**
   - Secure applications increase user confidence and protect the application's reputation.

6. **Prevents Financial & Business Loss**
   - Security breaches can cause money loss, legal issues, and damage to the business.

### 🧠 Key Principle

> **Security should be considered from the beginning of development, not added after the application is completed.**

### 🎤 Interview Point

**Q: Why is security important in web applications?**
**A:** Web security protects user data and application resources from unauthorized access, attacks, data theft, and misuse while maintaining **confidentiality, integrity, and availability**.

# 🔐 Common Security Threats in Web Applications

Web applications can face different types of attacks that can **steal data, modify information, or gain unauthorized access**.

### 📌 Common Threats

| Threat                         | Meaning                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| **XSS (Cross-Site Scripting)** | Attacker injects malicious JavaScript into a web page.                              |
| **SQL Injection**              | Attacker injects malicious SQL queries to access or modify database data.           |
| **CSRF**                       | Tricks a logged-in user into performing an unwanted action.                         |
| **Broken Authentication**      | Weak authentication allows attackers to access user accounts.                       |
| **Broken Authorization**       | User accesses resources or actions they are not allowed to access.                  |
| **Session Attacks**            | Attacker steals or abuses a user's session.                                         |
| **Security Misconfiguration**  | Incorrect server/app settings create security vulnerabilities.                      |
| **Sensitive Data Exposure**    | Passwords, tokens, personal data, etc. are exposed or poorly protected.             |
| **Path Traversal**             | Attacker accesses files outside the intended directory.                             |
| **File Upload Attacks**        | Malicious files are uploaded and potentially executed or used to attack the server. |
| **DoS / DDoS**                 | Overloads the application/server so legitimate users cannot access it.              |

### 🧠 Easy Classification

**Client-side:** XSS
**Database:** SQL Injection
**Authentication:** Broken Authentication, Session Attacks
**Authorization:** Broken Authorization
**Server/File System:** Path Traversal, Malicious File Upload
**Availability:** DoS / DDoS

### 🎤 Interview Point

**Q: What are some common security threats in web applications?**
**A:** Common threats include **XSS, SQL Injection, CSRF, broken authentication and authorization, session attacks, security misconfiguration, sensitive data exposure, path traversal, file upload attacks, and DoS/DDoS**.
