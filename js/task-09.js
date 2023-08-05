const elements = {
  color: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body: document.querySelector('body')
}

elements.button.addEventListener('click', onClick) 

function onClick(evt) {
  let randomColor = getRandomHexColor();
  elements.body.style.backgroundColor = randomColor;
  elements.color.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


