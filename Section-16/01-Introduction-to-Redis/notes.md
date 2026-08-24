# Introduction to Redis

### What is Redis?

- **Redis** = **Remote Dictionary Server**
- It is an **open-source, in-memory data store**.
- Data is primarily stored in **RAM**, so Redis is very fast.
- It is commonly used as a **cache, session store, message broker, and database**.

### Key Features

- ⚡ **Very fast** because data is stored in memory.
- 🔑 Stores data as **key-value pairs**.
- 💾 Supports **data persistence** to disk.
- 📦 Supports data structures like:
  - Strings
  - Lists
  - Sets
  - Hashes
  - Sorted Sets

- ⏳ Supports **TTL (Time To Live)** for automatic expiration of data.
- 🔄 Supports **Pub/Sub** for real-time messaging.

### Common Uses

- **Caching** frequently accessed data.
- **Session management** for logged-in users.
- **Rate limiting** API requests.
- **Queues** and background jobs.
- **Real-time applications** using Pub/Sub.

### Redis vs MongoDB

| Redis                              | MongoDB                           |
| ---------------------------------- | --------------------------------- |
| Primarily in-memory                | Primarily disk-based              |
| Extremely fast                     | Fast and flexible                 |
| Key-value/data-structure store     | Document database                 |
| Commonly used for cache & sessions | Commonly used as primary database |
| Supports TTL easily                | Supports TTL indexes              |

### Simple Example

```text
Key: user:101
Value: "Nishu"
```

Redis stores data using a **key → value** approach.

### Interview Point ⭐

**Q: What is Redis?**
**A:** Redis is an open-source, in-memory data store that stores data as key-value pairs and is commonly used for caching, session management, rate limiting, and real-time applications.
