function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  spanColor.textContent = `- ${randomColor}`;
  bodyColor.style.backgroundColor = randomColor;
});
