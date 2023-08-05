const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', handlerOn);


function handlerOn(evt) {
    output.textContent = evt.currentTarget.value.trim();
    if (evt.currentTarget.value.trim() === "") {
        output.textContent = "Anonymous";
        
    }
}

