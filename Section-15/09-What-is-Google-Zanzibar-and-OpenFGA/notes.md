# Google Zanzibar and OpenFGA

## 1. What is Google Zanzibar?

**Google Zanzibar** is a **global authorization system** developed by Google for managing fine-grained access control across many applications and resources.

It answers questions like:

> **"Can this user perform this action on this resource?"**

Example:

```text
Can Nishu → edit → Project A?
```

Zanzibar can handle complex relationships such as:

```text
User → Member of → Team
Team → Has access to → Project
```

So access can be determined through relationships between users and resources.

---

## 2. What is OpenFGA?

**OpenFGA (Fine-Grained Authorization)** is an **open-source authorization system** inspired by Google's Zanzibar.

It allows developers to define relationships between:

- Users
- Roles
- Resources
- Permissions

Example:

```text
Nishu → viewer → Document A
Nishu → editor → Document B
```

OpenFGA can then answer:

```text
Can Nishu edit Document A?
→ No

Can Nishu view Document A?
→ Yes
```

---

## 3. RBAC vs Zanzibar/OpenFGA

| RBAC                         | Zanzibar / OpenFGA                 |
| ---------------------------- | ---------------------------------- |
| Based mainly on roles        | Based on relationships             |
| Simple authorization         | Fine-grained authorization         |
| Admin, Editor, Viewer        | User → Team → Folder → Document    |
| Easy to implement            | Better for complex permissions     |
| Suitable for many basic apps | Suitable for large/complex systems |

### Example

**RBAC:**

```text
Nishu → Editor → Can edit posts
```

**Relationship-based authorization:**

```text
Nishu → Member of → Development Team
Development Team → Editor of → Project A
Project A → Contains → Document B

Therefore:
Nishu → Can edit → Document B
```

---

## 4. Key Difference ⭐

**Zanzibar** is Google's authorization system and the design/inspiration behind relationship-based authorization systems.

**OpenFGA** is an open-source system inspired by Zanzibar that developers can use to implement **fine-grained, relationship-based authorization**.

### Interview Point 🎯

> **Google Zanzibar is Google's scalable authorization system for fine-grained access control. OpenFGA is an open-source authorization system inspired by Zanzibar that uses relationships between users and resources to determine permissions.**
