const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const imageELement = document.querySelector("#image");
const logoutBtnElement = document.querySelector("button");

const baseURL = "http://127.0.0.1:4000";

logoutBtnElement.addEventListener("click", async () => {
  const response = await fetch(`${baseURL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (response.status === 204) {
    location.href = "./login";
  }
});

const response = await fetch(`${baseURL}/profile`, {
  credentials: "include",
});
if (response.status === 401) {
  location.href = "./login";
}
const { name: userName, email, picture } = await response.json();

nameElement.textContent = userName;
emailElement.textContent = email;
imageELement.src = picture;
