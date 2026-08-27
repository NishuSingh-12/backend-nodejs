# Fuzzy Search in Redis

### What is Fuzzy Search?

- **Fuzzy Search** finds results even when the search term is **not an exact match**.
- It is useful for handling **typos, spelling mistakes, or similar words**.
- Redis Search supports fuzzy matching using the `%` operator.

### Example

Suppose Redis contains:

```text
Nishu
Nisha
Nishant
```

A fuzzy search for:

```text
Nish
```

can find similar matching values.

### Fuzzy Search Syntax

```text
%Nishu%
```

The `%` indicates that Redis should perform a fuzzy match.

For example:

```text
FT.SEARCH idx:users "%Nishu%"
```

### Exact vs Fuzzy Search

| Exact Search                   | Fuzzy Search                |
| ------------------------------ | --------------------------- |
| Requires closer/exact matching | Allows approximate matching |
| `Nishu`                        | `%Nishu%`                   |
| Less tolerant of typos         | More tolerant of variations |

### Use Cases

- 🔎 Search boxes
- 👤 User/name search
- 🛒 Product search
- ✍️ Handling spelling mistakes

### Quick Revision ⭐

> **Fuzzy Search = Finding approximately matching results instead of requiring an exact match.**

**Interview:**
**Q: What is fuzzy search in Redis?**
**A:** Fuzzy search allows Redis Search to find approximate matches, making searches more tolerant of spelling variations and typing errors.
