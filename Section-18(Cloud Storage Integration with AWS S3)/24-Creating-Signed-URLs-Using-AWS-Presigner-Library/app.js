import {
  GetObjectCommand,
  PutObjectAclCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({ profile: "nodejs" });

// ********** GET Signed URL *********** //

// const command = new GetObjectCommand({
//   Bucket: "coderr-nodejs-buket",
//   Key: "index.html",
// });
// const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
// console.log(url);

// ********** PUT Signed URL *********** //

const command = new PutObjectAclCommand({
  Bucket: "coderr-nodejs-buket",
  Key: "myPic.jpg",
  ContentType: "image/jpg",
});

const url = await getSignedUrl(s3Client, command, {
  expiresIn: 3600,
  signableHeaders: new Set(["content-type"]),
});
console.log(url);
