const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    console.dir(evt.currentTarget);

    const { email, password } = evt.currentTarget.elements;
    console.log(email);
    console.log(password);

    if (email.value === '' || password.value === '') {
    alert('All fields must be filled');
    }
  console.log({Email: email.value, Password: password.value})
}



