import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "nishu.frontend@gmail.com",
    pass: "iwnz kbdn nkkr xlyh",
  },
});

const info = await transporter.sendMail({
  from: "Nishu Singh <nishu.frontend@gmail.com>",
  to: "tomarneeshu662@gmail.com",
  subject: "Hello Nishu",
  html: `<h2 style="color:green; border:2px solid pink; padding:10px; border-radius:4px">How are you</h2>`,
});

console.log("Message sent: %s", info.messageId);
