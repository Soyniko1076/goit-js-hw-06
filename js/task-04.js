
let counterValue = 0;
const valueEl = document.getElementById('value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

valueEl.textContent = 5;

const onClickIncrementBtn = () => {
    valueEl.textContent = counterValue +=1
}

const onClickDecrementBtn = () => {
    valueEl.textContent = counterValue -=1;
}

incrementBtn.addEventListener("click", onClickIncrementBtn);
decrementBtn.addEventListener("click", onClickDecrementBtn);


