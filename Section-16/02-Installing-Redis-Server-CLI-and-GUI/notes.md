# Installing Redis: Server, CLI and GUI

### 1. Redis Server

- The **Redis Server** is the core Redis service that stores and manages data.
- Applications connect to the Redis server to read and write data.
- By default, Redis runs on **port `6379`**.

### 2. Redis CLI

- **Redis CLI (Command Line Interface)** allows us to interact with Redis through the terminal.
- It is useful for running Redis commands and testing connections.

Example:

```bash
redis-cli
```

Test the connection:

```bash
PING
```

Response:

```text
PONG
```

### 3. Redis GUI

- A **GUI (Graphical User Interface)** provides a visual way to interact with Redis.
- **Redis Insight** is the official GUI tool for Redis.
- It can be used to:
  - View keys and values
  - Explore data structures
  - Run Redis commands
  - Monitor Redis databases

### Redis Setup

```text
Application
     ↓
Redis Server
   ↙     ↘
 CLI     GUI
```

### Quick Revision ⭐

| Component        | Purpose                               |
| ---------------- | ------------------------------------- |
| **Redis Server** | Stores and manages Redis data         |
| **Redis CLI**    | Interacts with Redis through terminal |
| **Redis GUI**    | Provides a visual interface for Redis |

### Interview Question

**Q: What are Redis Server, CLI, and GUI?**
**A:** Redis Server stores and manages data, Redis CLI allows terminal-based interaction with Redis, and Redis GUI provides a visual interface to inspect and manage Redis data.
