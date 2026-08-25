# Working with RedisJSON Data Type

### What is RedisJSON?

- **RedisJSON** is a Redis module that provides **native JSON document support**.
- It allows JSON documents to be stored and manipulated **directly as JSON**, instead of converting them into strings with `JSON.stringify()`.
- It is useful when working with **structured or nested JSON data**.

### Redis String vs RedisJSON

**Normal Redis String:**

```js
await client.set("user:101", JSON.stringify(user));
```

To retrieve:

```js
const user = JSON.parse(await client.get("user:101"));
```

**RedisJSON:**

```text
user:101 → JSON document
```

RedisJSON allows us to work with the JSON document directly.

### Common RedisJSON Commands

#### 1. `JSON.SET`

Stores a JSON document.

```bash
JSON.SET user:101 $ '{"name":"Nishu","age":25}'
```

- `$` represents the **root** of the JSON document.

#### 2. `JSON.GET`

Retrieves a JSON document.

```bash
JSON.GET user:101
```

#### 3. Accessing Nested Data

```bash
JSON.GET user:101 $.name
```

This retrieves only the `name` property.

#### 4. `JSON.SET` – Update a Property

```bash
JSON.SET user:101 $.age 26
```

This updates the `age` field without replacing the entire document.

### Example JSON

```json
{
  "name": "Nishu",
  "age": 25,
  "skills": ["JavaScript", "React"]
}
```

RedisJSON allows us to work with individual properties such as:

```text
$.name
$.age
$.skills
```

### Advantages

- Stores JSON as a **native Redis data type**.
- Supports **nested JSON objects and arrays**.
- Allows updating individual JSON properties.
- Avoids manually using `JSON.stringify()` and `JSON.parse()`.
- Useful for applications that frequently work with JSON documents.

### Quick Revision ⭐

**Redis String:**

```text
JavaScript Object
      ↓
JSON.stringify()
      ↓
String
      ↓
Redis
```

**RedisJSON:**

```text
JavaScript/JSON Document
        ↓
   RedisJSON
        ↓
JSON Document in Redis
```

### Interview Question

**Q: What is RedisJSON?**
**A:** RedisJSON is a Redis module that provides native support for storing and manipulating JSON documents, including nested objects and arrays, directly inside Redis.
