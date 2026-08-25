# Redis vs MongoDB: Speed Test

### Purpose of the Speed Test

- Redis and MongoDB are both used to store data, but they are designed for different purposes.
- A speed test helps compare their **read/write performance** under similar conditions.
- Redis is generally faster for simple operations because it is primarily **memory-based**.
- MongoDB is a **document-oriented database** designed for persistent application data.

### Typical Test

A basic benchmark can perform the same operations in both databases:

```text
Write Data
   ↓
Read Data
   ↓
Measure Execution Time
```

For example:

- Insert thousands of records.
- Read those records.
- Measure the time taken by each database.

### Why Redis Is Usually Faster

**Redis:**

- Data is primarily accessed from **RAM**.
- Simple key-value operations have very low latency.
- Minimal data-processing overhead for basic operations.

**MongoDB:**

- Uses a document model.
- Data is persisted to disk, with caching also used.
- Queries can involve document matching, indexes, and more complex operations.

### Important Point ⚠️

**Redis is not simply a "faster MongoDB."**

They solve different problems:

| Redis                                   | MongoDB                                   |
| --------------------------------------- | ----------------------------------------- |
| In-memory data store                    | Document database                         |
| Very low latency                        | Good performance with flexible queries    |
| Key-value/data structures               | JSON-like documents                       |
| Commonly used for caching               | Commonly used as primary database         |
| Excellent for temporary/high-speed data | Excellent for persistent application data |

### Example Use Case

For frequently accessed data:

```text
MongoDB
   ↓
Fetch user data
   ↓
Redis Cache
   ↓
Fast repeated reads
```

Redis can be used as a **cache in front of MongoDB** to reduce repeated database queries.

### Quick Revision ⭐

> **Redis is generally faster for simple read/write operations because it primarily works from memory, while MongoDB is designed as a persistent document database with more flexible querying.**

### Interview Question

**Q: Why is Redis generally faster than MongoDB for simple operations?**

**A:** Redis primarily stores and accesses data in memory and is optimized for low-latency operations, while MongoDB is a persistent document database designed to support richer data modeling and querying.
