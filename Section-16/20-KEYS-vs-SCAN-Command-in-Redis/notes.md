# `KEYS` vs `SCAN` Command in Redis

### `KEYS`

- Used to **find keys matching a pattern**.
- Returns **all matching keys at once**.
- Can block Redis when there are many keys.
- Avoid using it in **production with large datasets**.

```bash
KEYS user:*
```

### `SCAN`

- Used to **iterate through keys gradually**.
- Returns keys in **batches** using a cursor.
- Better for large datasets.
- Preferred in **production**.

```bash
SCAN 0 MATCH user:* COUNT 100
```

### Comparison

| `KEYS`                              | `SCAN`                            |
| ----------------------------------- | --------------------------------- |
| Returns all matching keys           | Returns keys in batches           |
| Can block Redis                     | Incremental/non-blocking approach |
| Simple and convenient               | Better for large keyspaces        |
| Avoid for large production datasets | Preferred for production          |
| Syntax: `KEYS pattern`              | Syntax: `SCAN cursor`             |

### Example

If Redis has **1 million keys**:

```text
KEYS user:*
      ↓
Tries to process all matching keys

SCAN 0 MATCH user:*
      ↓
Processes keys gradually
```

### Quick Revision ⭐

> **`KEYS` → all matching keys at once**
> **`SCAN` → matching keys gradually using a cursor**

**Interview:**
**Q: Which should you use in production, `KEYS` or `SCAN`?**
**A:** Prefer **`SCAN`**, especially with large keyspaces, because it iterates incrementally instead of performing one large blocking key lookup.
