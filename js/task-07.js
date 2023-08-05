const elements = {
    inputRange: document.querySelector('#font-size-control'),
    textChange: document.querySelector('#text')
}

elements.inputRange.addEventListener('input', handleRange);

function handleRange(evt) {
    const fontText = evt.currentTarget.value;
    // console.log(`${fontText}px`);
    // console.log(evt)
    elements.textChange.style.fontSize = `${fontText}px`;
}