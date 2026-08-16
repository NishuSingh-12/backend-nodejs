const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const imageELement = document.querySelector("#image");

const baseURL = "http://127.0.0.1:4000";
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
