Showing Upload Progress While Using Multer in Backend

Multer itself does not provide upload progress information.

Upload progress is usually tracked on the client side while the file is being sent to the server.

Example using XMLHttpRequest:

const xhr = new XMLHttpRequest();

xhr.upload.onprogress = (event) => {
const percent =
(event.loaded / event.total) \* 100;

console.log(`${percent}% uploaded`);
};

xhr.open("POST", "/upload");
xhr.send(formData);

Output:

25% uploaded
50% uploaded
75% uploaded
100% uploaded

On the backend, Multer only receives the file stream and processes it after the upload reaches the server.

In one line:
Upload progress is typically tracked on the client side using XMLHttpRequest or similar APIs; Multer does not provide upload progress tracking by itself.
