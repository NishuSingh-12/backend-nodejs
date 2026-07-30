- Schema and Types in Mongoose
  Definition
  A Schema is a blueprint that defines the structure of documents in a MongoDB collection, including field names, data types, and validation rules.

Schema = Blueprint of a MongoDB document

What is a Data Type?

A Data Type specifies the kind of value a field can store.

Common Mongoose Data Types
Type Description
String Stores text
Number Stores numeric values
Boolean Stores true or false
Date Stores date and time
Array Stores multiple values
ObjectId Stores references to other documents
Buffer Stores binary data
Mixed Stores any type of data
Example Schema
const userSchema = new mongoose.Schema({
name: String,
age: Number,
email: String,
isAdmin: Boolean
});
Why Use a Schema?
Defines document structure.
Validates data.
Maintains data consistency.
Makes code easier to understand.
Flow
Schema
↓
Model
↓
MongoDB Collection
Advantages
Data validation
Organized structure
Prevents invalid data
Easy maintenance

Q1. What is a Schema in Mongoose?
Ans: A Schema is a blueprint that defines the structure and rules of documents in a MongoDB collection.

Q2. What is the purpose of a Schema?
Ans: To define fields, data types, and validation rules for documents.

Q3. Name some common Mongoose data types.
Ans: String, Number, Boolean, Date, Array, ObjectId, Buffer, and Mixed.

Revision (10 Seconds)
Schema
• Blueprint of documents
• Defines fields
• Defines data types
• Validates data

Common Types
• String
• Number
• Boolean
• Date
• Array
• ObjectId
• Buffer
• Mixed

A Mongoose Schema defines the structure, data types, and validation rules for documents, while data types specify what kind of values each field can store.
