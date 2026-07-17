- Operators in MongoDB
  Operators are special keywords used to filter, compare, update, and manipulate data in MongoDB.
  Operators start with $.

1. Comparison Operators

Used to compare values.

Operator Meaning
$eq	Equal To
$ne Not Equal To
$gt	Greater Than
$gte Greater Than Equal To
$lt	Less Than
$lte Less Than Equal To
$in	Match Any Value in Array
$nin Not in Array
Example
db.users.find({
age: { $gt: 18 }
})

Use: Find users older than 18.

2. Logical Operators

Used to combine conditions.

Operator Meaning
$and	All Conditions True
$or Any Condition True
$not	Negate Condition
$nor All Conditions False
Example
db.users.find({
$or: [
{ age: 18 },
{ age: 22 }
]
})

Use: Find users whose age is 18 or 22.

3. Element Operators

Used to check fields and data types.

Operator Meaning
$exists	Field Exists?
$type Check BSON Type
Example
db.users.find({
age: { $exists: true }
})

Use: Find documents that contain an age field.

4. Update Operators

Used with update operations.

Operator Meaning
$set	Set Value
$unset Remove Field
$inc	Increment Value
$rename Rename Field
Example
db.users.updateOne(
{},
{ $set: { age: 22 } }
)

Use: Update age.

Most Important Operators
$gt    → Greater Than
$lt → Less Than
$gte   → Greater Than Equal
$lte → Less Than Equal
$in    → Multiple Values
$or → OR Condition
$exists→ Check Field
$set → Update Value
$inc → Increase Value

Quick Revision
Comparison:
$eq $ne $gt $gte $lt $lte $in

Logical:
$and $or $not

Element:
$exists $type

Update:
$set $unset $inc $rename

Q. Which MongoDB operators are used most frequently?

A.

$gt
$lt
$in
$or
$exists
$set
$inc

✅ Remember: For practical MongoDB work, $gt, $lt, $in, $or, and $set are used the most.
