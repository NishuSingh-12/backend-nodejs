MongoDB CRUD Operations in Node.js

After connecting Node.js to MongoDB, we can perform CRUD (Create, Read, Update, Delete) operations on collections.

1. Create (Insert Data)
   await db.collection("users").insertOne({
   name: "Nishu",
   age: 22
   });

Use: Insert a new document.

2. Read (Fetch Data)
   const users = await db.collection("users").find().toArray();

Use: Fetch all documents.

3. Update (Modify Data)
   await db.collection("users").updateOne(
   { name: "Nishu" },
   { $set: { age: 23 } }
   );

Use: Update an existing document.

4. Delete (Remove Data)
   await db.collection("users").deleteOne({
   name: "Nishu"
   });

Use: Delete a document.

Quick Revision
Create → insertOne()

Read → find().toArray()

Update → updateOne()
$set

Delete → deleteOne()
Most Asked Interview Question

Keyword: CRUD = Create, Read, Update, Delete ✅
