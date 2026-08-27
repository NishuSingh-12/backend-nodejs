# Working with Redis Lists

### What is a Redis List?

- A **List** is an ordered collection of strings.
- It allows **duplicate values**.
- Elements can be added or removed from **both ends** of the list.
- Commonly used for **queues and stacks**.

### 1. Add Elements

**`LPUSH`** → Adds elements to the **left/head**.

```bash
LPUSH tasks "Task 1"
LPUSH tasks "Task 2"
```

List:

```text
Task 2 → Task 1
```

**`RPUSH`** → Adds elements to the **right/tail**.

```bash
RPUSH tasks "Task 3"
```

### 2. Get Elements

```bash
LRANGE tasks 0 -1
```

- `0` → first element
- `-1` → last element

### 3. Remove Elements

**`LPOP`** → Removes from left.

```bash
LPOP tasks
```

**`RPOP`** → Removes from right.

```bash
RPOP tasks
```

### 4. Get List Length

```bash
LLEN tasks
```

### 5. Get an Element by Index

```bash
LINDEX tasks 0
```

Returns the element at index `0`.

### Common Commands

| Command  | Purpose                 |
| -------- | ----------------------- |
| `LPUSH`  | Add to left             |
| `RPUSH`  | Add to right            |
| `LPOP`   | Remove from left        |
| `RPOP`   | Remove from right       |
| `LRANGE` | Get a range of elements |
| `LLEN`   | Get list length         |
| `LINDEX` | Get element by index    |

### Practical Example: Queue

```bash
RPUSH queue "User1"
RPUSH queue "User2"

LPOP queue
```

**FIFO (First In, First Out)**:

```text
User1 → User2
  ↓
Processed first
```

### Quick Revision ⭐

> **Redis List = Ordered collection where elements can be added or removed from both ends.**

**Interview:**
**Q: Where are Redis Lists commonly used?**
**A:** Redis Lists are commonly used for **queues, stacks, task processing, and activity feeds**.
