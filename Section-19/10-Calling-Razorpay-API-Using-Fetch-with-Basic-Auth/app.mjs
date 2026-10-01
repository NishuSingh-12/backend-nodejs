import "dotenv/config";
const response = await fetch("https://api.razorpay.com/v1/payments?count=2", {
  headers: {
    Authorization: `Basic ${process.env.AUTH_TOKEN}`,
  },
});
const data = await response.json();
console.log(data);
