# Using `ref` and `populate()` to Fetch Referenced Fields

## Definition

In Mongoose, **`ref`** is used to create a **reference (relationship)** between two collections, and **`populate()`** is used to fetch the referenced document.

> **`ref` = Creates a relationship**
> **`populate()` = Fetches the related document**

---

# Why Use `ref` and `populate()`?

- Create relationships between collections.
- Avoid duplicate data.
- Fetch related documents easily.

---

# Example

### User Schema

```javascript
const userSchema = new mongoose.Schema({
  name: String,
});
```

### Post Schema

```javascript
const postSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
```

### Explanation

- `ObjectId` → Stores the ID of another document.
- `ref: "User"` → References the **User** model.

---

# Using `populate()`

```javascript
const posts = await Post.find().populate("author");
```

### Explanation

- `find()` → Fetches all posts.
- `populate("author")` → Replaces the `author` ObjectId with the complete User document.

---

# Before and After `populate()`

### Without `populate()`

```javascript
{
  title: "Learn Mongoose",
  author: "6891ab23cd45ef6789012345"
}
```

Only the ObjectId is returned.

---

### With `populate()`

```javascript
{
  title: "Learn Mongoose",
  author: {
    _id: "6891ab23cd45ef6789012345",
    name: "John"
  }
}
```

The complete User document is returned.

---

# Selecting Specific Fields

```javascript
const posts = await Post.find().populate("author", "name");
```

### Explanation

Only the `name` field of the referenced User document is returned.

---

# Flow

```text
Post Collection
      │
 author(ObjectId)
      │
      ▼
populate()
      │
      ▼
User Collection
      │
      ▼
Complete User Data
```

---

# Advantages

- Reduces data duplication.
- Creates relationships between collections.
- Fetches related documents easily.
- Cleaner and more organized database design.

---

# Interview Questions

### Q1. What is `ref` in Mongoose?

`ref` is used to create a reference between two collections.

### Q2. What is `populate()`?

`populate()` fetches the referenced document and replaces the ObjectId with the actual data.

### Q3. Why is `ObjectId` used with `ref`?

It stores the ID of the referenced document.

### Q4. Can `populate()` return only specific fields?

**Yes.** Example:

```javascript
.populate("author", "name")
```

---

# Quick Revision

- **`ref`** → Creates relationship between collections.
- **`ObjectId`** → Stores referenced document ID.
- **`populate()`** → Fetches related document.
- **`populate("author")`** → Returns complete User data.
- **`populate("author", "name")`** → Returns only the `name` field.

---

## ⭐ Interview One-Liner

> **`ref` is used to create relationships between collections using `ObjectId`, and `populate()` retrieves the referenced documents by replacing the ObjectId with the actual document data.**
