- What is Schema?
  A Schema defines the structure of data in a database.
  It specifies what fields a document should have and what type of data those fields can store.

  Example Schema
  {
  name: String,
  age: Number,
  email: String
  }

Here:

name → String
age → Number
email → String
Why Do We Need a Schema?
Ensures consistent data structure.
Validates data before storing it.
Reduces errors and invalid data.
MongoDB and Schema

MongoDB is schema-less, which means documents in the same collection can have different structures.

Example
{
name: "Nishu"
}
{
name: "Ravi",
age: 22
}

Both documents can exist in the same collection.

Mongoose Schema

In Node.js, we often use Mongoose to define a schema.

const userSchema = {
name: String,
age: Number
};

Use: Enforces a fixed structure for documents.

Quick Revision
Schema → Blueprint of Data

Defines:
✓ Fields
✓ Data Types
✓ Structure

MongoDB → Schema-less

Mongoose → Creates Fixed Schema

Q. Is MongoDB schema-based?

A. No, MongoDB is schema-less. However, tools like Mongoose allow us to define schemas for validation and consistency. ✅
