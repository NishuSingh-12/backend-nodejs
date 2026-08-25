# Organizing Redis Keys with Namespacing

### What is Key Namespacing?

- **Namespacing** is a convention for organizing Redis keys using a common prefix.
- Redis does not have built-in namespaces; we create them by using **key naming patterns**.
- It makes keys easier to **identify, manage, and avoid naming conflicts**.

### Example

Instead of:

```text
user123
profile123
orders123
```

Use meaningful namespaces:

```text
user:123
user:123:profile
user:123:orders
```

Here, `user:` acts as the namespace.

### Common Naming Patterns

```text
user:101
session:abc123
product:501
cart:101
order:1001
```

For more detailed keys:

```text
user:101:profile
user:101:cart
user:101:orders
```

### Why Use Namespacing?

- ✅ Keeps keys **organized**
- ✅ Makes keys **easy to understand**
- ✅ Prevents **key naming conflicts**
- ✅ Helps identify keys by their purpose
- ✅ Makes debugging and maintenance easier

### Namespacing in Applications

For example, in a Node.js application:

```text
user:{userId}
session:{sessionId}
cache:{resource}:{id}
```

Example:

```text
user:101
session:xyz789
cache:product:501
```

### Quick Revision ⭐

**Key Namespacing = Using prefixes in Redis keys to logically organize related data.**

```text
namespace:identifier
```

Example:

```text
user:101
```

- `user` → namespace
- `101` → identifier

### Interview Question

**Q: What is namespacing in Redis?**
**A:** Namespacing is a key-naming convention where prefixes are used to logically organize Redis keys and avoid naming conflicts.
