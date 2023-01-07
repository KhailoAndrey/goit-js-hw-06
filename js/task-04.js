const counterValue = 0;

const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const currentValue = document.querySelector("#value");

const clickBtnDecr = (counterValue) => {
  counterValue = Number.parseInt(currentValue.textContent);
  counterValue--;
  console.log(counterValue);
  currentValue.textContent = counterValue;
  return counterValue;
};

const clickBtnIncr = (counterValue) => {
  counterValue = Number.parseInt(currentValue.textContent);
  counterValue++;
  console.log(counterValue);
  currentValue.textContent = counterValue;
  return counterValue;
};

btnDecr.addEventListener("click", clickBtnDecr);
btnIncr.addEventListener("click", clickBtnIncr);
