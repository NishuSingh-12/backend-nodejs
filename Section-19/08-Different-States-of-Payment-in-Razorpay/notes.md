## Different States of Payment in Razorpay

A Razorpay payment can have different **statuses** during its lifecycle.

### 1. `created`

- Payment has been created.
- Payment process has started but is not completed.

### 2. `authorized`

- Payment method has been successfully authorized.
- Amount may not yet be captured.

### 3. `captured` ✅

- Payment is successfully captured.
- Amount is credited/settled according to Razorpay's process.
- This is generally treated as a **successful payment**.

### 4. `failed` ❌

- Payment could not be completed.
- Example: insufficient balance, bank decline, etc.

### Payment Flow

```text
created
   ↓
authorized
   ↓
captured ✅

        ↘
         failed ❌
```

### ⭐ Important

For your application, **don't mark an order as paid just because the frontend says payment was successful**. Verify the payment on the backend.

Razorpay payment states include **created, authorized, captured, and failed**.
