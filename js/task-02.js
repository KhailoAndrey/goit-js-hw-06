const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const arrEl = ingredients.map(ing => {
  const ingEl = document.createElement('li');
  ingEl.textContent = `${ing}`;
  ingEl.classList.add('item');
  return ingEl;
});
list.append(...arrEl);
console.log(list);