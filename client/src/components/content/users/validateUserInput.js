export function validateUserInput(user, e) {
  // Validate the name field
  if (user.name.trim() === "") {
    alert("Please enter a name.");
    const nameInput = e.target.querySelector("#name");
    nameInput.focus();
    return false;
  }
  // Validate the email field
  if (user.email.trim() === "") {
    alert("Please enter an email.");
    const emailInput = e.target.querySelector("#email");
    emailInput.focus();
    return false;
  }
  // Validate the password field
  if (user.password.trim() === "") {
    alert("Please enter a password.");
    const passwordInput = e.target.querySelector("#password");
    passwordInput.focus();
    return false;
  }
  return true;
}
