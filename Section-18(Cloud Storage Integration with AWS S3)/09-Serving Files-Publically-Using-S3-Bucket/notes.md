### 🌐 Serving Files Publicly Using S3 Bucket

- By default, S3 objects are **private**.
- To allow anyone to access a file directly, the object/bucket must be configured for **public access**.
- A public S3 object can be accessed through its **object URL**.

Example:

```text
https://bucket-name.s3.amazonaws.com/image.jpg
```

### 📌 Basic Flow

```text
Upload File
     ↓
S3 Bucket
     ↓
Configure Public Access
     ↓
Generate/Use Object URL
     ↓
User accesses the file
```

### ⚠️ Important

- **Do not make the entire bucket public unnecessarily.**
- Public access should only be used for files that are intended to be publicly accessible.
- For private files, use **presigned URLs** instead.
