Creating Virtual File System

A Virtual File System (VFS) is an in-memory representation of files and directories that behaves like a real file system without storing data on disk.

Example:

const vfs = {
documents: {
"notes.txt": "Hello World"
},
images: {}
};

Accessing a file:

console.log(
vfs.documents["notes.txt"]
);

Output:

Hello World

Creating a directory:

vfs.projects = {};

Creating a file:

vfs.projects["app.js"] =
"console.log('Hello')";

Result:

{
projects: {
"app.js": "console.log('Hello')"
}
}

In one line:
A Virtual File System is a data structure that simulates files and directories in memory without using the actual disk.
