# 🚨 Understanding DDoS Attack

### 📌 What is DDoS?

**DDoS (Distributed Denial of Service)** is an attack where **many systems simultaneously send a large amount of traffic/requests** to a server or service, exhausting its resources and making it unavailable to legitimate users.

### 🔹 How DDoS Works

```text
       Attacker
          ↓
   Compromised Devices
   ↙    ↓    ↓    ↘
Device Device Device Device
   ↘    ↓    ↓    ↙
      Target Server
           ↓
    Resources exhausted
           ↓
   Legitimate users ❌
```

The attacking systems may be part of a **botnet**—a collection of compromised devices controlled by an attacker.

---

### 🔹 What Can Be Exhausted?

A DDoS attack may consume:

- **Network bandwidth**
- **CPU**
- **Memory**
- **Connection capacity**
- **Server/application resources**

---

### 🔹 DoS vs DDoS

| DoS                                | DDoS                                                  |
| ---------------------------------- | ----------------------------------------------------- |
| Usually originates from one source | Comes from many distributed sources                   |
| Easier to identify/block           | More difficult to distinguish from legitimate traffic |
| Limited scale                      | Can generate very large traffic volumes               |

> **DDoS = Distributed DoS**

---

### 🔹 Why Rate Limiting Alone Isn't Enough

`express-rate-limit` can help control excessive requests **at the application level**, but a large DDoS attack may overwhelm the **network or infrastructure before requests even reach your application**.

For large-scale DDoS protection, systems such as **CDNs, WAFs, load balancers, and specialized DDoS protection services** are commonly used.

---

### 🛡️ Protection / Mitigation

- **Rate limiting** → control excessive API requests
- **CDN** → distribute and absorb traffic
- **WAF** → filter suspicious web traffic
- **Load balancing** → distribute requests
- **Traffic filtering** → block malicious patterns
- **Monitoring & alerts** → detect abnormal traffic
- **DDoS protection services** → handle large-scale attacks

### 🧠 Remember

> **DoS = one/few sources overwhelm a service**
> **DDoS = many distributed sources overwhelm a service**

**Goal → Exhaust resources → Service becomes unavailable → Legitimate users are affected.**

### 🎤 Interview Point

**Q: What is a DDoS attack?**

**A:** A DDoS attack is a distributed denial-of-service attack in which many systems send excessive traffic or requests to a target, exhausting its resources and preventing legitimate users from accessing the service.
