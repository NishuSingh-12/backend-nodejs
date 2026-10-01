## Secure Payments with Razorpay Orders

A **Razorpay Order** helps securely connect your application's order with the payment.

### Secure Payment Flow

```text
Frontend
   ↓
Backend → Create Razorpay Order
   ↓
Razorpay Order ID
   ↓
Frontend → Razorpay Checkout
   ↓
Customer Pays
   ↓
Backend → Verify Signature
   ↓
Update Database
```

### Important Security Points

1. **Create orders on the backend**
   - Never create the Razorpay order directly from the frontend.

2. **Never expose Secret Key**

   ```env
   RAZORPAY_KEY_SECRET=your_secret
   ```

3. **Verify payment on the backend**
   - Verify `razorpay_signature`.
   - Don't trust only the frontend response.

4. **Use the Razorpay Order ID**
   - Connect the Razorpay payment with your application's order.

5. **Update database only after verification**

   ```text
   Payment Verified → Mark Order as Paid
   ```

**For secure Razorpay payments, create the order on the backend, keep the secret key private, verify the payment signature on the server, and update the database only after successful verification.**
