const inputForm = document.querySelector(".login-form");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {};
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Будь-ласка, заповнiть усi поля!");
  }
  userData.email = email.value;
  userData.password = password.value;
  console.log(userData);
  event.currentTarget.reset();
});
