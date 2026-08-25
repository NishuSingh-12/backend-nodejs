# Working with Strings in Redis

### What is a String in Redis?

- **String** is the simplest and most commonly used Redis data type.
- It stores **text, numbers, JSON strings, serialized data, etc.**
- A Redis string can store up to **512 MB** of data.

### Basic Commands

**1. SET – Store a value**

```bash
SET name "Nishu"
```

**2. GET – Retrieve a value**

```bash
GET name
```

Output:

```text
"Nishu"
```

**3. SET with a number**

```bash
SET age 25
```

**4. DEL – Delete a key**

```bash
DEL name
```

**5. EXISTS – Check whether a key exists**

```bash
EXISTS name
```

Returns:

```text
1   # exists
0   # does not exist
```

### Updating a Value

```bash
SET name "Nishu Singh"
```

If `name` already exists, `SET` **overwrites** its previous value.

### Working with Numbers

Redis strings can also store integers and perform operations on them.

```bash
SET counter 10
INCR counter
```

Result:

```text
11
```

Decrease:

```bash
DECR counter
```

Result:

```text
10
```

### Expiring a String

Set a key with an expiration time:

```bash
SET otp 123456 EX 60
```

- `EX 60` → key expires after **60 seconds**.

Check remaining time:

```bash
TTL otp
```

### Quick Revision ⭐

| Command  | Purpose                         |
| -------- | ------------------------------- |
| `SET`    | Store/update a value            |
| `GET`    | Retrieve a value                |
| `DEL`    | Delete a key                    |
| `EXISTS` | Check if key exists             |
| `INCR`   | Increase numeric value          |
| `DECR`   | Decrease numeric value          |
| `TTL`    | Check remaining expiration time |

### Interview Point

**Q: What is a String in Redis?**
**A:** A String is Redis's basic data type used to store text, numbers, and other string-based data, with a maximum size of **512 MB**.
