# Verifying Email Using OTP

**Email verification using OTP** means sending a **One-Time Password** to the user's email and asking them to enter it to verify that they have access to that email address.

> **OTP = One-Time Password**

---

## How It Works

```text
User Registers
     ↓
Generate OTP
     ↓
Save OTP + Expiry
     ↓
Send OTP to Email
     ↓
User Enters OTP
     ↓
Verify OTP
     ↓
Email Verified ✅
```

---

## 1. Generate OTP

A common approach is to generate a 6-digit OTP.

```javascript
const otp = Math.floor(100000 + Math.random() * 900000);

console.log(otp);
```

Example:

```text
482731
```

For security-sensitive applications, use Node's `crypto` module instead of `Math.random()`:

```javascript
import crypto from "crypto";

const otp = crypto.randomInt(100000, 1000000).toString();
```

---

## 2. Store OTP

You can store the OTP temporarily in the database along with an expiry time.

```javascript
await OTP.create({
  email,
  otp,
  expiresAt: new Date(Date.now() + 5 * 60 * 1000),
});
```

Here, the OTP expires after **5 minutes**.

Example:

```text
email: user@example.com
otp: 482731
expiresAt: 5 minutes later
```

---

## 3. Send OTP by Email

Using Nodemailer:

```javascript
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Email Verification OTP",
  text: `Your verification OTP is ${otp}. It expires in 5 minutes.`,
});
```

---

## 4. Verify OTP

When the user submits the OTP:

```javascript
const record = await OTP.findOne({
  email,
  otp,
});

if (!record) {
  return res.status(400).json({
    error: "Invalid OTP",
  });
}
```

Check expiration:

```javascript
if (record.expiresAt < new Date()) {
  return res.status(400).json({
    error: "OTP expired",
  });
}
```

If everything is correct:

```javascript
await User.updateOne({ email }, { isEmailVerified: true });

await OTP.deleteOne({
  _id: record._id,
});
```

---

## Complete Flow

```text
Register
   ↓
Generate 6-digit OTP
   ↓
Store OTP with expiry
   ↓
Send OTP to email
   ↓
User enters OTP
   ↓
Check OTP
   ↓
Check expiry
   ↓
Correct?
  ↓       ↓
 Yes      No
  ↓       ↓
Verify   Reject
Email
```

---

## Important Security Practices

- OTP should have a **short expiration time**.
- OTP should be **one-time use**.
- Delete OTP after successful verification.
- Limit the number of OTP attempts.
- Limit how often a user can request a new OTP.
- Avoid storing OTPs in plain text for higher-security systems; store a hash of the OTP instead.

---

## Example User Model

```javascript
const userSchema = new mongoose.Schema({
  email: String,

  password: String,

  isEmailVerified: {
    type: Boolean,
    default: false,
  },
});
```

Initially:

```text
isEmailVerified: false
```

After successful OTP verification:

```text
isEmailVerified: true
```

---

# Quick Revision

- **OTP = One-Time Password**
- Generate OTP → Usually 6 digits
- Send OTP → Email
- Store OTP → With expiry
- Verify OTP → Match + expiry check
- Successful verification → `isEmailVerified = true`
- Delete OTP → After successful use
- Add **rate limiting** and attempt limits

### ⭐ Interview Answer

> **Email verification using OTP involves generating a temporary one-time code, sending it to the user's email, storing it with an expiry time, and verifying the code entered by the user. If it is valid and not expired, the user's email is marked as verified.**
