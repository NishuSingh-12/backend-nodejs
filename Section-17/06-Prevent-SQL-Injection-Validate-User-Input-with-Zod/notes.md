# 🛡️ Prevent SQL Injection: Validate User Input with Zod

### 📌 Basic Idea

**Zod** can validate user input before it is used in database queries.

**Flow:**

`User Input → Zod Validation → Application Logic → Database`

This prevents unexpected input from reaching the database.

---

### 🔹 Example

```js
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

const result = userSchema.safeParse(req.body);

if (!result.success) {
  return res.status(400).json({
    error: "Invalid input",
  });
}
```

Only validated data should be used for further processing.

---

### ⚠️ Important

**Zod validation alone does NOT prevent SQL Injection.**

For SQL queries, always use **parameterized queries / prepared statements**.

❌ Avoid:

```js
const query = `SELECT * FROM users WHERE email = '${email}'`;
```

✅ Use parameterized queries:

```js
const query = "SELECT * FROM users WHERE email = ?";
db.query(query, [email]);
```

### 🧠 Remember

> **Zod validates the input; parameterized queries prevent SQL Injection.**

### 🎤 Interview Point

**Q: Can Zod alone prevent SQL Injection?**

**A:** No. Zod validates the structure and format of user input, but SQL Injection should primarily be prevented using **parameterized queries or prepared statements**.
