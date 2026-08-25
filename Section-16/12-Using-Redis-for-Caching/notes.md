# Using Redis for Caching

### What is Caching?

- **Caching** means temporarily storing frequently used data in a fast storage system.
- The goal is to avoid repeatedly fetching the same data from the main database.
- Redis is commonly used as a **cache** because of its high speed.

### How Redis Caching Works

```text
Client Request
      ↓
   Check Redis
   ↙       ↘
Found     Not Found
 ↓           ↓
Return    Query Database
Data          ↓
          Store in Redis
              ↓
          Return Data
```

### Cache Hit

- Data is found in Redis.
- Application returns the cached data.
- No database query is required.

```text
Request → Redis → Data Found → Response
```

This is called a **cache hit**.

### Cache Miss

- Data is not found in Redis.
- Application queries the database.
- The result is stored in Redis for future requests.

```text
Request → Redis → Not Found
                    ↓
                 Database
                    ↓
                Store in Redis
                    ↓
                 Response
```

This is called a **cache miss**.

### Example in Node.js

```js
const cachedUser = await client.get("user:101");

if (cachedUser) {
  return JSON.parse(cachedUser);
}

const user = await User.findById(101);

await client.set("user:101", JSON.stringify(user), { EX: 300 });

return user;
```

Here:

- Redis stores the user data for **300 seconds (5 minutes)**.
- Future requests can get the data directly from Redis.

### Why Use Redis for Caching?

- ⚡ Faster response times
- 📉 Reduces database load
- 🚀 Improves application performance
- 💰 Can reduce expensive database operations
- ⏳ Supports TTL for automatic cache expiration

### Important Concept: Cache Invalidation

When the original data changes, the cached data may become outdated.

A common approach is to delete the cached value:

```js
await client.del("user:101");
```

The next request will fetch fresh data from the database and cache it again.

### Quick Revision ⭐

**Redis Cache = Store frequently accessed data temporarily in Redis to reduce database queries and improve performance.**

| Term                   | Meaning                                |
| ---------------------- | -------------------------------------- |
| **Cache Hit**          | Data found in Redis                    |
| **Cache Miss**         | Data not found in Redis                |
| **TTL**                | Automatically expires cached data      |
| **Cache Invalidation** | Removing/updating outdated cached data |

### Interview Question

**Q: How does Redis improve application performance as a cache?**

**A:** Redis stores frequently accessed data in memory, allowing the application to retrieve it quickly and reducing repeated queries to the primary database.
