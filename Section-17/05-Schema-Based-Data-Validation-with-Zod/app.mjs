import * as z from "zod";

// const schema = z
//   .string("Please enter a valid string.")
//   .min(3,"Please enter atleast 3 characters.")
//   .max(6)
//   .startsWith("aa");

// const schema = z
//   .string("Please enter a valid string.")
//   .regex(/^\d{4}$/, "Please enter a valid 4 digit numbers.");

const schema = z.object({
  name: z
    .string("Please enter a valid string.")
    .min(3, "Please enter atleast 3 characters.")
    .max(100, "Please enter max 100 characters"),
  age: z.number().lt(120, "Age can not be greater than 119."),
  email: z.email().optional(),
});

// const rowData = "aanss";
const rowData = { name: "Nishu singh", age: 50, email: "abcd@gmail.com" };

// try {
//   const validatedData = schema.parse(rowData);
//   console.log(validatedData);
// } catch (err) {
//   console.log(err.issues);
// }

// NO Need to use try catch

const result = schema.safeParse(rowData);

if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error.issues);
}

console.log("Program end");
