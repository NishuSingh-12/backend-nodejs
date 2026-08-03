# Document Versioning in Mongoose

## Definition

**Document Versioning** is a Mongoose feature that keeps track of document updates using the **`__v` (version key)** field.

> **Document Versioning = Tracks document versions using `__v`**

---

# What is `__v`?

`__v` is the **version key** automatically added by Mongoose to every document.

### Example

```javascript
{
  "_id": "...",
  "name": "John",
  "email": "john@gmail.com",
  "__v": 0
}
```

### Explanation

- `__v: 0` → Initial version.
- It changes when Mongoose updates the document version.

---

# How Versioning Works

```text
New Document
      ↓
__v = 0
      ↓
Document Updated
      ↓
__v = 1
      ↓
Updated Again
      ↓
__v = 2
```

---

# Why Use Document Versioning?

- Tracks document changes.
- Helps prevent update conflicts.
- Supports optimistic concurrency.
- Maintains data consistency.

---

# Example

```javascript
const user = await User.findById(id);

user.name = "John Doe";

await user.save();
```

### Result

Before:

```javascript
__v: 0;
```

After Save:

```javascript
__v: 1;
```

---

# Disable Version Key

If you don't want the `__v` field:

```javascript
const userSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  },
);
```

### Explanation

`versionKey: false` disables the automatic `__v` field.

---

# Important Notes

- `__v` is added automatically by Mongoose.
- Default value is `0`.
- Used internally by Mongoose.
- Can be disabled using `versionKey: false`.

> **Note:** By default, `__v` does **not** increase on every type of update (such as `updateOne()` or `findOneAndUpdate()`). It is primarily used with document `save()` operations and for features like optimistic concurrency.

---

# Advantages

- Tracks document versions.
- Helps detect update conflicts.
- Improves data consistency.
- Useful in concurrent applications.

---

# Interview Questions

### Q1. What is Document Versioning in Mongoose?

Document Versioning is a feature that tracks document versions using the `__v` field.

### Q2. What is the default version key in Mongoose?

`__v`

### Q3. Can the version key be disabled?

**Yes.** Using:

```javascript
versionKey: false;
```

### Q4. What is the default value of `__v`?

`0`

---

# Quick Revision

- **Document Versioning** → Tracks document versions.
- **Version Key** → `__v`
- **Default Value** → `0`
- **Disable** → `versionKey: false`
- **Purpose** → Prevent update conflicts and support optimistic concurrency.

---

## ⭐ Interview One-Liner

> **Document Versioning in Mongoose uses the `__v` field to track document versions. It helps manage concurrent updates and maintain data consistency, especially when using document `save()` operations.**
