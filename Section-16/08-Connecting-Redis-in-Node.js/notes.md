# Connecting Redis in Node.js

### 1. Install Redis Client

Node.js applications use a Redis client library to communicate with Redis.

A commonly used library is **`redis`**.

```bash
npm install redis
```

### 2. Import Redis

```js
import { createClient } from "redis";
```

### 3. Create a Redis Client

```js
const client = createClient({
  url: "redis://localhost:6379",
});
```

- `localhost` → Redis is running on the local machine.
- `6379` → Default Redis port.

### 4. Handle Connection Errors

```js
client.on("error", (err) => {
  console.error("Redis Client Error", err);
});
```

### 5. Connect to Redis

```js
await client.connect();
```

Complete example:

```js
import { createClient } from "redis";

const client = createClient({
  url: "redis://localhost:6379",
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

await client.connect();

console.log("Connected to Redis");
```

### 6. Test the Connection

```js
const response = await client.ping();

console.log(response);
```

Output:

```text
PONG
```

### 7. Basic Data Operations

**Set a value:**

```js
await client.set("name", "Nishu");
```

**Get a value:**

```js
const name = await client.get("name");

console.log(name);
```

Output:

```text
Nishu
```

### Connection Flow

```text
Node.js Application
        ↓
   Redis Client
        ↓
   Redis Server
   localhost:6379
```

### Quick Revision ⭐

1. Install `redis` package.
2. Create a Redis client using `createClient()`.
3. Handle the `error` event.
4. Connect using `client.connect()`.
5. Use Redis commands through the client.

### Interview Question

**Q: How do you connect Redis with Node.js?**
**A:** Install the `redis` package, create a Redis client using `createClient()`, handle connection errors, and establish the connection using `client.connect()`.
