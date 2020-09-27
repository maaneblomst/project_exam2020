//Form validation - Sign up//
let form = document.forms.formContainer;
form.addEventListener("submit", validateForm);
let userInput;

function validateForm(event) {
  event.preventDefault();
  let formValid = false;
  //Removes "old" errors when reloaded:
  let formMessages = document.querySelectorAll(".form-error");
  formMessages.forEach((div) => {
    div.style.display = "none";
  });
  //Creates an object to declare all relevant values. Name and e-mail is trimmed for uneccesary spaces.
  //reqLength represents the required characters of the input fields, and the divs for the error messages.
  userInput = {
    name: {
      value: form.name.value.trim(),
      length: form.name.value.length,
      reqLength: 1,
      error: document.querySelector("#nameError"),
      valid: false,
    },
    email: {
      value: form.email.value.trim(),
      length: form.email.value.length,
      reqLength: 1,
      error: document.querySelector("#emailError"),
      regexError: document.querySelector("#invalidEmailError"),
      valid: false,
      validRegex: false,
    },
  };
  //Loop for length-check and required fields. Display error-message if it doesnt meet the requirements.
  for (let input in userInput) {
    if (
      checkInputLength(userInput[input].length, userInput[input].reqLength) ===
      true
    ) {
      userInput[input].valid = true;
    } else {
      userInput[input].error.style.display = "block";
    }
  }
  //Validate the e-mailaddress for proper formatting. If its not properly formatted, display error-message:
  if (userInput.email.length > 0) {
    if (validateEmail(userInput.email.value)) {
      userInput.email.validRegex = true;
    } else {
      userInput.email.regexError.style.display = "block";
    }
  }
  //Function for the length-check loop.
  function checkInputLength(length, reqLength) {
    if (length >= reqLength) {
      return true;
    }
    return false;
  }
  //RegEx function is taken from a previous lesson in JS, to make sure the e-mail is properly formatted.
  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  }
  //Identify the valid inputs, and assign to a variable.
  formValid =
    userInput.name.valid && userInput.email.valid && userInput.email.validRegex;

  //If all of the input is validated, add a new div and display a success-message instead of the form:
  if (formValid === true) {
    let successfulValidation = document.querySelector(".container");
    const addSuccess = document.createElement("div");
    addSuccess.className = "form-valid";
    addSuccess.innerText = `3..2..1...Thank you!`;
    successfulValidation.appendChild(addSuccess);
    addSuccess.after(document.querySelector("#formContainer"));
    document.querySelector("#formContainer").hidden = true;
    document.querySelector(".form-image").hidden = true;
  }
}
