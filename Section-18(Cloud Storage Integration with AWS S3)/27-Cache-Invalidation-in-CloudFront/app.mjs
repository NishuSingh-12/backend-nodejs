import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from "@aws-sdk/client-cloudfront";

const cloudfrontClient = new CloudFrontClient({ profile: "nodejs" });

const command = new CreateInvalidationCommand({
  DistributionId: "E2D4A99YS2K66P",
  InvalidationBatch: {
    CallerReference: "1234",
    Paths: {
      Quantity: 1,
      Items: ["/myPic.jpg"],
    },
  },
});
const response = await cloudfrontClient.send(command);
console.log(response);
