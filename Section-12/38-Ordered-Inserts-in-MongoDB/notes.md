Ordered Inserts in MongoDB

=> Ordered Inserts means MongoDB inserts documents one by one in sequence.
If an error occurs, MongoDB stops inserting the remaining documents.

Syntax
db.users.insertMany(
[
{ _id: 1, name: "Nishu" },
{ _id: 2, name: "Ravi" },
{ _id: 1, name: "Priya" } // Duplicate _id
],
{ ordered: true }
)

ordered: true is the default behavior.

How It Works?
Documents
[
{ _id: 1, name: "Nishu" },
{ _id: 2, name: "Ravi" },
{ _id: 1, name: "Priya" }
]
Result
✓ Nishu Inserted
✓ Ravi Inserted
✗ Error on Priya (Duplicate \_id)

Stopped

MongoDB stops after the error and does not process any remaining documents.

Why Use Ordered Inserts?
Maintain insertion order.
Useful when documents depend on previous inserts.
Ensures operations happen sequentially.

Quick Revision
Ordered Inserts

insertMany([...], { ordered: true })

Behavior:

1. Insert First Document
2. Insert Second Document
3. Error Occurs
4. Stop Processing

Default → ordered: true
Ordered vs Unordered
Ordered Unordered
Stops on Error Continues on Error
Sequential Insert Parallel/Independent Insert
ordered: true ordered: false

Q. What happens if an error occurs during an ordered insert?

A. MongoDB stops inserting the remaining documents and returns an error. ✅
