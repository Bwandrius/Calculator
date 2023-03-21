let operator = '';
let previousValue = '';
let currentValue = '';

const numberButtons = document.querySelectorAll('.num-button');
const operationsButtons = document.querySelectorAll('.operation-button');
const clearAllButton = document.querySelector('#gb-ce');
const deleteButton = document.querySelector('#gb-c');
const decimalButton = document.querySelector('#gb-decimal');
const equalsButton = document.querySelector('#gb-equals');

const lastScreen = document.querySelector('#lastOperationScreen');
const currentScreen = document.querySelector('#currentOperationScreen')


const buttonContainer = document.querySelector('.button-container');
function changeBackground(event) {
  const button = event.target;
  if (button.id === 'gb-equals') {
    button.style.backgroundColor = 'rgb(203, 125, 29)';
  } else {
    button.style.backgroundColor = 'rgb(200, 198, 164)';
  }
  setTimeout(() => {
    button.style.backgroundColor = '';
  }, 150);
}
buttonContainer.addEventListener('click', changeBackground);

numberButtons.forEach((number) => number.addEventListener("click", function(e){
  handleNumber(e.target.value)
  currentScreen.textContent = currentValue
}));

function handleNumber(num){
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}


