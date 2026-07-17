Using $in Operator in MongoDB

The $in operator is used to match multiple values in a single query.
It returns documents where the field value matches any value in the given array.
Syntax
db.collection.find({
field: {
$in: [value1, value2]
}
})
Example
Documents
[
{ name: "Nishu" },
{ name: "Ravi" },
{ name: "Priya" }
]
Query
db.users.find({
name: {
$in: ["Nishu", "Ravi"]
}
})
Result
[
{ name: "Nishu" },
{ name: "Ravi" }
]
Bulk Update Example
db.users.updateMany(
{
name: {
$in: ["Nishu", "Ravi"]
}
},
{
$set: {
isActive: true
}
}
)

Use: Update multiple documents matching the names.

Bulk Delete Example
db.users.deleteMany({
name: {
$in: ["Nishu", "Ravi"]
}
})

Use: Delete multiple matching documents.

Why Use $in?
Match multiple values in one query.
Avoid writing multiple conditions.
Useful for bulk find, update, and delete operations.

Quick Revision
$in → Match Multiple Values

Find:
{ name: { $in: ["Nishu", "Ravi"] } }

Used In:
✓ find()
✓ updateMany()
✓ deleteMany()

Purpose:
One Query → Multiple Values
Most Asked Interview Question
