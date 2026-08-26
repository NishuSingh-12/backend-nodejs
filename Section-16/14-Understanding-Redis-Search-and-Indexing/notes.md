# Redis Search and Indexing

### What is Redis Search?

- **Redis Search** allows us to search and query data stored in Redis.
- It is mainly provided by the **RediSearch** module.
- It supports **full-text search, filtering, sorting, and indexing**.

### What is an Index?

- An **index** is a data structure that makes searching data faster.
- Instead of checking every document, Redis Search uses an index to find matching data efficiently.

### Example

Suppose Redis contains user data:

```text
user:1 → { name: "Nishu", age: 25 }
user:2 → { name: "Rahul", age: 30 }
```

We can create an index on fields like:

```text
name
age
```

Then search:

```text
name:Nishu
```

### Basic Flow

```text
Redis Data
    ↓
Create Index
    ↓
Search Query
    ↓
Matching Results
```

### Why Use Redis Search?

- 🔎 Full-text search
- ⚡ Fast filtering
- 📊 Sorting and querying
- 🎯 Search specific fields
- Useful for **large datasets**

### Quick Revision ⭐

**Redis Search = Search and query Redis data efficiently using indexes.**

**Interview:**
**Q: Why are indexes used in Redis Search?**
**A:** Indexes allow Redis to find matching data efficiently without scanning every stored item.
