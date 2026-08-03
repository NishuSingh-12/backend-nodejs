# Understanding Document Middleware

## Definition

**Document Middleware** is middleware that runs on a **Mongoose document (instance)**. It is triggered when document methods like `save()`, `validate()`, `updateOne()`, or `deleteOne()` are called.

> **Document Middleware = Runs on a document instance**

---

# Why Use Document Middleware?

- Validate document data.
- Hash passwords before saving.
- Update timestamps.
- Execute logic for a specific document.

---

# Common Document Middleware

| Middleware  | Triggered On                        |
| ----------- | ----------------------------------- |
| `save`      | Before/After `document.save()`      |
| `validate`  | Before/After validation             |
| `updateOne` | Before/After `document.updateOne()` |
| `deleteOne` | Before/After `document.deleteOne()` |

---

# Pre Document Middleware

Runs **before** the document operation.

### Example

```javascript
userSchema.pre("save", function (next) {
  console.log("Before Saving Document");
  next();
});
```

### Explanation

- Runs before `save()`.
- `this` refers to the current document.
- `next()` continues execution.

---

# Post Document Middleware

Runs **after** the document operation.

### Example

```javascript
userSchema.post("save", function (doc) {
  console.log("Document Saved");
});
```

### Explanation

- Runs after `save()`.
- `doc` is the saved document.

---

# Accessing Document Data

Inside **Document Middleware**, `this` refers to the current document.

### Example

```javascript
userSchema.pre("save", function (next) {
  console.log(this.name);
  next();
});
```

---

# Document Middleware Flow

```text
Document
    ↓
Pre Middleware
    ↓
Validation
    ↓
Database Operation
    ↓
Post Middleware
```

---

# Real-World Example

Hash password before saving a user.

```javascript
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
```

---

# Important Notes

- Runs on **document instances**.
- `this` refers to the current document.
- Triggered by methods like `save()`.
- Used for document-specific logic.

---

# Document Middleware vs Query Middleware

| Document Middleware | Query Middleware  |
| ------------------- | ----------------- |
| Runs on a document  | Runs on a query   |
| `this` = Document   | `this` = Query    |
| Example: `save()`   | Example: `find()` |

---

# Interview Questions

### Q1. What is Document Middleware?

Document Middleware is middleware that runs on a Mongoose document before or after document operations.

### Q2. What does `this` refer to in Document Middleware?

`this` refers to the current document.

### Q3. Which method commonly triggers Document Middleware?

`save()`

### Q4. Give one real-world use of Document Middleware.

Hashing passwords before saving a user document.

---

# Quick Revision

- **Document Middleware** → Runs on a document.
- **`this`** → Current document.
- **`pre()`** → Before operation.
- **`post()`** → After operation.
- **Common Use** → Password hashing, validation.

---

## ⭐ Interview One-Liner

> **Document Middleware is a Mongoose hook that runs before or after operations on a document instance. It is commonly used for validation, password hashing, and other document-specific logic.**
