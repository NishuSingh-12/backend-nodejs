# Database Management in Redis

### What is a Redis Database?

- Redis supports multiple **logical databases** within a single Redis server instance.
- Each database has its own set of keys.
- By default, Redis provides **16 databases**, numbered from `0` to `15`.
- The default database is **Database 0**.

### Selecting a Database

Use `SELECT` to switch between databases:

```bash
SELECT 1
```

Now you are working with **Database 1**.

Check the currently selected database by using:

```bash
CLIENT INFO
```

### Storing Data in Different Databases

```bash
SELECT 0
SET name "Nishu"

SELECT 1
SET name "Rahul"
```

Both databases can have a key named `name` because they are separate logical databases.

### Viewing Keys

```bash
KEYS *
```

- Shows all keys in the current database.
- `KEYS *` should generally be avoided in production with many keys because it can block Redis while scanning.

For production-friendly key iteration, use:

```bash
SCAN 0
```

### Deleting Data

Delete a specific key:

```bash
DEL name
```

Delete **all keys from the current database**:

```bash
FLUSHDB
```

Delete **all keys from all Redis databases**:

```bash
FLUSHALL
```

⚠️ `FLUSHDB` and `FLUSHALL` are destructive commands.

### Quick Revision ⭐

| Command    | Purpose                               |
| ---------- | ------------------------------------- |
| `SELECT 1` | Switch to Database 1                  |
| `KEYS *`   | List keys in current database         |
| `SCAN 0`   | Safely iterate through keys           |
| `DEL key`  | Delete a specific key                 |
| `FLUSHDB`  | Delete all keys from current database |
| `FLUSHALL` | Delete all keys from all databases    |

### Interview Question

**Q: How does Redis manage multiple databases?**
**A:** Redis supports multiple logical databases within a single Redis instance. Each database has its own keyspace, and `SELECT` is used to switch between them. By default, Redis provides **16 logical databases (0–15)**.
