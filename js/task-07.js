const rangeInput = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

rangeInput.addEventListener("input", (event) => {
  outputText.style.fontSize = `${event.currentTarget.value}px`;
});
