const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const itemsIngredients = [];


function createEl(arr) {
  const markup = arr.map((item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = item;
    itemsIngredients.push(li);
  })
    .join('');
  console.log(itemsIngredients);
  list.append(...itemsIngredients);
};
createEl(ingredients);

// const li = document.createElement('li')
// console.dir(li); 
// li.textContent = 'Potatoes';
// li.classList.add('item');
// const li2 = document.createElement('li')
// li2.textContent = 'Mushrooms';
// li2.classList.add('item');

// const li3 = document.createElement('li')
// li3.textContent = 'Garlic';
// li3.classList.add('item');

// const li4 = document.createElement('li')
// li4.textContent = 'Tomatos';
// li4.classList.add('item');

// const li5 = document.createElement('li')
// li5.textContent = 'Herbs';
// li5.classList.add('item');

// const li6 = document.createElement('li')
// li6.textContent = 'Condiments';
// li6.classList.add('item');
// list.append(li,li2,li3,li4,li5,li6)

