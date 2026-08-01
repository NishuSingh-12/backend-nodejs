# What are Virtuals in Mongoose?

## Definition

**Virtuals** are **computed properties** that are **not stored in the MongoDB database**. They are generated dynamically when a document is accessed.

> **Virtual = Calculated field (Not stored in Database)**

---

# Why Use Virtuals?

- Create derived fields.
- Avoid storing duplicate data.
- Keep the database clean.

---

# Syntax

```javascript
schema.virtual("virtualName").get(function () {
  // return computed value
});
```

---

# Example

```javascript
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
```

### Explanation

- `fullName` is a **virtual field**.
- It combines `firstName` and `lastName`.
- It is **not saved** in MongoDB.

---

# Output

```javascript
{
  firstName: "John",
  lastName: "Doe",
  fullName: "John Doe"
}
```

> `fullName` is generated automatically.

---

# Virtual Setter

A virtual can also set values.

### Example

```javascript
userSchema.virtual("fullName").set(function (value) {
  const parts = value.split(" ");
  this.firstName = parts[0];
  this.lastName = parts[1];
});
```

### Explanation

If you assign:

```javascript
user.fullName = "John Doe";
```

It automatically sets:

```javascript
firstName = "John";
lastName = "Doe";
```

---

# Important Notes

- Virtuals are **not stored** in MongoDB.
- They are calculated at runtime.
- Can have **getter** and **setter** methods.
- Useful for computed values.

---

# Advantages

- No duplicate data.
- Cleaner database.
- Easy to create computed fields.
- Improves code readability.

---

# Interview Questions

### Q1. What are Virtuals in Mongoose?

Virtuals are computed properties that are **not stored in the database**.

### Q2. Are Virtuals saved in MongoDB?

**No.** They are generated dynamically.

### Q3. What is the difference between a normal field and a Virtual?

| Normal Field      | Virtual               |
| ----------------- | --------------------- |
| Stored in MongoDB | Not stored in MongoDB |
| Actual data       | Computed data         |

### Q4. Can Virtuals have getters and setters?

**Yes.** They support both **getter** and **setter** methods.

---

# Quick Revision

- **Virtual** → Computed field.
- **Not stored** in MongoDB.
- Created using `schema.virtual()`.
- Supports **get()** and **set()**.
- Used for derived values like `fullName`.

---

## ⭐ Interview One-Liner

> **Virtuals in Mongoose are computed properties created using `schema.virtual()`. They are generated dynamically, are not stored in MongoDB, and are commonly used for derived fields like `fullName`.**
