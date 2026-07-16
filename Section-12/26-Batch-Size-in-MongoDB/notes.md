Batch Size in MongoDB

Batch Size is the number of documents MongoDB returns in a single batch from a cursor.
Instead of sending all documents at once, MongoDB sends them in batches to improve performance and reduce memory usage.
Syntax
db.users.find().batchSize(5)
What Happens?
MongoDB returns 5 documents at a time.
When those documents are processed, the next batch is fetched automatically.
Example
db.users.find().batchSize(10)

Use: Retrieve documents in groups of 10.

Why Use Batch Size?
Reduces memory consumption.
Improves performance for large datasets.
Avoids loading all documents at once.
Difference: limit() vs batchSize()
Method Purpose
limit(5) Return only 5 documents total
batchSize(5) Return documents in batches of 5
Example
db.users.find().limit(5)

Returns only 5 documents.

db.users.find().batchSize(5)

May return all documents, but 5 at a time.

Quick Revision
batchSize(n)

Purpose:
✓ Control Data Fetching
✓ Reduce Memory Usage
✓ Improve Performance

limit(5) → Total 5 Documents
batchSize(5) → 5 Documents Per Batch
Most Asked Interview Point
db.users.find().batchSize(10)

Meaning: MongoDB fetches query results in batches of 10 documents instead of loading all documents at once. ✅
