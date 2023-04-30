function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.body;


changeColorBtn.addEventListener('click', changeColor);

function changeColor () {
  textColorEl.textContent = getRandomHexColor();
  body.style.backgroundColor = textColorEl.textContent;
};




