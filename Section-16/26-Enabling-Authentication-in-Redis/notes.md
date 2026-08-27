# Enabling Authentication in Redis

### Why Authentication?

- By default, Redis may not require a password depending on its configuration.
- Authentication prevents **unauthorized clients** from accessing Redis.
- Redis uses the `requirepass` configuration for simple password authentication.

### 1. Set Password

In `redis.conf`:

```conf
requirepass myStrongPassword
```

Restart Redis after changing the configuration.

### 2. Authenticate Using CLI

```bash
redis-cli
```

Then:

```bash
AUTH myStrongPassword
```

Response:

```text
OK
```

### 3. Connect from Node.js

```js
import { createClient } from "redis";

const client = createClient({
  url: "redis://:myStrongPassword@localhost:6379",
});

await client.connect();
```

### 4. Test Authentication

```js
await client.set("name", "Nishu");

console.log(await client.get("name"));
```

### Important ⭐

- Use a **strong password**.
- Do not hardcode passwords in source code.
- Store credentials in **environment variables**.

```js
const client = createClient({
  url: process.env.REDIS_URL,
});
```

Example `.env`:

```env
REDIS_URL=redis://:myStrongPassword@localhost:6379
```

### Quick Revision

> **Redis authentication protects the Redis server by requiring clients to authenticate before accessing data.**

**Interview:**
**Q: How do you enable password authentication in Redis?**
**A:** Set `requirepass` in the Redis configuration and authenticate clients using the configured password.
