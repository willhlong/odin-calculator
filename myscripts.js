let calculatedValue = 0;
let userInput = "";
let expression = [];
let numberButtons = document.querySelectorAll(".num-button");
let opButtons = document.querySelectorAll(".op-button");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        userInput += button.textContent;
        displayValue(userInput);
    })
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        let op = button.textContent;
        if (button.textContent === '=') {
            if (expression.length == 2) {
                expression.push(userInput);
                operate(expression[1], expression[0], expression[2]);
            }
            else {
                displayValue("error");
            }
        }
        else {
            expression.push(userInput);
            expression.push(op);
            displayExpression(expression);
            displayValue(0);
        }
    })
})

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function sub(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(op, num1, num2) {
    if (op === '+') {
        calculatedValue = add(num1, num2);
    }
    if (op === '-') {
        calculatedValue = sub(num1, num2);
    }
    if (op === '*') {
        calculatedValue = multiply(num1, num2);
    }
    if (op === '/') {
        calculatedValue = divide(num1, num2);
    }
    expression.push("=");
    displayValue(calculatedValue);
    displayExpression(expression);
    userInput = calculatedValue;
    expression = [];
}

function displayValue(displayValue) {
    resetValueDisplay();
    document.querySelector(".display-value").textContent = displayValue;
}

function displayExpression(expression) {
    resetExpressionDisplay();
    for (let i = 0; i < expression.length; i++) {
        document.querySelector(".display-expression").textContent += expression[i];
    }
    userInput = "";
}

function resetValueDisplay() {
    document.querySelector(".display-value").textContent = "";
}

function resetExpressionDisplay() {
    document.querySelector(".display-expression").textContent = "";
}