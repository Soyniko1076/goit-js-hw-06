const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const newArray = ingredients.map((element) => {
const itemEl = document.createElement("li")
  itemEl.textContent = element;
  itemEl.classList.add("item")
  return itemEl;
})




const listEl = document.querySelector("ul")


listEl.append(...newArray)













