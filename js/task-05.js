const inputForm = document.querySelector("#name-input");
console.log(inputForm);
const outputStr = document.querySelector("#name-output");
console.log(outputStr);

inputForm.addEventListener('input', (event) => {
    outputStr.textContent = event.currentTarget.value;
    if (outputStr.textContent === '') {
        outputStr.textContent = "Anonymous";
    }
})