What is Upsert in MongoDB?

=> Upsert = Update + Insert
=> If the document exists → Update it
=> If the document does not exist → Insert a new document

Syntax
db.users.updateOne(
{ name: "Nishu" },
{ $set: { age: 22 } },
{ upsert: true }
)
Case 1: Document Exists
Before
{
name: "Nishu",
age: 20
}
Query
db.users.updateOne(
{ name: "Nishu" },
{ $set: { age: 22 } },
{ upsert: true }
)
After
{
name: "Nishu",
age: 22
}

Result: Document Updated ✅

Case 2: Document Does Not Exist

Collection:

[]
Query
db.users.updateOne(
{ name: "Nishu" },
{ $set: { age: 22 } },
{ upsert: true }
)
Result
{
name: "Nishu",
age: 22
}

Result: New Document Inserted ✅

Why Use Upsert?
Avoid checking whether a document exists.
Update if found, otherwise create it.
Reduces extra database queries.

Quick Revision
Upsert = Update + Insert

Document Exists?
Yes → Update

Document Exists?
No → Insert

Option:
{ upsert: true }
Most Asked Interview

Q. What is the purpose of upsert: true?

A. It tells MongoDB to update the matching document if it exists, or insert a new document if no matching document is found. ✅
