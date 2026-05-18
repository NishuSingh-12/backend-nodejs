Introduction to Streams in Node.js
🧠 What are Streams?

Streams are a way to handle data piece by piece instead of loading the entire data into memory at once.

They process data in:

small chunks

which makes them memory efficient.

Why Streams Are Needed?

Suppose you have a:

5 GB video file

If you use normal file reading:

readFile()

the entire file loads into RAM.

This can:

increase memory usage
slow the application
crash the process

Streams Solution

Streams read data gradually in chunks.

File
↓
Chunk 1
Chunk 2
Chunk 3
↓
Process Data

So memory usage stays low.

Benefits of Streams

✅ Low memory usage
✅ Faster processing
✅ Efficient for huge files
✅ Better performance
✅ Real-time data handling

Streams vs Buffers
Buffers Streams
Entire data in memory Chunk-by-chunk processing
High memory usage Memory efficient
Good for small data Good for large data

Common Use Cases
video streaming
file uploads
downloading large files
real-time communication
compression
