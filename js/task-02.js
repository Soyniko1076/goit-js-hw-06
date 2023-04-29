const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients)


const newArray = ingredients.map((element) => {
const itemEl = document.createElement("li")
  itemEl.textContent = element;
  itemEl.classList.add("item")
  return itemEl;
})

console.log(newArray)


const listEl = document.querySelector("ul")
console.log(listEl)

listEl.append(...newArray)













