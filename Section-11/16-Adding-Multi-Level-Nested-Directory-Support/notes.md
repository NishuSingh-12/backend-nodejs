Adding Multi-Level Nested Directory Support

To support any number of nested directories, use a wildcard route parameter.

Express 5:

app.get("/directory{/\*path}", (req, res) => {
const { path } = req.params;

res.json(path);
});

Request:

/directory/photos/2025/june

Response:

["photos", "2025", "june"]

Convert it into a directory path:

const dirname = req.params.path.join("/");

Result:

photos/2025/june

In one line:
Multi-level nested directory support uses a wildcard route parameter to capture all remaining URL segments, allowing paths like /directory/folder1/folder2/folder3.
