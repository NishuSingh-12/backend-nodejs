# What is Middleware in Mongoose?

## Definition

**Middleware** (also called **Hooks**) are functions that execute **before or after** a Mongoose operation such as `save()`, `updateOne()`, `deleteOne()`, or `find()`.

> **Middleware = Function that runs before or after a database operation**

---

# Why Use Middleware?

- Validate data.
- Hash passwords.
- Log database operations.
- Automatically update fields.
- Execute custom logic before/after queries.

---

# Types of Middleware

### 1. Pre Middleware

Runs **before** an operation.

```javascript id="2dmb1k"
schema.pre("save", function (next) {
  console.log("Before Save");
  next();
});
```

### Explanation

- Executes before `save()`.
- `next()` passes control to the next middleware.

---

### 2. Post Middleware

Runs **after** an operation.

```javascript id="6a57m8"
schema.post("save", function (doc) {
  console.log("Document Saved");
});
```

### Explanation

- Executes after the document is saved.
- `doc` contains the saved document.

---

# Middleware Flow

```text id="wsd6ux"
Document
    ↓
Pre Middleware
    ↓
Database Operation
    ↓
Post Middleware
```

---

# Common Middleware Events

| Middleware  | Triggered On          |
| ----------- | --------------------- |
| `save`      | Saving a document     |
| `validate`  | Validation            |
| `find`      | Finding documents     |
| `findOne`   | Finding one document  |
| `updateOne` | Updating one document |
| `deleteOne` | Deleting one document |

---

# Example (Hash Password Before Save)

```javascript id="2g6x0o"
userSchema.pre("save", function (next) {
  // Hash password here
  next();
});
```

**Use:** Encrypt the password before storing it in MongoDB.

---

# Important Notes

- `pre()` → Runs **before** an operation.
- `post()` → Runs **after** an operation.
- `next()` is required in **pre middleware** (when using the callback style).
- Middleware helps automate common tasks.

---

# Advantages

- Cleaner code.
- Reusable logic.
- Automatic validation.
- Better security (e.g., password hashing).
- Easy logging and auditing.

---

# Interview Questions

### Q1. What is Middleware in Mongoose?

Middleware is a function that runs before or after a database operation.

### Q2. What is the difference between `pre()` and `post()`?

- **`pre()`** → Executes **before** an operation.
- **`post()`** → Executes **after** an operation.

### Q3. Why is `next()` used in `pre()` middleware?

It passes control to the next middleware or the actual database operation.

### Q4. Give one real-world use of Middleware.

Hashing passwords before saving a user document.

---

# Quick Revision

- **Middleware (Hooks)** → Runs before/after database operations.
- **`pre()`** → Before operation.
- **`post()`** → After operation.
- **`next()`** → Continues execution in pre middleware.
- **Common Use** → Password hashing, validation, logging.

---

## ⭐ Interview One-Liner

> **Middleware in Mongoose is a hook that executes before or after database operations, allowing developers to perform tasks such as validation, password hashing, logging, and other custom logic automatically.**
