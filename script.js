let calculator = {
  previousOperand: '',
  currentOperand: '',
  operation: null,
}


const display = document.querySelector('#display');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-all-clear]');
const equals = document.querySelector('[data-equals]');

allClear.addEventListener('click', () => {
  window.location.reload();
});

equals.addEventListener('click', () => {
  currentOperand.textContent += ` = ${operate(calculator.operation, calculator.previousOperand, calculator.currentOperand)}`;
  display.appendChild(currentOperand);
});


numberBtns.forEach((number) => {
  number.addEventListener('click', () => appendNumber(number.textContent));
});

operationBtns.forEach((operator) => {
  operator.addEventListener('click', () => appendOperation(operator.textContent));
});

function appendNumber(button){
    if (calculator.operation != null){
      currentOperand.textContent += button
      display.appendChild(currentOperand);
      calculator.currentOperand += button
  } else {
      previousOperand.textContent += button
      display.appendChild(previousOperand);
      calculator.previousOperand = previousOperand.textContent
  }
}

function appendOperation(button){
  previousOperand.textContent += button;
  display.appendChild(previousOperand);
  calculator.operation = button;
}


function operate(operator, num1, num2){
  let a = Number(num1);
  let b = Number(num2);

  switch (operator){
  case '+':
    return (add(a, b))
    break
  case '-':
    return subtract(a, b)
    break;
  case '*':
    return multiply(a, b)
    break;
  case '÷':
    return divide(a, b)
    break;
  }
}


function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}