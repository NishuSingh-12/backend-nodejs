## Creating Stripe Account: Step-by-Step Guide

### 1. Create a Stripe Account

Stripe is a payment platform used to accept and manage online payments.

**Steps:**

1. Go to the Stripe website.
2. Click **Sign up**.
3. Enter your email, name, and password.
4. Verify your email address.
5. Complete the required business/account information.
6. Complete verification if required.
7. Open the **Stripe Dashboard**.

### 2. Get API Keys

From the Stripe Dashboard, open the **Developers → API keys** section.

You will mainly use:

- **Publishable Key** → Can be used in frontend/client-side code.
- **Secret Key** → Used for secure server-side API requests.

```env
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
```

### 3. Test Mode

Stripe provides **Test Mode** for development.

```text
Test Mode → Test payments
Live Mode → Real payments
```

Use test mode while developing and testing your application.

### 4. Security ⚠️

Never expose the **Secret Key** in frontend code or commit it to GitHub.

Store it in an environment variable:

```js
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
```

### 5. Important Terms

| Term                | Meaning                                       |
| ------------------- | --------------------------------------------- |
| **Publishable Key** | Used for client-side Stripe operations        |
| **Secret Key**      | Used for authenticated server-side operations |
| **Test Mode**       | Used for development/testing                  |
| **Live Mode**       | Used for real transactions                    |
| **Dashboard**       | Manage payments, customers, keys, etc.        |

**Q: What is the difference between Stripe Publishable Key and Secret Key?**

**Answer:** The **Publishable Key** can be exposed to the frontend, while the **Secret Key** must remain private and should only be used on the backend.
