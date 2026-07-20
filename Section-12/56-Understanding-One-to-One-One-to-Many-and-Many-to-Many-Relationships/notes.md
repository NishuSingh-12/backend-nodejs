- Understanding One-to-One, One-to-Many, and Many-to-Many Relationships

  describe how data in one collection is connected to data in another collection.

1. One-to-One (1:1)
   One document is related to only one document.
   Each side has exactly one matching record.
   Example
   User
   {
   \_id: 1,
   name: "Nishu"
   }

Profile
{
userId: 1,
gender: "Female",
age: 22
}
Relationship
1 User ↔ 1 Profile
Best Use Case
User ↔ Profile
Person ↔ Passport 2. One-to-Many (1:N)
One document can be related to many documents.
Most common relationship type.
Example
User
{
\_id: 1,
name: "Nishu"
}
Orders
{
userId: 1,
product: "Laptop"
}

{
userId: 1,
product: "Mouse"
}
Relationship
1 User
↓
Many Orders
Best Use Case
User → Orders
Teacher → Students
Category → Products 3. Many-to-Many (M:N)
Many documents can be related to many other documents.
Example
Students
{
\_id: 1,
name: "Nishu"
}
Courses
{
\_id: 101,
title: "Node.js"
}

A student can enroll in many courses, and a course can have many students.

Relationship
Many Students
↕
Many Courses
MongoDB Example
{
name: "Nishu",
courseIds: [101, 102]
}
{
title: "Node.js",
studentIds: [1, 2, 3]
}
Best Use Case
Students ↔ Courses
Users ↔ Roles
Products ↔ Tags
How to Identify Relationships?
One-to-One
One User → One Profile
One-to-Many
One User → Many Orders
Many-to-Many
Many Students ↔ Many Courses

Quick Revision
One-to-One (1:1)

User ↔ Profile

One-to-Many (1:N)

User → Orders

Many-to-Many (M:N)

Students ↔ Courses
Easy Memory Trick
1:1 → One Person, One Passport

1:N → One Customer, Many Orders

M:N → Many Students, Many Courses

Q. Which relationship type is most common in real-world applications?

A. One-to-Many (1:N), such as a user having multiple orders or a teacher having multiple students. ✅

One-Line Revision

One-to-One = one record linked to one record, One-to-Many = one record linked to many records, Many-to-Many = many records linked to many records. ✅
