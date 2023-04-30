
const rangeRef = document.getElementById("font-size-control")

const textEl = document.getElementById("text")

rangeRef.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}