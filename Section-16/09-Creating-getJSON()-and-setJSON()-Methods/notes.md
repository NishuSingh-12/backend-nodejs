# Creating `getJSON()` and `setJSON()` Methods

Redis **String** values can store JSON data as strings.
In Node.js, we can create helper methods to automatically **convert objects to JSON when storing** and **parse JSON when retrieving**.

### 1. `setJSON()` Method

- Converts a JavaScript object into a JSON string using `JSON.stringify()`.
- Stores the JSON string in Redis.

```js
const setJSON = async (key, value) => {
  await client.set(key, JSON.stringify(value));
};
```

Example:

```js
await setJSON("user:101", {
  name: "Nishu",
  age: 25,
});
```

Redis stores it as:

```text
{"name":"Nishu","age":25}
```

### 2. `getJSON()` Method

- Retrieves the JSON string from Redis.
- Converts it back into a JavaScript object using `JSON.parse()`.

```js
const getJSON = async (key) => {
  const value = await client.get(key);

  return value ? JSON.parse(value) : null;
};
```

Example:

```js
const user = await getJSON("user:101");

console.log(user);
```

Output:

```js
{
  name: "Nishu",
  age: 25
}
```

### Complete Example

```js
const setJSON = async (key, value) => {
  await client.set(key, JSON.stringify(value));
};

const getJSON = async (key) => {
  const value = await client.get(key);

  return value ? JSON.parse(value) : null;
};
```

### Why Use These Methods?

Without helper methods:

```js
JSON.stringify(data);
JSON.parse(data);
```

We would have to manually perform conversion every time.

With `setJSON()` and `getJSON()`:

```js
await setJSON("user:101", user);
const user = await getJSON("user:101");
```

This makes Redis operations **cleaner and reusable**.

### Quick Revision ⭐

| Method             | Purpose                                 |
| ------------------ | --------------------------------------- |
| `setJSON()`        | Object → JSON string → Redis            |
| `getJSON()`        | Redis → JSON string → JavaScript object |
| `JSON.stringify()` | Converts object to JSON string          |
| `JSON.parse()`     | Converts JSON string to object          |

### Interview Question

**Q: Why do we create `getJSON()` and `setJSON()` methods?**
**A:** They provide reusable helper methods to automatically serialize JavaScript objects before storing them in Redis and deserialize them when retrieving them.
