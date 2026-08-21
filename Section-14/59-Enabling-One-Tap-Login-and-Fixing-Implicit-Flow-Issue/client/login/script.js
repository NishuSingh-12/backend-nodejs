const clientID =
  "810768456559-hkoe8mq1ed7jcai405ai192q22c1ntu0.apps.googleusercontent.com";
window.onload = function () {
  google.accounts.id.initialize({
    client_id: clientID,
    callback: (response) => {
      if (response.credential) {
        loginUserWithIdToken(response.credential);
      } else {
        console.log("Something went wrong");
      }
    },
  });
  google.accounts.id.renderButton(document.getElementById("google-login"), {
    theme: "filled_blue",
    shape: "circle",
  });
  google.accounts.id.prompt();
};

async function loginUserWithIdToken(idToken) {
  console.log(idToken);
  const baseURL = "http://127.0.0.1:4000";
  const response = await fetch(`${baseURL}/auth/google`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ idToken }),
  });
  if (response.status === 200) {
    location.href = "/";
  }
}
