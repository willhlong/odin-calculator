let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("You clicked a button...");
    })
});

let calculatedValue = 0;

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    if (op === 'ADD') {
        calculatedValue = add(num1, num2);
    }
    if (op === 'SUB') {
        calculatedValue = sub(num1, num2);
    }
    if (op === 'MULT') {
        calculatedValue = multiply(num1, num2);
    }
    if (op === 'DIV') {
        calculatedValue = divide(num1, num2);
    }
    document.querySelector(".display").textContent = calculatedValue;
}