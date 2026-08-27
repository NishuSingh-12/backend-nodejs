# SCAN Command in Redis

### What is `SCAN`?

- `SCAN` is used to **iterate through keys** in Redis.
- It returns keys in **small batches** instead of returning all keys at once.
- It is safer for production than `KEYS *` because it does not try to return the entire keyspace in one operation.

### Basic Syntax

```bash
SCAN 0
```

- `0` = starting cursor.
- Redis returns a **new cursor** and some keys.
- Continue using the returned cursor until it becomes `0`.

### Example

```bash
SCAN 0
```

Possible response:

```text
1) "5"
2) 1) "user:101"
   2) "user:102"
```

Continue:

```bash
SCAN 5
```

Repeat until Redis returns cursor `0`.

### Filtering Keys

```bash
SCAN 0 MATCH user:*
```

This scans only keys matching:

```text
user:*
```

### Controlling Batch Size

```bash
SCAN 0 COUNT 100
```

`COUNT 100` gives Redis a hint to return around 100 keys per iteration.

### `KEYS` vs `SCAN`

| `KEYS *`                               | `SCAN`                             |
| -------------------------------------- | ---------------------------------- |
| Returns all matching keys at once      | Returns keys in batches            |
| Can block Redis for a long time        | Designed for incremental iteration |
| Avoid in production for large datasets | Preferred for large keyspaces      |

### Quick Revision ⭐

> **`SCAN` = Safely iterate through Redis keys in small batches using a cursor.**

**Interview:**
**Q: Why use `SCAN` instead of `KEYS *`?**
**A:** `SCAN` processes the keyspace incrementally, avoiding the large blocking operation associated with `KEYS *`.
