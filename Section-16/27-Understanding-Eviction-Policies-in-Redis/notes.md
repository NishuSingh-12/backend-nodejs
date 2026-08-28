# Understanding Eviction Policies in Redis

### What is Eviction?

- **Eviction** is the process of automatically removing keys from Redis when it reaches its configured **maximum memory limit**.
- Redis uses an **eviction policy** to decide which keys should be removed.

### Configure Maximum Memory

In `redis.conf`:

```conf
maxmemory 256mb
```

Then Redis uses the configured `maxmemory-policy` to decide what to evict.

### Common Eviction Policies

| Policy            | What it removes                                    |
| ----------------- | -------------------------------------------------- |
| `noeviction`      | Doesn't remove keys; returns errors for new writes |
| `allkeys-lru`     | Least Recently Used keys                           |
| `volatile-lru`    | Least Recently Used keys with TTL                  |
| `allkeys-lfu`     | Least Frequently Used keys                         |
| `volatile-lfu`    | Least Frequently Used keys with TTL                |
| `allkeys-random`  | Random keys                                        |
| `volatile-random` | Random keys with TTL                               |
| `volatile-ttl`    | Keys with the shortest TTL                         |

### LRU vs LFU

**LRU (Least Recently Used)**
→ Removes keys that haven't been accessed recently.

**LFU (Least Frequently Used)**
→ Removes keys that are accessed least often.

### Example

```conf
maxmemory 256mb
maxmemory-policy allkeys-lru
```

When Redis reaches **256 MB**, it starts removing the **least recently used keys** to make space.

### Check Current Policy

```bash
CONFIG GET maxmemory-policy
```

### Quick Revision ⭐

> **Eviction Policy = Rules Redis uses to automatically remove keys when the configured memory limit is reached.**

**Interview:**
**Q: What is an eviction policy in Redis?**
**A:** It defines which keys Redis should remove when it reaches its maximum memory limit.
