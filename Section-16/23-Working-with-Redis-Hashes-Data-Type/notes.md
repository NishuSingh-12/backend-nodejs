# Working with Redis Hashes

### What is a Redis Hash?

- A **Hash** stores data as **field-value pairs**.
- It is useful for representing an **object**.
- Multiple fields can be stored under a single Redis key.

### 1. Create / Set Fields — `HSET`

```bash
HSET user:101 name "Nishu" age 25
```

Structure:

```text
user:101
 ├── name → Nishu
 └── age  → 25
```

### 2. Get a Field — `HGET`

```bash
HGET user:101 name
```

Output:

```text
"Nishu"
```

### 3. Get All Fields — `HGETALL`

```bash
HGETALL user:101
```

### 4. Check Field — `HEXISTS`

```bash
HEXISTS user:101 email
```

Returns:

```text
1 → exists
0 → does not exist
```

### 5. Delete a Field — `HDEL`

```bash
HDEL user:101 age
```

### 6. Get Number of Fields — `HLEN`

```bash
HLEN user:101
```

### Common Commands

| Command   | Purpose                   |
| --------- | ------------------------- |
| `HSET`    | Add/update fields         |
| `HGET`    | Get a field               |
| `HGETALL` | Get all fields and values |
| `HEXISTS` | Check if a field exists   |
| `HDEL`    | Delete a field            |
| `HLEN`    | Get number of fields      |

### Practical Example

```bash
HSET product:101 name "Laptop" price 50000 stock 10
HGET product:101 price
HSET product:101 stock 8
```

### Quick Revision ⭐

> **Redis Hash = A collection of field-value pairs stored under one Redis key.**

**Interview:**
**Q: When should you use a Redis Hash?**
**A:** Use a Hash when you need to store and manage multiple related fields of an object under a single Redis key.
