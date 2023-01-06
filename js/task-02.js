const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const arrEl = [];
ingredients.forEach((ing) => {
  const ingEl = document.createElement('li');
  ingEl.textContent = `${ing}`;
  ingEl.classList.add('item');
  arrEl.push(ingEl);
});
// arrEl.forEach((el) => list.appendChild(el));
// console.log(arrEl);
list.append(...arrEl);
console.log(list);