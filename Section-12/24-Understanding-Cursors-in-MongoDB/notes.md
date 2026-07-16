Understanding Cursors in MongoDB
A Cursor is an object returned by the find() method.
It points to the query result and allows MongoDB to return documents one by one instead of loading all documents into memory at once.
Example
const cursor = db.users.find();

Here, cursor contains the query result, not the actual documents.

Convert Cursor to Array
const users = await db
.collection("users")
.find()
.toArray();

Use: Get all documents as an array.

Iterate Through Cursor
for await (const user of cursor) {
console.log(user);
}

Use: Read documents one by one.

Why Use Cursors?
Efficient for large datasets.
Avoids loading all documents into memory.
Improves performance.

Quick Revision
find() → Returns Cursor

Cursor → Points to Query Result

toArray() → Convert Cursor to Array

Benefits:
✓ Memory Efficient
✓ Better Performance
✓ Handles Large Data

Keyword: find() returns a Cursor, not an array. ✅
