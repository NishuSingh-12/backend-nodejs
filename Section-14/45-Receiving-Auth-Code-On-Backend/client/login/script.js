const button = document.querySelector("button");
const baseURL = "http://127.0.0.1:4000";

const clientId =
  "810768456559-hkoe8mq1ed7jcai405ai192q22c1ntu0.apps.googleusercontent.com";
const redirectUrl = "http://127.0.0.1:4000/auth/goggle/callback";

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&scope=openid email profile&redirect_uri=${redirectUrl}`;

button.addEventListener("click", () => {
  window.open(authUrl, "auth-popup", "width=500,height=600");
});

window.addEventListener("message", async ({ data }) => {
  if (data.message === "success") location.href = "/";
});
