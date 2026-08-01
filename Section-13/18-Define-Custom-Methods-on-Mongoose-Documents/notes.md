# Define Custom Methods on Mongoose Documents

## Definition

**Custom Methods** are user-defined functions added to a Mongoose **Schema**. These methods become available on every **document** created from that model.

> **Custom Method = Function available on every document**

---

# Why Use Custom Methods?

- Reuse common logic.
- Keep code clean.
- Avoid repeating the same code.

---

# Syntax

```javascript
schema.methods.methodName = function () {
  // method logic
};
```

---

# Example

```javascript
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

userSchema.methods.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
```

### Explanation

- `methods` → Adds a custom method to the schema.
- `this` → Refers to the current document.
- `getFullName()` → Returns the full name.

---

# Using the Custom Method

```javascript
const user = await User.findById(id);

console.log(user.getFullName());
```

### Output

```text
John Doe
```

---

# Another Example

```javascript
const userSchema = new mongoose.Schema({
  age: Number,
});

userSchema.methods.isAdult = function () {
  return this.age >= 18;
};
```

### Usage

```javascript
const user = await User.findById(id);

console.log(user.isAdult());
```

### Output

```text
true
```

---

# Important Notes

- Defined using `schema.methods`.
- Available only on **documents**, not on the model.
- Can access document fields using `this`.

---

# Advantages

- Reusable code.
- Cleaner business logic.
- Easy to maintain.
- Improves code readability.

---

# Interview Questions

### Q1. What are Custom Methods in Mongoose?

Custom Methods are user-defined functions added to a schema that can be used by every document.

### Q2. How do you define a Custom Method?

Using `schema.methods`.

### Q3. What does `this` refer to inside a Custom Method?

`this` refers to the current document.

### Q4. Can a Custom Method be called on the Model?

**No.** It can only be called on a **document instance**.

---

# Quick Revision

- **Custom Method** → User-defined document function.
- Defined using → `schema.methods`
- Uses → `this` (current document)
- Called on → Document instance
- Purpose → Reusable business logic

---

## ⭐ Interview One-Liner

> **Custom Methods in Mongoose are user-defined functions added using `schema.methods`. They are available on every document instance and are used to implement reusable document-specific logic.**
