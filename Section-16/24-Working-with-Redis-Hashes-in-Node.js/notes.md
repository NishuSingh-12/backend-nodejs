# Working with Redis Hashes in Node.js

Redis Hashes can be used in Node.js to store **object-like data** as field-value pairs.

### 1. Store Data — `hSet()`

```js
await client.hSet("user:101", {
  name: "Nishu",
  age: "25",
  role: "user",
});
```

### 2. Get a Field — `hGet()`

```js
const name = await client.hGet("user:101", "name");

console.log(name);
```

Output:

```text
Nishu
```

### 3. Get All Fields — `hGetAll()`

```js
const user = await client.hGetAll("user:101");

console.log(user);
```

Output:

```js
{
  name: "Nishu",
  age: "25",
  role: "user"
}
```

### 4. Delete a Field — `hDel()`

```js
await client.hDel("user:101", "role");
```

### 5. Check Field — `hExists()`

```js
const exists = await client.hExists("user:101", "email");

console.log(exists);
```

### Common Node.js Methods

| Redis Command | Node.js Method |
| ------------- | -------------- |
| `HSET`        | `hSet()`       |
| `HGET`        | `hGet()`       |
| `HGETALL`     | `hGetAll()`    |
| `HDEL`        | `hDel()`       |
| `HEXISTS`     | `hExists()`    |
| `HLEN`        | `hLen()`       |

### Practical Example

```js
await client.hSet("user:101", {
  name: "Nishu",
  email: "nishu@example.com",
  age: "25",
});

const user = await client.hGetAll("user:101");

console.log(user);
```

### Quick Revision ⭐

> **Redis Hashes in Node.js** allow us to store and access object-like data using `hSet()`, `hGet()`, and `hGetAll()`.

**Interview:**
**Q: Why use Redis Hashes in Node.js?**
**A:** They are useful for storing multiple related fields of an object under a single Redis key.
