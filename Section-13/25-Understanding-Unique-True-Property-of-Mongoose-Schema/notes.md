# Understanding `unique: true` Property in Mongoose Schema

## Definition

The **`unique: true`** property creates a **unique index** on a field, ensuring that **duplicate values cannot be stored** in that field.

> **`unique: true` = Prevents duplicate values**

---

# Why Use `unique: true`?

- Prevent duplicate data.
- Maintain data integrity.
- Commonly used for **email**, **username**, and **phone number**.

---

# Syntax

```javascript
const schema = new mongoose.Schema({
  fieldName: {
    type: String,
    unique: true,
  },
});
```

---

# Example

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
});
```

### Explanation

- `email` must be unique.
- MongoDB creates a **unique index** on the `email` field.
- Duplicate emails cannot be inserted.

---

# Example

### First Document ✅

```javascript
{
  name: "John",
  email: "john@gmail.com"
}
```

### Second Document ❌

```javascript
{
  name: "Mike",
  email: "john@gmail.com"
}
```

### Result

```text
Error: Duplicate key error
```

MongoDB rejects the second document.

---

# Important Notes

- `unique: true` **is not a validator**.
- It creates a **MongoDB unique index**.
- Existing duplicate data must be removed before creating a unique index.
- If the index already exists, changing `unique` in the schema alone won't update it automatically.

---

# Advantages

- Prevents duplicate values.
- Improves data consistency.
- Useful for login systems.
- Easy to implement.

---

# Interview Questions

### Q1. What does `unique: true` do in Mongoose?

It creates a **unique index** and prevents duplicate values in a field.

### Q2. Is `unique: true` a validator?

**No.** It creates a MongoDB **unique index**, not a Mongoose validator.

### Q3. Which fields commonly use `unique: true`?

- Email
- Username
- Phone Number

### Q4. What happens if duplicate data is inserted?

MongoDB throws a **duplicate key error**.

---

# Quick Revision

- **`unique: true`** → Prevents duplicate values.
- Creates → **Unique Index**
- Common Fields → Email, Username, Phone
- Duplicate Insert → **Duplicate Key Error**
- **Not** a validator.

---

## ⭐ Interview One-Liner

> **`unique: true` in Mongoose creates a MongoDB unique index that prevents duplicate values from being stored in a field. It is an index option, not a validation rule.**
