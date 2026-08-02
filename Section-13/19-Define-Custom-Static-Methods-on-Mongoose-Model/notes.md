# Define Custom Static Methods on Mongoose Model

## Definition

**Static Methods** are user-defined functions added to a Mongoose **Model**. Unlike document methods, they are called **directly on the Model**, not on individual documents.

> **Static Method = Function available on the Model**

---

# Why Use Static Methods?

- Reuse common database queries.
- Keep business logic inside the Model.
- Avoid repeating query code.

---

# Syntax

```javascript
schema.statics.methodName = function () {
  // method logic
};
```

---

# Example

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

userSchema.statics.findAdults = function () {
  return this.find({ age: { $gte: 18 } });
};
```

### Explanation

- `statics` → Adds a static method to the Model.
- `this` → Refers to the **Model**.
- `findAdults()` → Returns all users whose age is 18 or above.

---

# Using the Static Method

```javascript
const users = await User.findAdults();

console.log(users);
```

### Output

Returns all users with **age ≥ 18**.

---

# Another Example

```javascript
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};
```

### Usage

```javascript
const user = await User.findByEmail("john@example.com");
```

---

# Custom Method vs Static Method

| Custom Method                  | Static Method                  |
| ------------------------------ | ------------------------------ |
| Defined using `schema.methods` | Defined using `schema.statics` |
| Called on a document           | Called on the Model            |
| `this` refers to the document  | `this` refers to the Model     |

---

# Important Notes

- Defined using `schema.statics`.
- Called directly on the **Model**.
- Can perform database queries.
- Uses `this` to refer to the Model.

---

# Advantages

- Reusable query logic.
- Cleaner code.
- Better code organization.
- Easy maintenance.

---

# Interview Questions

### Q1. What are Static Methods in Mongoose?

Static Methods are user-defined functions that are added to a Model and called directly on the Model.

### Q2. How do you define a Static Method?

Using `schema.statics`.

### Q3. What does `this` refer to in a Static Method?

`this` refers to the **Model**.

### Q4. Can a Static Method be called on a document?

**No.** It can only be called on the **Model**.

---

# Quick Revision

- **Static Method** → Model function.
- Defined using → `schema.statics`
- Called on → Model (`User.findAdults()`)
- `this` → Model
- Used for → Reusable database queries.

---

## ⭐ Interview Tip

### Difference Between Custom Method & Static Method

| Feature          | Custom Method           | Static Method        |
| ---------------- | ----------------------- | -------------------- |
| Defined with     | `schema.methods`        | `schema.statics`     |
| Called on        | Document                | Model                |
| `this` refers to | Document                | Model                |
| Use Case         | Document-specific logic | Database query logic |

---

## ⭐ Interview One-Liner

> **Static Methods in Mongoose are user-defined functions added using `schema.statics`. They are called directly on the Model and are commonly used to implement reusable database query logic.**
