Projection in MongoDB

Projection is used to select which fields should be returned in the query result.
By default, MongoDB returns all fields of a document.
Example Document
{
\_id: 1,
name: "Nishu",
age: 22,
city: "Bangalore"
}
Return Only Specific Fields
db.users.find(
{},
{ name: 1, age: 1 }
)
Output
{
\_id: 1,
name: "Nishu",
age: 22
}

Use: Return only name and age.

Exclude a Field
db.users.find(
{},
{ city: 0 }
)

Use: Return all fields except city.

Exclude \_id
db.users.find(
{},
{ \_id: 0, name: 1, age: 1 }
)
Output
{
name: "Nishu",
age: 22
}

Use: Hide the \_id field.

Important Rule

✅ 1 = Include Field

✅ 0 = Exclude Field

❌ Cannot mix 1 and 0 in the same projection (except \_id).

Quick Revision
Projection → Select Fields

1 → Include Field
0 → Exclude Field

{name: 1} → Show name

{city: 0} → Hide city

{\_id: 0} → Hide \_id
Most Used Example
db.users.find(
{},
{ name: 1, age: 1, \_id: 0 }
)

Result: Only name and age are returned. ✅
