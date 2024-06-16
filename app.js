/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let secondNumber = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log('Button clicked: ', event.target.innerText);
        const value = event.target.innerText;

        if (button.classList.contains('number')) {
            console.log('Number button clicked');
            updateDisplay(value);
        } else if (button.classList.contains('operator') || button.classList.contains('equals')) {
            console.log('Operator or equals button clicked');
            handleOperator(value);
        }
    });
  });

/*-------------------------------- Functions --------------------------------*/

function updateDisplay(value) {
    display.textContent += value;
}

function handleOperator(value) {
    if (value === 'C') {
        display.textContent = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
    } else if (value === '=') {
        secondNumber = display.textContent;
        let result;
        if (operator === '+') {
            result = Number(firstNumber) + Number(secondNumber);
        } else if (operator === '-') {
            result = Number(firstNumber) - Number(secondNumber);
        } else if (operator === '*') {
            result = Number(firstNumber) * Number(secondNumber); 
        } else if (operator === '/') {
            result = Number(firstNumber) / Number(secondNumber);
        }
        display.textContent = result;
        firstNumber = '';
        secondNumber = '';
        operator = '';
     } else {
        firstNumber = display.textContent;
        operator = value;
        display.textContent = '';
        
    }
}

