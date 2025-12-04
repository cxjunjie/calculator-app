const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if(b === 0) return "Error";
    return a / b;
};

// console.log(add(1, 2));
// console.log(subtract(14, -10));
// console.log(multiply(3, 2));
// console.log(divide(6, 2));

let firstNum = null;
let operator = null;
let secondNum = null;

const operate = (firstNum, operator, secondNum) => {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);

        case "-":
            return subtract(firstNum, secondNum);
        
        case "*":
            return multiply(firstNum, secondNum);
            
        case "/":
            return divide(firstNum, secondNum);
        
        default:
            return "Invalid operator";
    }
};

// console.log(operate(1, "+", 2));
// console.log(operate(10, "/", 2));
// console.log(operate(2, "5", 2));

// ----- UPDATING DISPLAY LOGIC -----
let displayValue = "0";

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".btn-number");

const updateDisplay = () => {
    display.textContent = displayValue;
}

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const digit = button.textContent;
        handleNumberClick(digit);
    });
});

const handleNumberClick = (digit) => {
    // if current value is "0" and i click another number which is not a dot
    // replace the "0" instead of adding to it
    if (displayValue === "0" && digit !== ".") {
        displayValue = digit;
    } else {
        // prevent typing multiple dots
        if (digit === "." && displayValue.includes(".")) {
            return;
        }
        displayValue += digit;
    }
    updateDisplay();
}

// ----- CLEAR BUTTON LOGIC -----
const clearButton = document.querySelector(".clear-btn");

clearButton.addEventListener("click", () => {
    displayValue = "0";
    updateDisplay();
});