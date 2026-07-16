MongoDB Limits

MongoDB has certain limits to ensure good performance and efficient storage.

1. Document Size Limit
   A single MongoDB document can be a maximum of 16 MB.
   {
   name: "Nishu"
   }

Why?

Prevents storing extremely large documents.
Improves performance and memory usage. 2. Nesting Depth Limit
Documents can be nested up to 100 levels.
{
a: {
b: {
c: {
// nested objects
}
}
}
}

Use: Prevents excessively complex document structures.

3. Database Name Limit
   Database names must be less than 64 characters.

✅ Good

collegeDB
studentDB

❌ Avoid very long database names.

4. Collection Name Restrictions

Collection names:

Cannot contain $
Cannot contain the null character (\0)
Should be meaningful and unique

✅ Examples

users
students
orders 5. Index Limit
A collection can have a maximum of 64 indexes.

Why?

Too many indexes increase storage usage and slow down write operations. 6. Compound Index Limit
A compound index can contain a maximum of 32 fields.

Example:

db.users.createIndex({
name: 1,
age: 1
})
Why Are These Limits Important?
Improve performance
Reduce memory usage
Prevent database misuse
Ensure efficient querying

Most Asked Interview Questions
What is the maximum size of a MongoDB document?

Answer: 16 MB

What is the maximum nesting depth in MongoDB?

Answer: 100 levels

How many indexes can a collection have?

Answer: 64 indexes

How many fields can a compound index contain?

Answer: 32 fields

Quick Revision
MongoDB Limits

Document Size → 16 MB
Nesting Depth → 100 Levels
Database Name → < 64 Characters
Indexes Collection → 64
Compound Index → 32 Fields

Most Asked:
16 MB Document Size
100 Levels Nesting

One-Line Revision

MongoDB's most important limits are 16 MB document size, 100 levels of nesting, 64 indexes per collection, and 32 fields in a compound index. ✅
