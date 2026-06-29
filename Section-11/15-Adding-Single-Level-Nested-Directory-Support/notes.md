Adding Single-Level Nested Directory Support

To support a directory and one nested subdirectory, you can define a route parameter for each level.

Example:

app.get("/:dirname/:subdirname", (req, res) => {
const { dirname, subdirname } = req.params;

res.send(`Directory: ${dirname}, Subdirectory: ${subdirname}`);
});

Request:

/photos/vacation

Values:

req.params.dirname; // "photos"
req.params.subdirname; // "vacation"

If you want to support both a single directory and a nested directory:

app.get("/:dirname", handler);

app.get("/:dirname/:subdirname", handler);

In one line:
Single-level nested directory support allows URLs like /parent/child by capturing both directory names as route parameters.
