const inputForm = document.querySelector("#validation-input");
console.log(inputForm);
const textLength = inputForm.dataset.length;
console.log(textLength);

inputForm.addEventListener("blur", () => {
  if (inputForm.value.length === Number.parseInt(textLength)) {
    inputForm.classList.add("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("invalid");
    inputForm.classList.remove("valid");
  }
  console.log(inputForm);
});
