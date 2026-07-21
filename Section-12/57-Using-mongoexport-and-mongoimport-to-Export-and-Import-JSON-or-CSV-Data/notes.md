- Using mongoexport and mongoimport
  MongoDB provides tools to export and import data in JSON and CSV formats.

mongoexport → Export MongoDB data to JSON or CSV.
mongoimport → Import JSON or CSV data into MongoDB.

1. mongoexport (Export Data)
   Export to JSON
   mongoexport --db collegeDB --collection students --out students.json

Use: Exports all documents from the students collection into a JSON file.

Export to CSV
mongoexport --db collegeDB --collection students \
--type=csv \
--fields name,age,email \
--out students.csv

Use: Exports selected fields into a CSV file.

2. mongoimport (Import Data)
   Import JSON File
   mongoimport --db collegeDB --collection students --file students.json

Use: Imports data from a JSON file into the students collection.

Import CSV File
mongoimport --db collegeDB --collection students \
--type=csv \
--headerline \
--file students.csv

Use: Imports data from a CSV file.

Example
students.json
[
{
"name": "Nishu",
"age": 22
},
{
"name": "Ravi",
"age": 23
}
]
Import
mongoimport --db collegeDB --collection students --file students.json

Result:

db.students.find()
[
{ name: "Nishu", age: 22 },
{ name: "Ravi", age: 23 }
]
Difference Between Backup and Export
Tool Purpose
mongodump Full MongoDB Backup (BSON)
mongorestore Restore Backup
mongoexport Export to JSON/CSV
mongoimport Import JSON/CSV
ons.

Quick Revision
Export Data

mongoexport

JSON → students.json
CSV → students.csv

Import Data

mongoimport

JSON → Collection
CSV → Collection
Most Used Commands
mongoexport --db collegeDB --collection students --out students.json

mongoimport --db collegeDB --collection students --file students.json
Easy Memory Trick
mongodump → Database Backup

mongoexport → JSON / CSV Export

mongorestore → Restore Backup

mongoimport → Import JSON / CSV
One-Line Revision

mongoexport exports MongoDB data to JSON/CSV files, and mongoimport imports JSON/CSV files into MongoDB collections. ✅
