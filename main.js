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
  handleNumber(e.target.value);
  currentScreen.textContent = currentValue;
}));

operationsButtons.forEach((opr) => opr.addEventListener("click", function(e){
  handleOperator(e.target.value);
  lastScreen.textContent = previousValue + " " + operator; 
  currentScreen.textContent = currentValue;
}));

clearAllButton.addEventListener("click", function(){
  previousValue = '';
  currentValue = '';
  operator = '';
  lastScreen.textContent = '';
  currentScreen.textContent = '';
})

equalsButton.addEventListener("click", function(){
  if(currentValue != '' && previousValue != ''){
    calculate();
    lastScreen.textContent = '';
    if(previousValue.length <= 5){
      currentScreen.textContent = previousValue;
    } else {
      currentScreen.textContent = previousValue.slice(0, 5) + "...";
    }
  }
})

decimalButton.addEventListener("click", function(){
  addDecimal();
})

function handleNumber(num){
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator(opr){
  operator = opr;
  previousValue = currentValue;
  currentValue = '';
}

function calculate(){
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if(operator === "+"){
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "x") {
    previousValue *= currentValue;
  } else  {
    previousValue /= currentValue;
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = currentValue.toString();
  currentValue = previousValue;
} 

function roundNumber(num){
  return Math.round(num * 1000) / 1000;
}

function addDecimal(){
  if(!currentValue.includes(".")){
    currentValue += ".";
  }
}
