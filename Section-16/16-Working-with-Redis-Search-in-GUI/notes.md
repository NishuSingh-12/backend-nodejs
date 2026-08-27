# Working with Redis Search in GUI

### Redis Insight

- **Redis Insight** is a GUI for working with Redis.
- It allows us to visually inspect and query Redis data.
- Redis Search indexes can also be created and tested from the GUI.

### Basic Steps

**1. Open Redis Insight**

- Connect to your Redis server.
- Select the required database.

**2. Open Search / Query Interface**

- Use the search/query section to work with indexed data.

**3. Create an Index**

Example:

```text
Index Name: idx:users
```

Fields can be defined such as:

```text
name → TEXT
age  → NUMERIC
```

**4. Search Indexed Data**

Example query:

```text
@name:Nishu
```

For numeric filtering:

```text
@age:[20 30]
```

### Important Redis Search Field Types

| Type      | Used For                 |
| --------- | ------------------------ |
| `TEXT`    | Text search              |
| `NUMERIC` | Numbers and ranges       |
| `TAG`     | Exact/category filtering |
| `GEO`     | Geographic data          |
| `VECTOR`  | Vector similarity search |

### Quick Revision ⭐

```text
Redis Data
    ↓
Create Search Index
    ↓
Define Fields
    ↓
Search / Filter Data
```

**Interview:**
**Q: What is Redis Insight used for?**
**A:** Redis Insight provides a graphical interface to connect to Redis, inspect data, run commands, and work with Redis Search indexes.
