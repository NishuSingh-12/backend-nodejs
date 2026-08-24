# Data Types in Redis

Redis supports several **built-in data types**, each designed for different use cases.

### 1. String

- The simplest and most commonly used Redis data type.
- Stores **text, numbers, JSON strings, etc.**
- Example:

```text
name → "Nishu"
age  → "25"
```

### 2. List

- An **ordered collection of strings**.
- Allows duplicate values.
- Useful for **queues, stacks, and activity feeds**.

```text
tasks → ["task1", "task2", "task3"]
```

### 3. Set

- An **unordered collection of unique strings**.
- Duplicate values are automatically ignored.
- Useful for **unique items, tags, and relationships**.

```text
skills → {"HTML", "CSS", "JavaScript"}
```

### 4. Hash

- Stores data as **field-value pairs**.
- Useful for representing an object.

```text
user:101
  name  → "Nishu"
  email → "nishu@example.com"
  age   → "25"
```

### 5. Sorted Set (ZSet)

- Similar to a Set, but every member has a **score**.
- Members are automatically ordered by their scores.
- Useful for **leaderboards and rankings**.

```text
leaderboard:
  Nishu → 100
  Rahul → 90
  Amit  → 80
```

### 6. Stream

- An **append-only sequence of messages/events**.
- Useful for **event logs, messaging, and real-time data processing**.

### 7. Bitmap

- Represents data using **individual bits (0/1)**.
- Useful for tracking boolean states or large sets of binary information.

### 8. Geospatial

- Stores **location coordinates** (longitude and latitude).
- Useful for **location-based applications**, such as finding nearby places.

### Quick Revision ⭐

| Data Type      | Common Use                   |
| -------------- | ---------------------------- |
| **String**     | Text, numbers, simple values |
| **List**       | Queues, ordered collections  |
| **Set**        | Unique values                |
| **Hash**       | Objects / field-value data   |
| **Sorted Set** | Rankings / leaderboards      |
| **Stream**     | Events / messages            |
| **Bitmap**     | Bit-level flags              |
| **Geospatial** | Location-based data          |

**Interview Tip:** The most commonly used Redis data types are **String, List, Set, Hash, and Sorted Set**.
