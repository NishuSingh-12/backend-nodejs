import { getSignedUrl } from "@aws-sdk/cloudfront-signer";
import { readFile } from "fs/promises";

const url = `https://d1b307vd9psr61.cloudfront.net/myPic.jpg`;
const privateKey = await readFile("./private_key.pem", "utf-8");
const keyPairId = "K3SSKG20H7O";
const dateLessThan = new Date(Date.now() + 1000 * 15).toISOString(); // any Date constructor compatible

const signedUrl = getSignedUrl({
  url,
  keyPairId,
  dateLessThan,
  privateKey,
});

console.log(signedUrl);

// openssl genrsa -out private_key.pem 2048
// openssl rsa -in private_key.pem -pubout -out public_key.pem
