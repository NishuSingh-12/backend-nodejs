## Using the Razorpay API

**Razorpay API** allows your backend to programmatically create and manage payments, orders, refunds, customers, etc.

### 1. Install Razorpay

```bash
npm install razorpay
```

### 2. Setup Razorpay

```js
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
```

### 3. Create an Order

```js
const order = await razorpay.orders.create({
  amount: 50000, // ₹500
  currency: "INR",
});
```

The API returns an **Order ID**, which is used by the frontend to start checkout.

### 4. Basic Payment Flow

```text
Backend
  ↓
Razorpay API → Create Order
  ↓
Frontend → Checkout
  ↓
Customer → Payment
  ↓
Backend → Verify Payment
  ↓
Database → Update Status
```

### 5. Important Razorpay APIs

| API               | Purpose                |
| ----------------- | ---------------------- |
| **Orders API**    | Create/manage orders   |
| **Payments API**  | Fetch/manage payments  |
| **Refunds API**   | Create refunds         |
| **Customers API** | Manage customers       |
| **Webhooks**      | Receive payment events |

### 6. Security ⚠️

- Keep **Key Secret** on the backend.
- Use environment variables.
- Verify payments/signatures on the server.
- Never trust only frontend payment responses.

**Razorpay API allows a backend application to interact programmatically with Razorpay for operations such as creating orders, checking payments, processing refunds, and receiving payment events.**
