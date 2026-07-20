- Embedded vs Referenced Documents in MongoDB

MongoDB provides two ways to store related data:

Embedded Documents
Referenced Documents

Choosing the right model depends on how your application accesses data.

1. Embedded Documents
   Related data is stored inside the same document.
   Similar to nesting objects/arrays.
   Example
   {
   name: "Nishu",
   email: "nishu@gmail.com",
   orders: [
   {
   product: "Laptop",
   price: 50000
   },
   {
   product: "Mouse",
   price: 500
   }
   ]
   }
   Advantages

✅ Fast reads

✅ Single query fetches all data

✅ No joins required

Disadvantages

❌ Document size can grow

❌ Data duplication possible

Best Use Cases
User Profile + Address
Blog Post + Comments
Product + Reviews

When related data is usually accessed together.

2. Referenced Documents
   Related data is stored in separate collections.
   Documents are linked using IDs.
   Users Collection
   {
   \_id: 1,
   name: "Nishu"
   }
   Orders Collection
   {
   \_id: 101,
   userId: 1,
   product: "Laptop"
   }
   Relationship
   Users
   ↓
   userId
   ↓
   Orders
   Advantages

✅ Less duplication

✅ Better for large datasets

✅ Easier updates

Disadvantages

❌ Multiple queries needed

❌ Slightly slower reads

Best Use Cases
E-commerce Orders
Banking Systems
Large Applications with many relationships

When data is accessed separately.

How to Choose?
Use Embedded Documents When:
Data is small

Data is accessed together

One-to-Few Relationship
Use Referenced Documents When:
Data is large

Data changes frequently

One-to-Many or Many-to-Many Relationship

Quick Revision
Embedded

One Document
Fast Reads
No Joins

Example:
User + Address

Referenced

Multiple Collections
Uses IDs
Less Duplication

Example:
User + Orders

Q. When should you use embedded documents instead of referenced documents?

A. Use embedded documents when related data is small, closely connected, and usually retrieved together. Use referenced documents when data is large, changes frequently, or has complex relationships. ✅

Easy Memory Trick
Embedded → Together

Referenced → Separate

⭐ One-Line Revision:
Embedded documents prioritize read performance, while referenced documents prioritize flexibility and scalability. ✅
