# Introduction to Indexes in MongoDB

## Definition

An **Index** is a special data structure that **improves the speed of query operations** by allowing MongoDB to find documents without scanning the entire collection.

> **Index = Improves Query Performance**

---

# Why Use Indexes?

- Faster data retrieval.
- Reduces query execution time.
- Improves search performance.
- Efficient sorting.

---

# Without Index

```text
Query
  ↓
Scan All Documents
  ↓
Find Result (Slow)
```

---

# With Index

```text
Query
  ↓
Use Index
  ↓
Find Result (Fast)
```

---

# Creating an Index

### Example

```javascript
db.users.createIndex({ name: 1 });
```

### Explanation

- `name` → Field to index.
- `1` → Ascending order.
- `-1` → Descending order.

---

# Types of Indexes

| Index Type         | Purpose                                 |
| ------------------ | --------------------------------------- |
| Single Field Index | Index on one field                      |
| Compound Index     | Index on multiple fields                |
| Unique Index       | Prevents duplicate values               |
| Text Index         | Full-text search                        |
| TTL Index          | Automatically deletes expired documents |

---

# Example (Compound Index)

```javascript
db.users.createIndex({
  name: 1,
  age: -1,
});
```

---

# Viewing Indexes

```javascript
db.users.getIndexes();
```

Displays all indexes of the collection.

---

# Dropping an Index

```javascript
db.users.dropIndex({ name: 1 });
```

Removes the specified index.

---

# Advantages

- Faster queries.
- Better sorting performance.
- Faster filtering.
- Improves overall database performance.

---

# Disadvantages

- Uses extra storage.
- Slows down insert, update, and delete operations because indexes must also be updated.
- Too many indexes can reduce write performance.

---

# Interview Questions

### Q1. What is an Index in MongoDB?

An Index is a data structure that improves the speed of query operations.

### Q2. Why are indexes used?

To retrieve data faster and improve query performance.

### Q3. What does `1` and `-1` mean in `createIndex()`?

- `1` → Ascending index.
- `-1` → Descending index.

### Q4. What is the disadvantage of indexes?

They consume extra storage and can slow down write operations.

---

# Quick Revision

- **Index** → Speeds up queries.
- **Create** → `createIndex()`
- **View** → `getIndexes()`
- **Delete** → `dropIndex()`
- **1** → Ascending
- **-1** → Descending

---

## ⭐ Interview One-Liner

> **An Index in MongoDB is a data structure that improves query performance by allowing MongoDB to quickly locate documents instead of scanning the entire collection.**
