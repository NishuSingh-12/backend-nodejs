import "dotenv/config";
import Razorpay from "razorpay";

const rzpInstance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

// const data = await rzpInstance.payments.all({ count: 2 });
// const data = await rzpInstance.payments.fetch("pay_ThoNBjRVZ7aCNM");
// const data = await rzpInstance.orders.fetch("pay_ThoNBjRVZ7aCNM");
// const data = await rzpInstance.refunds.all();
const data = await rzpInstance.payments.refund("pay_ThoNBjRVZ7aCNM");
console.log(data);
