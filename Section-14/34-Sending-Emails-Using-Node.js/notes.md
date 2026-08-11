# Sending Emails Using Node.js

Node.js can send emails using an **email service/library** such as **Nodemailer**.

> **Nodemailer** is a popular Node.js library for sending emails.

---

## 1. Install Nodemailer

```bash
npm install nodemailer
```

---

## 2. Import Nodemailer

```javascript
import nodemailer from "nodemailer";
```

---

## 3. Create a Transporter

A **transporter** is responsible for connecting to the email service and sending emails.

```javascript
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

For security, keep email credentials in `.env`:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

> Do not hard-code passwords or email credentials in your source code.

---

## 4. Send an Email

```javascript
const info = await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: "user@example.com",
  subject: "Welcome!",
  text: "Welcome to our application.",
});

console.log(info.messageId);
```

### Important Properties

| Property  | Purpose                  |
| --------- | ------------------------ |
| `from`    | Sender's email           |
| `to`      | Receiver's email         |
| `subject` | Email subject            |
| `text`    | Plain-text email content |
| `html`    | HTML email content       |

---

## 5. HTML Email

You can also send HTML content:

```javascript
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: "user@example.com",
  subject: "Welcome",
  html: "<h1>Welcome to our website!</h1>",
});
```

---

## Complete Example

```javascript
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async () => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "user@example.com",
    subject: "Welcome",
    text: "Welcome to our application!",
  });

  console.log("Email sent:", info.messageId);
};

sendEmail();
```

---

## Common Use Cases

Node.js applications commonly send emails for:

- ✉️ Account verification
- 🔑 Password reset
- 👋 Welcome emails
- 🔔 Notifications
- 📩 Login/security alerts
- 🧾 Order confirmations

---

## Quick Revision

```text
Node.js
   ↓
Nodemailer
   ↓
Transporter
   ↓
Email Service
   ↓
Receiver
```

### Remember

- **Nodemailer** → Node.js email library
- `createTransport()` → Configure email service
- `sendMail()` → Send email
- Use `.env` → Store credentials securely
- `text` → Plain-text email
- `html` → HTML email

### ⭐ Interview Answer

> **Nodemailer is a Node.js library used to send emails. We create a transporter with the email service credentials and use `sendMail()` to send an email to the recipient.**
