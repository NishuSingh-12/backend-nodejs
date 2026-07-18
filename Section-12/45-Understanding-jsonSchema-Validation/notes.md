- Understanding $jsonSchema Validation
  $jsonSchema is used to validate documents in a MongoDB collection.
  It defines what fields are required and what data types those fields must have.
  Invalid documents are rejected.

Example
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
Important Keywords
bsonType

Defines the data type.

name: {
bsonType: "string"
}

Meaning: name must be a string.

required

Defines mandatory fields.

required: ["name", "age"]

Meaning: Both name and age must be present.

properties

Defines rules for each field.

properties: {
name: {
bsonType: "string"
}
}
Valid Document ✅
db.users.insertOne({
name: "Nishu",
age: 22
})
Invalid Document ❌
db.users.insertOne({
name: "Nishu"
})

Reason: age field is missing.

Quick Revision
$jsonSchema

bsonType → Data Type

required → Mandatory Fields

properties → Field Rules

Valid Data → Inserted
Invalid Data → Rejected
Most Important Line
$jsonSchema is used to validate documents before they are inserted or updated in a collection.

✅ Keyword: $jsonSchema = Schema Validation in MongoDB
