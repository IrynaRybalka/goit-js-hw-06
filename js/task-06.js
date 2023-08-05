const inputValid = document.querySelector('#validation-input');


inputValid.addEventListener('blur', handlerOn);




function handlerOn(evt) {
    if (evt.currentTarget.value.length === Number(inputValid.dataset.length)) {
      
        inputValid.classList.add('valid');
      
    } else {
        inputValid.classList.remove('valid');
        inputValid.classList.add('invalid');
    }
}

