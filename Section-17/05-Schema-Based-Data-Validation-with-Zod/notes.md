# 🔐 Schema-Based Data Validation with Zod

### 📌 What is Zod?

**Zod** is a TypeScript-first schema validation library used to **validate and parse data** at runtime.

It helps ensure that incoming data has the **expected type, format, and structure**.

---

### 🔹 Why Use Zod?

- Validates user input before processing it.
- Ensures data has the correct **type and structure**.
- Prevents invalid or unexpected data from reaching the database.
- Provides clear validation errors.
- Helps protect against attacks caused by untrusted input.

---

### 🔹 Define a Schema

```js
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(18),
});
```

The schema defines what valid data should look like.

---

### 🔹 Validate Data

```js
const result = userSchema.safeParse(req.body);

if (!result.success) {
  return res.status(400).json({
    error: result.error,
  });
}
```

If validation succeeds, the validated data can be safely used.

---

### 🔹 Common Zod Validators

| Validator     | Purpose              |
| ------------- | -------------------- |
| `z.string()`  | String value         |
| `z.number()`  | Number value         |
| `z.boolean()` | Boolean value        |
| `z.array()`   | Array                |
| `z.object()`  | Object               |
| `.email()`    | Valid email          |
| `.min()`      | Minimum value/length |
| `.max()`      | Maximum value/length |
| `.optional()` | Field is optional    |

---

### 🛡️ Security Benefit

Zod helps ensure that **untrusted client input matches the expected schema** before it reaches application logic or database queries.

> **Validate user input before trusting or processing it.**

### 🎤 Interview Point

**Q: What is Zod and why is it used?**

**A:** Zod is a schema validation library used to validate the **type, structure, and format of data at runtime**. It helps ensure that only valid and expected data enters the application.
