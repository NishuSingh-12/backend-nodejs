import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const result = await resend.emails.send({
  from: "Anurag Singh <contact@procodrr.dev>",
  to: "procodrr@gmail.com",
  subject: "Hello ProCodrr",
  html: "<p>It works!</p>",
});

console.log(result);
