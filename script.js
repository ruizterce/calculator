let firstNumber = '';
let secondNumber = '';
let operator;
let operatorSelected = false;
let operationDone = false;

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        reset();
        alert('Dont divide by 0 or the world will colapse!');
    } else {
        return a / b;
    };
};

function operate(a, o, b) {
    switch (o) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    };

};

const display = document.querySelector('#display');
let displayContent = '';

function addToDisplay(a) {
    displayContent += a;
    display.textContent = displayContent;
};

function clearDisplay() {
    displayContent = '';
    display.textContent = displayContent;
};

function reset() {
    clearDisplay();
    firstNumber = '';
    secondNumber = '';
    operator;
    operatorSelected = false;
    operationDone = false;
};


//Add numbers to display and store them to operate
const numbers = document.querySelector('#numbers');
numbers.addEventListener('click', (e) => {
    if (e.target.className === 'number') {

        if (operationDone) {
            clearDisplay();

            operationDone = false;
        }

        let numberToAdd = e.target.textContent;
        addToDisplay(numberToAdd);
        if (!operatorSelected) {
            firstNumber += numberToAdd;
        } else {
            secondNumber += numberToAdd;
        };

    };
});

//Show operator on display and store it to operate
const operators = document.querySelector('#operators');
operators.addEventListener('click', (e) => {
    if (e.target.className === 'operator') {
        let operatorToUse = e.target.textContent;
        clearDisplay();
        addToDisplay(operatorToUse);
        operator = operatorToUse;
        operatorSelected = true;
    };
});

//Execute operation
const equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => {
    if (firstNumber != '' && secondNumber != '' && operatorSelected) {
        let result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        if (result) {
            clearDisplay();
            addToDisplay('=' + result);
            firstNumber = result;
            secondNumber = '';
            operator = '';
            operatorSelected = false;
            operationDone = true;
        }
    }
});
