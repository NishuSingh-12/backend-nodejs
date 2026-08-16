const button = document.querySelector("button");
const baseURL = "http://127.0.0.1:4000";

const clientId =
  "810768456559-hkoe8mq1ed7jcai405ai192q22c1ntu0.apps.googleusercontent.com";
const redirectUrl = "http://127.0.0.1:5501/callback.html";

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&scope=openid email profile&redirect_uri=${redirectUrl}`;

button.addEventListener("click", () => {
  window.open(authUrl, "auth-popup", "width=500,height=600");
});

window.addEventListener("message", async ({ data }) => {
  const response = await fetch(`${baseURL}/auth/goggle/callback`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const responseData = await response.json();
  console.log(responseData);

  location.href = "/";
});
