const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
  

    const { email, password } = evt.currentTarget.elements;
   

    if (email.value === '' || password.value === '') {
    return alert('All fields must be filled');
    }
  console.log({ email: email.value, password: password.value });
  evt.currentTarget.reset();
}



