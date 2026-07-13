RegEx in Routes

Regular Expressions (RegEx) can be used in Express routes to match URL patterns more precisely.

Example

Match only numeric IDs:

app.get(
"/users/:id(\\d+)",
(req, res) => {
res.send(`User ${req.params.id}`);
}
);

Matches:

/users/123

Does NOT match:

/users/abc

Because \d+ means one or more digits.

Common RegEx Patterns

Only digits:

\d+

Only letters:

[a-zA-Z]+

Letters and numbers:

[a-zA-Z0-9]+
Use Case
app.get(
"/product/:id(\\d+)",
handler
);

Ensures that only numeric product IDs are accepted.

One-line definition:
RegEx routes use regular expressions to restrict which URL patterns can match a route. 🚀

Note: Route parameter regex syntax like :id(\\d+) is commonly seen in Express 4 examples. In newer Express versions, route matching is based on newer path-to-regexp behavior, so always check the version-specific documentation if you run into route pattern issues.
