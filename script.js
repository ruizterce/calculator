let firstNumber;
let secondNumber;
let operator;

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
        return alert('Dont divide by 0 or the world will colapse!');
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
let displayContent = "";

function addToDisplay(a) {
    displayContent += a;
    display.textContent = displayContent;
};

const numbers = document.querySelector('#numbers');
numbers.addEventListener('click', (e) => {
    if (e.target.className === 'number') {
        addToDisplay(e.target.textContent);
    };

});


console.log(operate(1, "+", 2))
console.log(operate(1, "-", 2))
console.log(operate(1, "*", 2))
console.log(operate(1, "/", 2))