# 🚦 Dynamic Throttling vs Adaptive Throttling

### 📌 Dynamic Throttling

**Dynamic throttling** means changing the request limit based on **predefined conditions or rules**.

Example:

```text
Normal user     → 100 requests/min
Premium user    → 500 requests/min
Heavy endpoint → 20 requests/min
```

The limits are changed according to factors such as:

- User type
- API endpoint
- Time of day
- Subscription plan

---

### 📌 Adaptive Throttling

**Adaptive throttling** automatically adjusts the request limit based on the **current system conditions**.

Example:

```text
Server load: Low     → Allow more requests
Server load: Medium  → Reduce request rate
Server load: High    → Aggressively throttle
```

It can consider:

- CPU usage
- Memory usage
- Current traffic
- Response latency
- Error rate
- Server health

---

### 🔄 Difference

| Dynamic Throttling                      | Adaptive Throttling                                |
| --------------------------------------- | -------------------------------------------------- |
| Rule-based                              | Condition/feedback-based                           |
| Limits are predefined                   | Limits change automatically                        |
| Example: premium users get higher limit | Example: reduce traffic when server load increases |
| Less complex                            | More complex                                       |

### 🧠 Remember

> **Dynamic = change limits based on rules.**
> **Adaptive = automatically adjust limits based on real-time system conditions.**

### 🎤 Interview Point

> **Dynamic throttling changes limits according to predefined rules, while adaptive throttling continuously adjusts limits based on real-time traffic and system health.**
