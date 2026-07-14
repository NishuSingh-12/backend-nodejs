Create Operation in MongoDB
Create Operation is used to insert data into a collection.
MongoDB provides methods to add one or multiple documents.
Insert One Document
db.students.insertOne({
name: "Nishu",
age: 22
})
Insert Multiple Documents
db.students.insertMany([
{ name: "Nishu", age: 22 },
{ name: "Ravi", age: 23 }
])

Quick Revision
Create Operation → Insert Data

insertOne() → Insert One Document
insertMany() → Insert Multiple Documents

Keyword: Create = Insert Documents ✅
