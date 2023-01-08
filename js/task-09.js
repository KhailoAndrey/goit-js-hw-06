function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
console.log(changeColorBtn);

const spanColor = document.querySelector(".color");
console.log(spanColor);

const bodyColor = document.querySelector("body");
console.log(bodyColor);

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  spanColor.textContent = `- ${randomColor}`;
  bodyColor.style.backgroundColor = randomColor;
});
