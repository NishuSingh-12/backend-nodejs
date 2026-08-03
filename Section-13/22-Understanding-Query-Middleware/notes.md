# Understanding Query Middleware

## Definition

**Query Middleware** is middleware that runs **before or after a Mongoose query** is executed. It is triggered by query methods like `find()`, `findOne()`, `updateOne()`, `deleteOne()`, etc.

> **Query Middleware = Runs on a query**

---

# Why Use Query Middleware?

- Log database queries.
- Modify queries automatically.
- Apply filters before execution.
- Execute custom logic before/after queries.

---

# Common Query Middleware

| Middleware         | Triggered On               |
| ------------------ | -------------------------- |
| `find`             | `Model.find()`             |
| `findOne`          | `Model.findOne()`          |
| `updateOne`        | `Model.updateOne()`        |
| `findOneAndUpdate` | `Model.findOneAndUpdate()` |
| `deleteOne`        | `Model.deleteOne()`        |

---

# Pre Query Middleware

Runs **before** the query executes.

### Example

```javascript
userSchema.pre("find", function (next) {
  console.log("Finding Users...");
  next();
});
```

### Explanation

- Runs before `find()`.
- `this` refers to the **query object**.
- `next()` continues execution.

---

# Post Query Middleware

Runs **after** the query executes.

### Example

```javascript
userSchema.post("find", function (docs) {
  console.log("Users Found");
});
```

### Explanation

- Runs after `find()`.
- `docs` contains the query result.

---

# Accessing the Query

In Query Middleware, `this` refers to the **Mongoose Query object**.

### Example

```javascript
userSchema.pre("find", function (next) {
  console.log(this.getQuery());
  next();
});
```

### Output

```javascript
{
  age: {
    $gte: 18;
  }
}
```

---

# Query Middleware Flow

```text
Model.find()
      ↓
Pre Query Middleware
      ↓
MongoDB Query
      ↓
Post Query Middleware
      ↓
Result
```

---

# Real-World Example

Automatically filter active users.

```javascript
userSchema.pre("find", function (next) {
  this.where({ isActive: true });
  next();
});
```

### Result

Every `find()` query automatically returns only active users.

---

# Important Notes

- Runs on **query methods**, not document methods.
- `this` refers to the **Query object**.
- Used for query-specific logic.
- Cannot directly access document fields using `this`.

---

# Document Middleware vs Query Middleware

| Document Middleware | Query Middleware  |
| ------------------- | ----------------- |
| Runs on a document  | Runs on a query   |
| `this` = Document   | `this` = Query    |
| Example: `save()`   | Example: `find()` |

---

# Interview Questions

### Q1. What is Query Middleware?

Query Middleware is middleware that runs before or after a Mongoose query is executed.

### Q2. What does `this` refer to in Query Middleware?

`this` refers to the **Mongoose Query object**.

### Q3. Which methods trigger Query Middleware?

`find()`, `findOne()`, `updateOne()`, `deleteOne()`, `findOneAndUpdate()`, etc.

### Q4. Can Query Middleware access document fields directly?

**No.** It only has access to the **Query object**.

---

# Quick Revision

- **Query Middleware** → Runs on queries.
- **`this`** → Query object.
- **`pre()`** → Before query.
- **`post()`** → After query.
- **Common Use** → Logging, filtering, modifying queries.

---

## ⭐ Interview One-Liner

> **Query Middleware is a Mongoose hook that runs before or after query execution. It operates on the Query object and is commonly used for logging, filtering, and modifying database queries before they reach MongoDB.**
