- CRUD Operations Using Mongoose
  Definition
  CRUD stands for Create, Read, Update, and Delete. These are the four basic operations used to manage data in MongoDB using Mongoose.

CRUD = Create + Read + Update + Delete

1. Create

Purpose: Insert a new document into the collection.

Methods:

create()
save()

Example:

User.create({ name: "John", age: 25 }); 2. Read

Purpose: Retrieve data from the collection.

Methods:

find()
findOne()
findById()

Example:

User.find(); 3. Update

Purpose: Modify existing documents.

Methods:

updateOne()
updateMany()
findByIdAndUpdate()
findOneAndUpdate()

Example:

User.updateOne({ name: "John" }, { age: 26 }); 4. Delete

Purpose: Remove documents from the collection.

Methods:

deleteOne()
deleteMany()
findByIdAndDelete()
findOneAndDelete()

Example:

User.deleteOne({ name: "John" });
CRUD Flow
Application
↓
Mongoose Model
↓
MongoDB
(Create | Read | Update | Delete)
Advantages
Easy database management
Simple API
Supports async operations
Built-in validation

Q1. What does CRUD stand for?
Ans: Create, Read, Update, and Delete.

Q2. Which method is used to fetch all documents?
Ans: find()

Q3. Which method inserts a new document?
Ans: create() or save()

Q4. Which method updates a document by ID?
Ans: findByIdAndUpdate()

Q5. Which method deletes a document by ID?
Ans: findByIdAndDelete()

Revision (10 Seconds)
CRUD

Create → create(), save()

Read → find(), findOne(), findById()

Update → updateOne(), updateMany(),
findOneAndUpdate(),
findByIdAndUpdate()

Delete → deleteOne(), deleteMany(),
findOneAndDelete(),
findByIdAndDelete()

CRUD represents the four basic database operations—Create, Read, Update, and Delete. In Mongoose, these operations are performed using built-in model methods such as create(), find(), updateOne(), and deleteOne().
