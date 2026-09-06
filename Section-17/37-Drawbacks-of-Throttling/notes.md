# ⚠️ Drawbacks of Throttling

### 🔹 1. Slower User Experience

Legitimate users may experience delays when making multiple requests.

### 🔹 2. False Positives

A legitimate user making many requests can also get slowed down or blocked.

### 🔹 3. Does Not Stop DDoS

Throttling at the application level cannot fully protect against **large-scale DDoS attacks**.

### 🔹 4. Extra Server Overhead

The server must track request counts/timing, which consumes some memory and processing resources.

### 🔹 5. Difficult in Distributed Systems

With multiple server instances, in-memory throttling may give inconsistent results.

**Solution:** Use a shared store such as **Redis**.

### 🧠 Remember

> **Throttling controls traffic, but it can affect legitimate users and is not a complete DDoS protection mechanism.**

### 🎤 Interview Point

> **The main drawbacks of throttling are increased latency, false positives, additional overhead, and limited effectiveness against distributed attacks.**
