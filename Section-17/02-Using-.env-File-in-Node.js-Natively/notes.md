# 🔐 Using `.env` File in Node.js Natively

### 📌 What is `.env`?

`.env` file is used to store **environment variables**, such as:

- Database URL
- API keys
- JWT secrets
- Port numbers
- Other configuration values

Example:

```env
PORT=3000
DB_URL=mongodb://localhost:27017/mydb
JWT_SECRET=mysecret
```

---

### 📌 Using `.env` Natively in Node.js

Modern Node.js provides **native support** for loading `.env` files, so we don't necessarily need packages like `dotenv`.

Run the application with:

```bash
node --env-file=.env app.js
```

Now variables from `.env` are available through:

```js
process.env.PORT;
process.env.DB_URL;
```

Example:

```js
console.log(process.env.PORT);
```

Output:

```text
3000
```

---

### 📌 Important Points

- `.env` stores configuration/environment variables.
- Access variables using `process.env`.
- Native support means **no `dotenv` package is required**.
- `.env` should generally **not be committed to Git**.
- Add it to `.gitignore`:

```gitignore
.env
```

### 🎤 Interview Point

**Q: How can you load `.env` variables in Node.js without using `dotenv`?**

**A:** Node.js provides native `.env` support using the `--env-file` option:

```bash
node --env-file=.env app.js
```

Then access variables using `process.env`.
