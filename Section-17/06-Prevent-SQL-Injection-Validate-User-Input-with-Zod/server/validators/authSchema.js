import { email, z } from "zod/v4";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string(),
});

export const otpSchema = z.object({
  email: z.email("Please enter a valid email"),
  otp: z
    .string("Please enter a valid 4 digit OTP String ")
    .regex(/^\d{4}$/, "Please enter a valid 4 digit OTP"),
});

export const registerSchema = loginSchema.extend({
  name: z
    .string()
    .min(3, "Name should be 3 characters")
    .max(100, "Name can be at max 100 charcaters."),
  otp: z
    .string("Please enter a valid 4 digit OTP String ")
    .regex(/^\d{4}$/, "Please enter a valid 4 digit OTP"),
});
