# 🚨 Understanding Denial of Service (DoS) Attack

### 📌 What is a DoS Attack?

**DoS (Denial of Service)** is an attack in which an attacker sends a large number of requests or consumes excessive server resources so that **legitimate users cannot access the application normally**.

genui{"learning_viz":{"type_id":"DENIAL_OF_SERVICE_OVERLOAD","locale_override":"en-IN"}}

### 🔹 How DoS Works

```text
Attacker
   ↓
大量 Requests
   ↓
   Server
   ↓
Resources exhausted
   ↓
Legitimate users
   ❌ Slow / unavailable
```

The attacker may try to exhaust:

- CPU
- Memory
- Network bandwidth
- Database connections
- Request/connection limits

### 🔹 Simple Example

Suppose an API normally handles:

```text
100 requests/second
```

An attacker sends:

```text
10,000 requests/second
```

The server becomes overloaded and legitimate requests may become:

```text
Slow → Timeout → Failed
```

### 🔹 DoS vs DDoS

| DoS                                         | DDoS                           |
| ------------------------------------------- | ------------------------------ |
| Attack usually comes from one source/system | Attack comes from many systems |
| Easier to identify/block                    | More difficult to mitigate     |
| Smaller scale generally                     | Can be highly distributed      |

**DDoS = Distributed Denial of Service**

---

### 🛡️ How to Prevent/Mitigate DoS

- **Rate limiting** → limit requests from a client/IP.
- **Request size limits** → prevent huge payloads.
- **Timeouts** → don't allow requests to stay open indefinitely.
- **Connection limits** → limit simultaneous connections.
- **Caching** → reduce repeated expensive operations.
- **Load balancing** → distribute traffic across servers.
- **CDN / DDoS protection** → absorb and filter large-scale traffic.
- **Monitoring & alerts** → detect unusual traffic patterns.

### 🧠 Remember

> **DoS attacks target availability, not necessarily data.**

**Goal:** Exhaust resources → Server becomes unavailable → Legitimate users are affected.

### 🎤 Interview Point

**Q: What is a DoS attack?**

**A:** A DoS attack attempts to make a service unavailable by overwhelming it or exhausting its resources, preventing legitimate users from accessing the application.
