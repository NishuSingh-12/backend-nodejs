Update Operation in MongoDB
Update Operation is used to modify existing documents in a collection.
MongoDB provides updateOne() and updateMany() methods.
Update One Document
db.students.updateOne(
{ name: "Nishu" },
{ $set: { age: 23 } }
)
Update Multiple Documents
db.students.updateMany(
  { age: 22 },
  { $set: { status: "Active" } }
)
$set
Used to update the value of a field.
Creates the field if it does not exist.
Interview Definition

Update Operation in MongoDB is used to modify existing documents using methods like updateOne() and updateMany().

Quick Revision
Update Operation → Modify Data

updateOne() → Update One Document
updateMany() → Update Multiple Documents
$set → Change/Add Field Value

Keyword: Update = Modify Documents ✅
