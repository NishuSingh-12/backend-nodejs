# Real-Time Messaging with Redis Pub/Sub

### What is Pub/Sub?

**Pub/Sub = Publish / Subscribe**

- It is a messaging mechanism in Redis.
- A **Publisher** sends messages to a channel.
- A **Subscriber** listens to that channel.
- Subscribers receive messages **in real time**.

### Basic Flow

```text
Publisher
    ↓
 Redis Channel
    ↓
Subscribers
```

### 1. Subscribe to a Channel

```js
await subscriber.subscribe("notifications", (message) => {
  console.log(message);
});
```

### 2. Publish a Message

```js
await publisher.publish("notifications", "New notification!");
```

The subscriber immediately receives:

```text
New notification!
```

### Important: Separate Connections

For Pub/Sub, use **separate Redis clients** for publishing and subscribing.

```js
const publisher = client.duplicate();
const subscriber = client.duplicate();

await publisher.connect();
await subscriber.connect();
```

### Practical Example

```js
await subscriber.subscribe("chat", (message) => {
  console.log("Message:", message);
});

await publisher.publish("chat", "Hello!");
```

Output:

```text
Message: Hello!
```

### Common Use Cases

- 💬 Real-time chat
- 🔔 Notifications
- 📢 Live updates
- 📡 Event broadcasting

### Quick Revision ⭐

> **Redis Pub/Sub allows publishers to send messages to channels and subscribers to receive those messages in real time.**

**Interview:**
**Q: What is Redis Pub/Sub?**
**A:** Redis Pub/Sub is a messaging system where publishers send messages to channels and subscribers listening to those channels receive the messages in real time.
