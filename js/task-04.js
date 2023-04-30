
let counterValue = 0;
const valueEl = document.getElementById('value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onClickIncrementBtn = () => {
 counterValue += 1
    valueEl.textContent = counterValue;
}

const onClickDecrementBtn = () => {
    counterValue -= 1
    valueEl.textContent = counterValue;
}

incrementBtn.addEventListener("click", onClickIncrementBtn);
decrementBtn.addEventListener("click", onClickDecrementBtn);


