- Adding Basic Schema Validation in MongoDB
  Schema Validation is used to restrict what kind of documents can be inserted into a collection.
  It ensures documents follow a specific structure and data types.

  Example

Allow only:

{
name: "Nishu",
age: 22
}

where:

name must be a String
age must be a Number
Create Collection with Validation
db.createCollection("users", {
validator: {
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
})
Valid Document ✅
db.users.insertOne({
name: "Nishu",
age: 22
})

Inserted successfully.

Invalid Document ❌
db.users.insertOne({
name: "Nishu"
})

Error because age is required.

Why Use Schema Validation?
Prevent invalid data.
Ensure correct data types.
Maintain consistency in collections.

Quick Revision
Schema Validation

validator
↓
$jsonSchema

required → Mandatory Fields

bsonType:
string
int
double
bool
array
object

Purpose:
✓ Data Validation
✓ Consistency
✓ Error Prevention

Q. What is the purpose of $jsonSchema in MongoDB?

A. It is used to validate documents by defining required fields and allowed BSON data types before data is inserted or updated. ✅
