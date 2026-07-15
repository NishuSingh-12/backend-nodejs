Running MongoShell Scripts in JS Files
MongoDB commands can be written inside a .js file.
The file can then be executed using mongosh.
Useful for automation, testing, and database setup scripts.
Example (script.js)
use("collegeDB");

db.students.insertOne({
name: "Nishu",
age: 22
});
Run the Script
mongosh script.js
Use Case
Insert sample data
Create collections
Run multiple MongoDB commands automatically

Quick Revision
.js File → MongoDB Commands

Run:
mongosh script.js

Use:
✓ Automation
✓ Database Setup
✓ Sample Data Insertion

Keyword: mongosh file.js → Run MongoDB Script ✅
