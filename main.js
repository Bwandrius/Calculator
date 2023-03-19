const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const clearAllButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

const allCalcButtons = document.querySelectorAll('button');
console.log(allCalcButtons);

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


