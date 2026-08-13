const code = new URLSearchParams(location.search).get("code");

const clientId =
  "810768456559-hkoe8m405ai192q22c1ntu0.apps.googleusercontent.com";

const clientSecret = "GOCSTgWuVc1_";
const redirectUrl = "http://localhost:5500";

if (code) {
  fetchIdToken();
}

async function fetchIdToken() {
  console.log("Running fetchIdToken Function....");
  const payload = `code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUrl}&grant_type=authorization_code`;
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  });
  const data = await response.json();
  if (data.error) {
    console.log("Error Occurred");
    console.log(data);
    return;
  }
  const userToken = data.id_token.split(".")[1];
  const userData = JSON.parse(atob(userToken));
  console.log(data);
  console.log(userData);
}
