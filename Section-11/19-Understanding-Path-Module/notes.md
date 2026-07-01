Understanding Path Module

The Path Module is a built-in Node.js module used for working with file and directory paths in a platform-independent way.

Import it:

import path from "path";

Common methods:

path.join()

Joins path segments together.

path.join("uploads", "images", "photo.jpg");

Output:

uploads/images/photo.jpg
path.resolve()

Creates an absolute path.

path.resolve("uploads");

Output (example):

/project/uploads
path.basename()

Returns the file name.

path.basename("/files/report.pdf");

Output:

report.pdf
path.dirname()

Returns the directory name.

path.dirname("/files/report.pdf");

Output:

/files
path.extname()

Returns the file extension.

path.extname("report.pdf");

Output:

.pdf

In one line:
The Node.js path module provides utilities for safely creating, resolving, and manipulating file and directory paths.
