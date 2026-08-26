import { OAuth2Client } from "google-auth-library";

const clientId =
  "810768456559-hkoe8mq1ed7jcai405ai192q22c1ntu0.apps.googleusercontent.com";

const client = new OAuth2Client({
  clientId,
});

export async function verifyIdToken(idToken) {
  const loginTicket = await client.verifyIdToken({
    idToken,
    audience: clientId,
  });

  const userData = loginTicket.getPayload();
  return userData;
}
