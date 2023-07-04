export function validateLoginInput(username, password, e) {
  let message = "";

  // Validate the name field
  if (username.trim() === "") {
    message = "Please enter an email.";
    const nameInput = e.target.querySelector("#email");
    nameInput.focus();
    return [false, message];
  }
  // Validate the password field
  if (password.trim() === "") {
    message = "Please enter a password.";
    const passwordInput = e.target.querySelector("#password");
    passwordInput.focus();
    return [false, message];
  }
  return [true, message];
}
