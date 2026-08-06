# How Git Uses Hashing for Commits

Git uses **Hashing** to uniquely identify commits, files, and other Git objects.

Every commit in Git gets a **unique hash (Commit ID)**.

> Git uses hashing to ensure **data integrity** and **uniquely identify every object**.

> **Note:** Modern Git versions generally use **SHA-1** by default, and support for **SHA-256** is available for newer repositories.

---

# What is a Commit Hash?

A **Commit Hash** is a unique ID generated when you create a commit.

Example:

```text
8f3c2a7d91b84b8e54c2d4c4f8c8a95e6b7f1a2d
```

This hash identifies **one specific commit**.

---

# How Git Generates a Commit Hash

Git creates the hash based on commit information such as:

- Commit Message
- Author Name
- Author Email
- Commit Time
- Parent Commit
- Snapshot of Project Files

If any of these change, the commit hash also changes.

---

# Git Commit Flow

```text
Code Changes
      ↓
git add
      ↓
git commit
      ↓
Git Generates Hash
      ↓
Commit Stored
```

---

# Example

Suppose you write:

```javascript
console.log("Hello");
```

Commit:

```bash
git commit -m "Add hello message"
```

Git generates:

```text
Commit ID:
a1b2c3d4e5f67890...
```

Later you change:

```javascript
console.log("Hello World");
```

Commit again:

```bash
git commit -m "Update message"
```

New Commit ID:

```text
f8g7h6i5j4k3l2m1...
```

✅ Even a small change creates a **new commit hash**.

---

# Why Does Git Use Hashing?

### 1. Unique Identification

Every commit has its own unique ID.

Example:

```text
Commit 1 → a1b2c3...
Commit 2 → b7d8e9...
Commit 3 → c9f1a2...
```

No two commits should have the same hash.

---

### 2. Data Integrity

If someone changes a committed file, the hash changes.

Git can detect that the content has been modified.

---

### 3. Version Tracking

Git connects commits using hashes.

```text
Commit A
    │
    ▼
Commit B
    │
    ▼
Commit C
```

Each commit stores the hash of its parent commit, creating a history.

---

### 4. Fast Lookup

Git quickly finds commits using their hash.

Example:

```bash
git show a1b2c3
```

Git immediately displays that commit.

---

# Where Can You See Commit Hashes?

### git log

```bash
git log
```

Output:

```text
commit a1b2c3d4e5f67890...
Author: Nishu
Date: ...

Add Login Feature
```

---

### Short Hash

```bash
git log --oneline
```

Output:

```text
a1b2c3 Add Login
b7d8e9 Fix Bug
```

Git usually shows the first 7–10 characters because they are enough to identify a commit in most repositories.

---

# Real-Life Example

Imagine every document in a company receives a **unique barcode**.

```text
Document A → X12345
Document B → Y45678
Document C → Z98765
```

Instead of remembering document names, you can find them using the barcode.

Git commit hashes work the same way.

---

# Interview Questions

### 1. Why does Git use hashing?

Git uses hashing to uniquely identify commits, track changes, and ensure data integrity.

---

### 2. What is a commit hash?

A commit hash is a unique identifier generated for every Git commit.

---

### 3. What happens if a commit changes?

The commit hash also changes because the commit content is different.

---

### 4. Which command shows commit hashes?

```bash
git log
```

or

```bash
git log --oneline
```

---

### 5. Does every commit have a different hash?

**Yes.** Every commit has its own unique hash.

---

# Quick Revision (1 Minute)

- **Git uses Hashing** → To identify commits
- **Commit Hash** → Unique Commit ID
- **Every Commit** → Different Hash
- **Small Change** → New Hash
- **Ensures Data Integrity**
- **Tracks Version History**
- **`git log`** → Shows full commit hash
- **`git log --oneline`** → Shows short commit hash

---

## ⭐ Interview Trick

### Remember:

- **Git = Hash-Based Version Control**
- **Commit = Unique Hash**
- **Hash Changes = Commit Changes**

### Easy Formula

```text
Code Change
     ↓
git commit
     ↓
Git Generates Hash
     ↓
Unique Commit ID
```

> **One-line interview answer:**
> **Git uses hashing to create a unique ID for every commit, maintain version history, and verify that project data has not been modified unexpectedly.**
