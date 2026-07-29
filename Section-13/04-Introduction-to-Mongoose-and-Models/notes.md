- Introduction to Mongoose and Models
  Definition
  Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a simple way to define schemas, create models, and interact with MongoDB.

Mongoose = Connect Node.js with MongoDB

What is a Model?

A Model is a JavaScript object created from a Schema. It is used to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB collection.

Model = Interface to interact with a MongoDB collection

What is a Schema?

A Schema defines the structure of documents in a MongoDB collection.

Example:

Name : String
Age : Number
Email: String
Flow
Node.js
↓
Mongoose
↓
Model
↓
MongoDB
Why Use Mongoose?
Easy database interaction
Schema validation
Cleaner code
Built-in CRUD methods
Supports middleware and hooks
Advantages
Easy to use
Data validation
Better code organization
Simplifies database operations
Supports relationships between collections

Q1. What is Mongoose?
Ans: Mongoose is an ODM library for Node.js that provides a structured way to interact with MongoDB.

Q2. What is a Model?
Ans: A Model is a JavaScript object created from a Schema that is used to perform CRUD operations on a MongoDB collection.

Q3. What is the difference between Schema and Model?

Schema Model
Defines document structure Interacts with the database
Blueprint Working object
Revision (10 Seconds)
Mongoose → ODM for MongoDB

Schema → Defines document structure

Model → Performs CRUD operations

Flow:
Node.js → Mongoose → Model → MongoDB

Mongoose is an ODM library that helps Node.js applications define schemas, create models, and interact with MongoDB in a structured way.
