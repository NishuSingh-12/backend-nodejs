Why ObjectId is Not a String?

ObjectId is a special BSON data type in MongoDB.
It looks like a string, but it is actually an ObjectId object, not a String.
Example
{
\_id: ObjectId("6874abcd1234ef5678901234")
}

Here:

"6874abcd1234ef5678901234"

looks like a string, but MongoDB stores it as an ObjectId.

Why Not Use String?
String
{
\_id: "6874abcd1234ef5678901234"
}
ObjectId
{
\_id: ObjectId("6874abcd1234ef5678901234")
}

ObjectId provides:

Unique identifier
Smaller storage than equivalent strings
Fast indexing and searching
Contains timestamp information
Finding by ObjectId

❌ Wrong

db.users.find({
\_id: "6874abcd1234ef5678901234"
})

✅ Correct

db.users.find({
\_id: ObjectId("6874abcd1234ef5678901234")
})

Because \_id is stored as an ObjectId, not a String.

Check Data Type
typeof ObjectId()

Output:

object

Quick Revision
ObjectId ≠ String

ObjectId:
✓ Unique
✓ BSON Type
✓ Fast Search
✓ Contains Timestamp

Find by ID:
ObjectId("id")
Not "id"

Q. Why do we use ObjectId("id") instead of "id" when querying by \_id?

A. Because \_id is stored as the BSON type ObjectId, not as a String, so the query type must match the stored data type. ✅
