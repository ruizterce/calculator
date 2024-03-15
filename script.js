let firstNumber = '';
let secondNumber = '';
let operator = '';
let operatorSelected = false;

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

//Populate and clear display functions
const displayLine1 = document.querySelector('#displayLine1');
let displayLine1Content = '';
const displayLine2 = document.querySelector('#displayLine2');
let displayLine2Content = '';

function addToDisplayLine1(a) {
    displayLine1Content += a;
    displayLine1.textContent = displayLine1Content;
};
function addToDisplayLine2(a) {
    displayLine2Content += a;
    displayLine2.textContent = displayLine2Content;
};


function clearDisplayLine1() {
    displayLine1Content = '';
    displayLine1.textContent = displayLine1Content;
};

function clearDisplayLine2() {
    displayLine2Content = '';
    displayLine2.textContent = displayLine2Content;
};

function reset() {
    clearDisplayLine1();
    clearDisplayLine2();
    firstNumber = '';
    secondNumber = '';
    operator = '';
    operatorSelected = false;
};

const allClear = document.querySelector('#allClear');
allClear.addEventListener('click', () => {
    reset();
});

function clearLine() {
    if (!operatorSelected) {
        clearDisplayLine1();
        firstNumber = '';
    } else {
        clearDisplayLine2();
        secondNumber = '';
        operator = ''
        operatorSelected = false;
    }
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    clearLine();
});


//Add numbers to display and store them to operate
const numbers = document.querySelector('#numbers');
numbers.addEventListener('click', (e) => {
    if (e.target.className === 'number') {


        let numberToAdd = e.target.textContent;


        if (!operatorSelected) {
            if (displayLine1Content.includes('=')) {
                reset();
            };

            if (numberToAdd === '.') {
                if (firstNumber === '') {
                    firstNumber += '0';
                    addToDisplayLine1('0');
                } else if (firstNumber.includes('.')) {
                    return;
                }
            };

            if (firstNumber.length < 13) {
                firstNumber += numberToAdd;
                addToDisplayLine1(numberToAdd);
            }
        } else {
            if (numberToAdd === '.') {
                if (secondNumber === '') {
                    secondNumber += '0';
                    addToDisplayLine2('0');
                } else if (secondNumber.includes('.')) {
                    return;
                }
            };

            if (secondNumber.length < 13) {
                secondNumber += numberToAdd;
                addToDisplayLine2(numberToAdd);
            }
        };
        new Audio('/click.wav').play();
    };

});

//Show operator on display and store it to operate
const operators = document.querySelector('#operators');
operators.addEventListener('click', (e) => {
    if (e.target.className === 'operator') {
        let operatorToUse = e.target.textContent;

        if (firstNumber === '') {
            if (operatorToUse === '-') {
                firstNumber += '-';
                addToDisplayLine1('-');
            } else {
                return;
            }
        } else {
            clearDisplayLine2();
            addToDisplayLine2(operatorToUse);
            operator = operatorToUse;
            operatorSelected = true;
        };
    };
});

//Execute operation
const equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => {
    if (firstNumber != '' && secondNumber != '' && operatorSelected) {
        let result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        if (result) {
            clearDisplayLine1();
            clearDisplayLine2();


            if (result.toString().length > 13) {
                addToDisplayLine1('Err');
                firstNumber = '';
            } else {
                addToDisplayLine1('=' + result);
                firstNumber = result;
            };
            secondNumber = '';
            operator = '';
            operatorSelected = false;
        }
    }
});
