console.log("hi");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function () {
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirmPassword");
  let errorText = document.querySelector("#passwordError");
  if (password.value === confirmPassword.value) {
    errorText.className = "";
    console.log("correct");
    password.value = "";
    confirmPassword.value = "";
  } else {
    errorText.className = "error";
    console.log(password);
    console.log(confirmPassword);
    password.value = "";
    confirmPassword.value = "";
  }
});
