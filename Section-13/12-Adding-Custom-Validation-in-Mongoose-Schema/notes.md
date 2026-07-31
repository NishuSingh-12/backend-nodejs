# Adding Custom Validation in Mongoose Schema

## Definition

**Custom Validation** allows you to create your **own validation rules** for schema fields when the built-in validators are not enough.

> **Custom Validation = User-defined validation rules**

---

# Why Use Custom Validation?

- Validate custom business rules.
- Prevent invalid data from being saved.
- Improve data integrity.

---

# Syntax

```javascript
fieldName: {
  type: DataType,
  validate: {
    validator: function(value) {
      // return true or false
    },
    message: "Validation Error Message"
  }
}
```

---

# Example

```javascript
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    validate: {
      validator: function (value) {
        return value.length >= 5;
      },
      message: "Username must be at least 5 characters long.",
    },
  },
});
```

### Explanation

- `validator` → Checks the value.
- Returns `true` → Validation passes.
- Returns `false` → Validation fails.
- `message` → Error message shown on failure.

---

# Another Example (Email Validation)

```javascript
email: {
  type: String,
  validate: {
    validator: function(value) {
      return value.includes("@");
    },
    message: "Invalid email address."
  }
}
```

---

# Validation Flow

```text
Input Data
     ↓
Custom Validator
     ↓
Valid? ── Yes → Save Document
     │
     └── No → Validation Error
```

---

# Advantages

- Create custom validation rules.
- Prevent invalid data.
- Improve database consistency.
- Flexible validation logic.

---

# Interview Questions

### Q1. What is Custom Validation in Mongoose?

Custom Validation allows you to define your own validation logic for schema fields.

### Q2. Which property is used for Custom Validation?

`validate`

### Q3. What should the validator function return?

- `true` → Validation successful.
- `false` → Validation failed.

### Q4. What is the purpose of the `message` property?

It defines the error message displayed when validation fails.

---

# Quick Revision

- **Custom Validation** → User-defined validation.
- **Property** → `validate`
- **validator()** → Returns `true` or `false`
- **message** → Error message on validation failure.

---

## ⭐ Interview One-Liner

> **Custom Validation in Mongoose allows developers to define their own validation logic using the `validate` property, ensuring that only valid data is saved to the database.**
