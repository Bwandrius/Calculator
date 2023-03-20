const numberButtons = document.querySelectorAll('.num-button');
const operationsButtons = document.querySelectorAll('.operation-button');
const clearAllButton = document.querySelector('#gb-ce');
const deleteButton = document.querySelector('#gb-c');
const equalsButton = document.querySelector('#gb-equals');

const allCalcButtons = document.querySelectorAll('button');
console.log(operationsButtons);


function changeBackground(button) {
  
  if(button.id == "gb-equals") {
    button.style.backgroundColor = 'rgb(203, 125, 29)';
  } else {
    button.style.backgroundColor = 'rgb(200, 198, 164)';
  }

  setTimeout(() => {
    button.style.backgroundColor = '';
  }, 150);
}  

allCalcButtons.forEach(button => button.addEventListener('click', () => changeBackground(button)));


