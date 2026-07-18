- Finding Invalid Documents in a Collection
  Sometimes a collection contains documents that do not follow the schema validation rules.
  MongoDB provides the $nor + $jsonSchema combination to find such invalid documents.

Syntax
db.collection.find({
$nor: [
    {
      $jsonSchema: {
        // schema rules
      }
    }
  ]
})
Logic
$jsonSchema → Find Valid Documents

$nor + $jsonSchema → Find Invalid Documents
Example

Suppose valid documents should have:

{
name: String,
age: Int
}
Find Invalid Documents
db.users.find({
$nor: [
{
$jsonSchema: {
bsonType: "object",
required: ["name", "age"],
properties: {
name: {
bsonType: "string"
},
age: {
bsonType: "int"
}
}
}
}
]
})
Example Data
Valid ✅
{
name: "Nishu",
age: 22
}
Invalid ❌
{
name: "Nishu"
}
{
name: "Nishu",
age: "22"
}

The query returns only the invalid documents.

Why Use It?
Find bad data already stored in the collection.
Clean up old records.
Verify data quality before migrations.

Quick Revision
Find Valid Documents
↓
$jsonSchema

Find Invalid Documents
↓
$nor + $jsonSchema

Purpose:
✓ Find Bad Data
✓ Data Cleanup
✓ Validation Check

Q. How do you find documents that do not match a schema in MongoDB?

A.

db.collection.find({
$nor: [{ $jsonSchema: schema }]
})

This returns all documents that violate the schema rules. ✅
