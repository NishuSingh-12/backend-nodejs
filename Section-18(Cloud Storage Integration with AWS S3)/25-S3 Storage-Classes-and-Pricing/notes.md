### 💾 S3 Storage Classes and Pricing

Amazon S3 provides different **storage classes** based on how frequently data is accessed.

### 📌 Common Storage Classes

| Storage Class                     | Best For                                   |
| --------------------------------- | ------------------------------------------ |
| **S3 Standard**                   | Frequently accessed data                   |
| **S3 Intelligent-Tiering**        | Data with changing/unknown access patterns |
| **S3 Standard-IA**                | Infrequently accessed data                 |
| **S3 One Zone-IA**                | Infrequently accessed, non-critical data   |
| **S3 Glacier Instant Retrieval**  | Archive data that needs quick access       |
| **S3 Glacier Flexible Retrieval** | Long-term archive with occasional access   |
| **S3 Glacier Deep Archive**       | Very long-term, rarely accessed data       |

### 💰 S3 Pricing

S3 pricing generally depends on:

- **Storage** → Amount of data stored
- **Requests** → Number/type of API operations
- **Data transfer** → Data transferred out of AWS
- **Data retrieval** → Applies to some storage classes
- **Minimum storage duration** → Applies to certain classes

### 🎯 Interview Point

**Why does S3 have different storage classes?**

> Different storage classes allow you to choose a storage option based on data access frequency, retrieval requirements, and cost.
