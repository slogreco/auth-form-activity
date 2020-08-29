const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signUpButton = document.querySelector("#sign-up");
const msgDiv = document.querySelector("#msg");
const userEmailSpan = document.querySelector("#user-email");
const userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");
  // Fill in code here to retrieve the last email and password.
if (!email || !password) {
  return;
}
  // If they are null, return early from this function
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
  // Else set the text of the userEmailSpan and userPasswordSpan 
  
  // to the corresponding values form local storgage
  
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  let email = emailInput.value;
  let password = passwordInput.value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  localStorage.setItem("email", email);
localStorage.setItem("password", password);
renderLastRegistered();
  }
});
