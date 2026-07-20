- Relational vs Non-Relational Databases
  Feature Relational Database (SQL) Non-Relational Database (NoSQL)
  Data Format Tables (Rows & Columns) Documents, Key-Value, Graph, etc.
  Schema Fixed Schema Flexible Schema
  Relationships Uses Foreign Keys Usually Embedded Documents
  Scaling Vertical Scaling Horizontal Scaling
  Query Language SQL Database-specific Queries
  Examples MySQL, PostgreSQL, Oracle MongoDB, Redis, Cassandra

* Relational Database (SQL)
  Data is stored in tables.
  Tables contain rows and columns.
  Schema must be defined before storing data.
  Example
  Users Table
  id name
  1 Nishu
  Orders Table
  id user_id product
  1 1 Laptop

Relationship: user_id links Orders to Users.

- Non-Relational Database (MongoDB)
  Data is stored as documents.
  No fixed schema is required.
  Related data can be stored in the same document.
  Example
  {
  name: "Nishu",
  orders: [
  {
  product: "Laptop"
  }
  ]
  }
  Why SQL?

✅ Strong relationships

✅ Structured data

✅ ACID compliance

Examples:

Banking Systems
Hospital Management
ERP Systems
Why NoSQL?

✅ Flexible schema

✅ High scalability

✅ Handles large amounts of data

Examples:

Social Media Apps
E-commerce Platforms
Real-Time Applications

Quick Revision
SQL (Relational)

Table
Rows & Columns
Fixed Schema
MySQL, PostgreSQL

NoSQL (Non-Relational)

Documents
Flexible Schema
Horizontal Scaling
MongoDB, Redis

Q. Why is MongoDB called a Non-Relational Database?

A. Because MongoDB stores data in documents instead of tables and does not require a fixed schema or traditional table relationships. ✅

Easy Memory Trick
SQL → Tables
NoSQL → Documents

SQL → Fixed Schema
NoSQL → Flexible Schema

SQL → MySQL
NoSQL → MongoDB

⭐ One-Line Revision:
Relational databases use tables with fixed schemas, whereas non-relational databases use flexible document-based storage.
