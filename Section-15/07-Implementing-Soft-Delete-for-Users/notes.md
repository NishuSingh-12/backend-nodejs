# Implementing Soft Delete for Users

### What is Soft Delete?

**Soft Delete** means marking a user as deleted instead of permanently removing the user document from the database.

The data remains in the database but is treated as **inactive/deleted**.

### Hard Delete vs Soft Delete

| Hard Delete                                | Soft Delete              |
| ------------------------------------------ | ------------------------ |
| Permanently removes data                   | Keeps data in database   |
| Usually cannot be restored                 | Can be restored          |
| Uses `deleteOne()` / `findByIdAndDelete()` | Updates a deletion field |
| Data is lost                               | Data is retained         |

### Example Schema

Add a field such as:

```js
isDeleted: {
  type: Boolean,
  default: false
}
```

A deleted user will look like:

```js
{
  name: "Nishu",
  email: "nishu@example.com",
  isDeleted: true
}
```

### Soft Delete Operation

Instead of deleting the document:

```js
await User.findByIdAndDelete(id);
```

Update the `isDeleted` field:

```js
await User.findByIdAndUpdate(id, {
  isDeleted: true,
});
```

### Getting Active Users

When fetching users, exclude soft-deleted users:

```js
const users = await User.find({
  isDeleted: false,
});
```

### Restore User

A soft-deleted user can be restored:

```js
await User.findByIdAndUpdate(id, {
  isDeleted: false,
});
```

### Important Points ⭐

- Soft delete **does not physically remove** the document.
- Usually use fields like `isDeleted` or `deletedAt`.
- Deleted users should normally be excluded from regular queries.
- Soft delete allows **data recovery/restoration**.
- It is useful when audit/history or recovery is important.

### Interview Point 🎯

> **Soft delete marks a record as deleted instead of permanently removing it from the database. This allows the data to be retained and potentially restored later.**
