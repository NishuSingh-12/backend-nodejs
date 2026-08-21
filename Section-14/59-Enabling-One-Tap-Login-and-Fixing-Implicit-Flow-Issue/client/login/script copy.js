const button = document.querySelector("button");

const clientID =
  "810768456559-hkoe8mq1ed7jcai405ai192q22c1ntu0.apps.googleusercontent.com";
const redirectUrl = "http://127.0.0.1:5501/callback.html";
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=id_token&nonce=123&client_id=${clientID}&scope=openid email profile&redirect_uri=${redirectUrl}`;

button.addEventListener("click", () => {
  window.open(authUrl, "auth-popup", "width=500, height=600");
});

window.addEventListener("message", async ({ data }) => {
  if (data.message === "success") {
    location.href = "/";
  } else {
    const para = document.createElement("p");
    para.innerText = "Something went wrong!";
    document.body.appendChild(para);
    setTimeout(() => {
      para.remove();
    }, 2000);
  }
});
