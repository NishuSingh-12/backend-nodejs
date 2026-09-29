## Creating Razorpay Account: Step-by-Step Guide

### 1. Create Razorpay Account

Razorpay provides APIs and tools to accept online payments.

**Steps:**

1. Go to the Razorpay website.
2. Click **Sign Up**.
3. Enter your email, mobile number, and password.
4. Verify your email/mobile number.
5. Complete the required business/account details.
6. Complete the verification process if required.
7. Open the **Razorpay Dashboard**.

### 2. Get API Keys

After creating the account:

1. Open **Dashboard**.
2. Go to **Settings → API Keys**.
3. Generate API keys.
4. You will get:
   - **Key ID** → Used to identify your Razorpay account.
   - **Key Secret** → Used for authentication.

```env
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### 3. Test Mode

Razorpay provides **Test Mode** for development.

Use test credentials to test payments without making real transactions.

```text
Test Mode → Development
Live Mode → Real Payments
```

### 4. Security Important ⚠️

**Never expose the Key Secret in frontend code.**

Keep it in environment variables and use it only on the **backend/server**.

```js
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
```

**Q: What are Razorpay API keys?**
**Answer:** Razorpay provides a **Key ID** and **Key Secret** for authenticating API requests. The Key Secret must always remain private and should be stored securely on the server.
