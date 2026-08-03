# Understanding Model Middleware

## Definition

**Model Middleware** is middleware that runs on **Model methods** (not on documents or queries). It is triggered when methods like `insertMany()`, `bulkWrite()`, or `createCollection()` are called.

> **Model Middleware = Runs on Model methods**

---

# Why Use Model Middleware?

- Perform actions before or after bulk operations.
- Log model-level operations.
- Validate or modify data before insertion.

---

# Common Model Middleware

| Middleware         | Triggered On               |
| ------------------ | -------------------------- |
| `insertMany`       | `Model.insertMany()`       |
| `bulkWrite`        | `Model.bulkWrite()`        |
| `createCollection` | `Model.createCollection()` |

---

# Pre Model Middleware

Runs **before** the model operation.

### Example

```javascript
userSchema.pre("insertMany", function (next, docs) {
  console.log("Before Inserting Documents");
  next();
});
```

### Explanation

- Runs before `insertMany()`.
- `docs` contains the documents to be inserted.
- `next()` continues execution.

---

# Post Model Middleware

Runs **after** the model operation.

### Example

```javascript
userSchema.post("insertMany", function (docs) {
  console.log("Documents Inserted Successfully");
});
```

### Explanation

- Runs after `insertMany()`.
- `docs` contains the inserted documents.

---

# Model Middleware Flow

```text
Model.insertMany()
        ↓
Pre Model Middleware
        ↓
MongoDB Operation
        ↓
Post Model Middleware
```

---

# Real-World Example

Log the number of inserted documents.

```javascript
userSchema.post("insertMany", function (docs) {
  console.log(`${docs.length} documents inserted.`);
});
```

---

# Important Notes

- Runs on **Model methods** only.
- Used for **bulk operations**.
- Different from **Document Middleware** and **Query Middleware**.

---

# Model vs Document vs Query Middleware

| Model Middleware        | Document Middleware        | Query Middleware  |
| ----------------------- | -------------------------- | ----------------- |
| Runs on Model           | Runs on Document           | Runs on Query     |
| Example: `insertMany()` | Example: `save()`          | Example: `find()` |
| Bulk operations         | Single document operations | Query operations  |

---

# Interview Questions

### Q1. What is Model Middleware?

Model Middleware is middleware that runs before or after **Model methods** like `insertMany()` and `bulkWrite()`.

### Q2. Which methods commonly trigger Model Middleware?

- `insertMany()`
- `bulkWrite()`
- `createCollection()`

### Q3. Is `save()` a Model Middleware?

**No.** `save()` triggers **Document Middleware**.

### Q4. When should you use Model Middleware?

When performing **bulk operations** or implementing logic related to Model methods.

---

# Quick Revision

- **Model Middleware** → Runs on Model methods.
- **Common Methods** → `insertMany()`, `bulkWrite()`, `createCollection()`
- **`pre()`** → Before operation.
- **`post()`** → After operation.
- **Use** → Bulk insert, logging, validation.

---

## ⭐ Interview One-Liner

> **Model Middleware is a Mongoose hook that runs before or after Model methods such as `insertMany()`, `bulkWrite()`, and `createCollection()`. It is mainly used for bulk operations and model-level logic.**
