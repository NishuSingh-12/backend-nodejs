Cursor Methods in MongoDB

A Cursor is returned by the find() method. Cursor methods are used to control and process query results.

1. toArray()

Converts all documents into an array.

const users = await db
.collection("users")
.find()
.toArray();

Use: Get all documents at once.

2. next()

Returns the next document from the cursor.

const user = await cursor.next();

Use: Read one document at a time.

3. hasNext()

Checks if more documents exist.

await cursor.hasNext();

Use: Useful with loops.

4. forEach()

Executes a function for each document.

await cursor.forEach(doc => {
console.log(doc);
});

Use: Process all documents.

5. limit()

Limits the number of documents returned.

db.users.find().limit(5);

Use: Return only the first 5 documents.

6. skip()

Skips a specified number of documents.

db.users.find().skip(10);

Use: Skip the first 10 documents.

Quick Revision
find() → Returns Cursor

toArray() → Cursor → Array
next() → Next Document
hasNext() → Check More Documents
forEach() → Loop Through Documents
limit(n) → Return n Documents
skip(n) → Skip n Documents
Most Used in Node.js
await db
.collection("users")
.find()
.toArray();

Remember: find() returns a Cursor, and toArray() converts it into an array. ✅
