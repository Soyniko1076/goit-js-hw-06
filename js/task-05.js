
const refs = {
    input: document.getElementById("name-input"),
    output: document.getElementById("name-output"),
}

refs.input.addEventListener("input", inputYourName)

function inputYourName (event) {
    refs.output.textContent = refs.input.value !== ""
        ? event.currentTarget.value
        : 'Anonymous';
};



