## Comparing CloudFront Pricing with S3 Pricing

### S3 Pricing

You mainly pay for:

- **Storage** → data stored in S3
- **Requests** → GET, PUT, DELETE, etc.
- **Data transfer** → especially data transferred out of S3

### CloudFront Pricing

You mainly pay for:

- **Data transfer** from CloudFront to users
- **HTTP/HTTPS requests**
- Other features such as invalidations or additional services, depending on usage

### Simple Difference

| S3                         | CloudFront                                   |
| -------------------------- | -------------------------------------------- |
| Stores files               | Delivers files                               |
| Origin storage             | CDN                                          |
| Users can request directly | Users get cached content from edge locations |
| Storage cost is important  | Data transfer/request cost is important      |

### Important Point

When using:

```text
User → CloudFront → S3
```

CloudFront can **cache frequently requested files**, reducing repeated requests to S3 and improving delivery speed.

> S3 is primarily a storage service, while CloudFront is a content delivery service. Their pricing is based on different types of usage.
