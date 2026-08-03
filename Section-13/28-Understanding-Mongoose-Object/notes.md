# Understanding Mongoose Object

## Definition

The **Mongoose Object** is the main object provided by the Mongoose library. It provides methods to **connect to MongoDB, define schemas, create models, and perform database operations**.

> **Mongoose Object = Main interface for working with MongoDB**

---

# Importing Mongoose

### Example

```javascript
const mongoose = require("mongoose");
```

OR (ES Module)

```javascript
import mongoose from "mongoose";
```

---

# Common Methods & Properties

| Method/Property  | Purpose                    |
| ---------------- | -------------------------- |
| `connect()`      | Connect to MongoDB         |
| `disconnect()`   | Disconnect from MongoDB    |
| `Schema`         | Create a schema            |
| `model()`        | Create a model             |
| `connection`     | Access database connection |
| `Types.ObjectId` | Create/ObjectId type       |
| `set()`          | Configure Mongoose options |

---

# Example

### Connect to MongoDB

```javascript
await mongoose.connect("mongodb://127.0.0.1:27017/myDB");
```

### Create Schema

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
```

### Create Model

```javascript
const User = mongoose.model("User", userSchema);
```

---

# Mongoose Workflow

```text
Import Mongoose
       ↓
Connect Database
       ↓
Create Schema
       ↓
Create Model
       ↓
Perform CRUD Operations
```

---

# Why Use the Mongoose Object?

- Connects Node.js to MongoDB.
- Defines schemas and models.
- Provides built-in validation.
- Simplifies database operations.
- Supports middleware, virtuals, and population.

---

# Important Notes

- `mongoose` is the entry point of the Mongoose library.
- Most Mongoose features are accessed through this object.
- Every Mongoose application starts by importing the `mongoose` object.

---

# Interview Questions

### Q1. What is the Mongoose Object?

The **Mongoose Object** is the main object of the Mongoose library used to connect to MongoDB, define schemas, create models, and manage database operations.

### Q2. Which method is used to connect to MongoDB?

`mongoose.connect()`

### Q3. Which method creates a model?

`mongoose.model()`

### Q4. What is `mongoose.Schema`?

It is used to define the structure of documents in a MongoDB collection.

---

# Quick Revision

- **Mongoose Object** → Main interface of Mongoose.
- **`connect()`** → Connect database.
- **`Schema`** → Define document structure.
- **`model()`** → Create model.
- **`connection`** → Database connection object.

---

## ⭐ Interview One-Liner

> **The Mongoose Object is the main interface of the Mongoose library. It provides methods to connect to MongoDB, define schemas, create models, and perform database operations.**
