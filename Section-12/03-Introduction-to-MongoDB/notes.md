Introduction to MongoDB
What is MongoDB?

MongoDB is a NoSQL, document-oriented database that stores data in the form of documents instead of tables and rows.

Unlike SQL databases (MySQL, PostgreSQL), MongoDB stores data in JSON-like documents.

Example Document
{
"name": "Nishu",
"age": 22,
"skills": ["HTML", "CSS", "JavaScript"]
}
Why MongoDB?
Flexible Schema
Easy to store JSON data
High Performance
Scalable
Works well with Node.js
Key Terms in MongoDB
Database

A container that holds collections.

Example: collegeDB

Collection

A group of related documents.

Example: students

Collection in MongoDB ≈ Table in SQL

Document

A single record stored in a collection.

{
"name": "Nishu",
"course": "BCA"
}

Document in MongoDB ≈ Row/Record in SQL

MongoDB Structure
Database
└── Collection
└── Document
Example
collegeDB
└── students
├── { name: "Nishu", age: 22 }
├── { name: "Ravi", age: 23 }
SQL vs MongoDB
SQL MongoDB
Database Database
Table Collection
Row Document
Column Field
Features of MongoDB
Document-Oriented Database
Flexible Schema
High Performance
Scalability
JSON-like Data Storage
Interview Questions
What is MongoDB?

MongoDB is a NoSQL document-oriented database that stores data in JSON-like documents.

Is MongoDB SQL or NoSQL?

MongoDB is a NoSQL database.

What is a Collection?

A collection is a group of documents in MongoDB.

What is a Document?

A document is a single record stored in a collection.

Why is MongoDB popular with Node.js?

Because both work with JSON-like data, making integration easy and efficient.

Quick Revision
MongoDB = NoSQL Database

Database → Collection → Document

Collection ≈ Table
Document ≈ Row

Stores Data in JSON-like Documents

Benefits:
✓ Flexible Schema
✓ Scalable
✓ High Performance
✓ Easy with Node.js
30-Second Interview Answer

MongoDB is a NoSQL, document-oriented database that stores data in JSON-like documents. Instead of tables and rows, it uses collections and documents. It provides a flexible schema, high scalability, and integrates well with Node.js because both use JSON-like data structures.
