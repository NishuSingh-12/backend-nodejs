# Working with Redis Sets

### What is a Redis Set?

- A **Set** is an unordered collection of **unique strings**.
- Duplicate values are automatically ignored.
- Useful when we need to store **unique items**.

### 1. Add Elements — `SADD`

```bash
SADD skills "JavaScript" "React" "Node.js"
```

Add another value:

```bash
SADD skills "React"
```

`React` will **not be added again** because Sets contain unique values.

### 2. Get All Elements — `SMEMBERS`

```bash
SMEMBERS skills
```

### 3. Check Membership — `SISMEMBER`

```bash
SISMEMBER skills "React"
```

Returns:

```text
1 → exists
0 → does not exist
```

### 4. Remove Element — `SREM`

```bash
SREM skills "React"
```

### 5. Get Set Size — `SCARD`

```bash
SCARD skills
```

Returns the number of unique elements.

### 6. Set Operations

**Union — `SUNION`**

Combines members from multiple sets.

```bash
SUNION set1 set2
```

**Intersection — `SINTER`**

Returns common members.

```bash
SINTER set1 set2
```

### Common Commands

| Command     | Purpose               |
| ----------- | --------------------- |
| `SADD`      | Add members           |
| `SMEMBERS`  | Get all members       |
| `SISMEMBER` | Check membership      |
| `SREM`      | Remove a member       |
| `SCARD`     | Get number of members |
| `SUNION`    | Combine sets          |
| `SINTER`    | Find common members   |

### Quick Revision ⭐

> **Redis Set = Unordered collection of unique values.**

**Interview:**
**Q: What is the main difference between a Redis List and Set?**
**A:** A List is an **ordered collection that can contain duplicates**, while a Set is an **unordered collection of unique values**.
