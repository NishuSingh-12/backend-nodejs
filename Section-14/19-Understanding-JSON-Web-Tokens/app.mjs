import jwt from "jsonwebtoken";
import { createHmac } from "node:crypto";

const token = jwt.sign({ name: "Nishu" }, "secret", {
  algorithm: "HS256",
  expiresIn: 10,
});

console.log(token);
// console.log(
//   jwt.verify(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmlzaHUiLCJpYXQiOjE3ODYxNjMzNzV9.iHFV2ClSwZ45v9Xq2do55gNBTxrUaBEmHEDGLW0eI4s",
//     "secret",
//   ),
// );

// console.log(
//   Buffer.from(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmlzaHUiLCJpYXQiOjE3ODYxNjMyMjB9",
//     "base64url",
//   ).toString(),
// );

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmlzaHUiLCJpYXQiOjE3ODYxNjMzNzV9.iHFV2ClSwZ45v9Xq2do55gNBTxrUaBEmHEDGLW0eI4s";

// const test = createHmac("sha256", "secret")
//   .update(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmlzaHUiLCJpYXQiOjE3ODYxNjMzNzV9",
//   )
//   .digest("base64url");

// console.log(test);
