Why We Await Twice When Making a Fetch Call?

Example:

const response = await fetch("https://api.example.com/users");

const data = await response.json();

console.log(data);

Notice that we use await twice.

First Await: Waiting for the HTTP Response
const response = await fetch(url);

This waits for:

Request Sent
↓
Server Responds
↓
Response Headers Received

After this, we get a Response object.

Example:

Response {
status: 200,
headers: {...},
body: ReadableStream
}

Important:

At this point, the response body has not necessarily been fully read yet.

Second Await: Waiting for the Body to be Read
const data = await response.json();

The body arrives as a stream.

Server
↓
Chunk 1
Chunk 2
Chunk 3
↓
Browser

response.json():

Reads all chunks
Combines them
Parses JSON
Returns JavaScript object

Since this takes time, it also returns a Promise.

That's why we need:

await response.json();
Visual Flow
await fetch()
↓
Response Headers Received
↓
Response Object Returned
↓
await response.json()
↓
Body Read Completely
↓
JSON Parsed
↓
JavaScript Object Returned
What Does fetch() Actually Return?
const response = await fetch(url);

Returns:

Response {
status: 200,
headers: Headers,
body: ReadableStream
}

The body is a stream, not the final data.

Other Body Methods
await response.json();

JSON data

await response.text();

Plain text

await response.blob();

Images/files

await response.arrayBuffer();

Binary data

All require await because they read the response body asynchronously.

Real Analogy

Imagine ordering food:

First Await
await fetch()

Wait for waiter to bring the food tray to your table.

You now have the tray.

Second Await
await response.json()

Open the tray and eat the food.

The tray arrived earlier, but the contents still need to be processed.
