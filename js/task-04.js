// let counterValue = 0;

// document.addEventListener('click', function (event) {
  
//  Get the event handler
//   let handler = event.target.getAttribute('data-action');

  
//   if(handler === "decrement") {
//         counterValue--;
//         replaceCounter(counterValue);
//     } 
//     else if(handler === "increment") {
//         counterValue++;
//         replaceCounter(counterValue);
//     }

//     console.log(counterValue);

// });

// function replaceCounter(newCounter) {
//     let displayCount = document.getElementById("value");
//     displayCount.innerHTML = newCounter;
// }


const buttons = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]')
}

const counter = document.querySelector('#value');

buttons.decrement.addEventListener('click', changeCounter);
buttons.increment.addEventListener('click', changeCounter);

function changeCounter(evt) {
    let counterValue = Number(counter.textContent);
    let type = evt.target.dataset.action;


    if (type === "decrement") {
        counterValue -= 1;
    }
    else if (type === "increment") {
       counterValue += 1;  
    }
    counter.textContent = counterValue;
}
