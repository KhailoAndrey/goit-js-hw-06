function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberEl = document.querySelector("[type=number]");

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

const boxItems = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = numberEl.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const arrEl = [];
  let widthValue = 30;
  let heightValue = 30;
  for (let i = 1; i <= amount; i++) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${widthValue}px`;
    boxEl.style.height = `${heightValue}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    arrEl.push(boxEl);
    widthValue += 10;
    heightValue += 10;
  }
  boxItems.append(...arrEl);
}

function destroyBoxes() {
  boxItems.innerHTML = "";
  numberEl.value = "";
}
