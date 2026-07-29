- Mongoose Query Buffering (Queries Wait for Database Connection)
  Definition
  Query Buffering is a feature in Mongoose where database queries are temporarily stored (buffered) until the MongoDB connection is established.

Query Buffering = Hold queries until the database is connected.

How It Works
Application Starts
↓
Query Executed
↓
Database Not Connected
↓
Mongoose Buffers Query
↓
Database Connected
↓
Query Executes
Example
User.find();

If MongoDB is not connected, Mongoose waits instead of immediately throwing an error. Once the connection is established, the query is executed.

Why Use Query Buffering?
Prevents immediate query failure.
Waits for the database connection.
Makes startup smoother.
Disadvantage
If the database never connects, queries may eventually timeout and throw an error.

Q1. What is Query Buffering in Mongoose?
Ans: Query Buffering is a feature where Mongoose temporarily stores database queries until the MongoDB connection is established.

Q2. What happens if a query is executed before the database connects?
Ans: Mongoose buffers (holds) the query and executes it after the connection is established.

Q3. Does Query Buffering wait forever?
Ans: No. If the database connection is not established within the timeout period, Mongoose throws an error.

Revision (10 Seconds)
Query Buffering

• Stores queries temporarily
• Waits for MongoDB connection
• Executes queries after connection
• Prevents immediate query failure

Query Buffering is a Mongoose feature that temporarily holds database queries until a successful MongoDB connection is established.
