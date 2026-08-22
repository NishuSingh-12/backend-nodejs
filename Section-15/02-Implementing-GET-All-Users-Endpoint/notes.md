# Implementing GET All Users Endpoint

### What is GET All Users Endpoint?

A **GET All Users endpoint** is an API endpoint used to retrieve a list of all users from the database.

Example:

```http
GET /users
```

### Basic Flow

```text
Client
  ↓
GET /users
  ↓
Express Route
  ↓
Controller
  ↓
Database
  ↓
Users List
  ↓
JSON Response
```

### Example

```js
export const getAllUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    users,
  });
};
```

### Route

```js
router.get("/users", getAllUsers);
```

### Response

```json
{
  "users": [
    {
      "name": "John",
      "email": "john@example.com"
    },
    {
      "name": "Jane",
      "email": "jane@example.com"
    }
  ]
}
```

### Important Points ⭐

- Use **GET** when retrieving data.
- `User.find()` retrieves all user documents.
- Return the users using `res.json()`.
- Usually, sensitive fields like **passwords should not be returned**.
- In real applications, authentication/authorization should be added so only authorized users (e.g., **Admin**) can access all users.

### Interview Point 🎯

> **A GET All Users endpoint retrieves all user records from the database and returns them to the client, usually as a JSON response.**
