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

let firstNum = null;
let currentOperator = null;
let WaitingForSecondNum = false;

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
    // if we just pressed an operator, start a new number
    if (WaitingForSecondNum) {
        displayValue = (digit === ".") ? "0." : digit;
        WaitingForSecondNum = false;
        updateDisplay();
        return;
    }

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
    firstNum = null;
    currentOperator = null;
    WaitingForSecondNum = false;
    updateDisplay();
});

// ----- OPERATOR LOGIC -----
const operatorBtn = document.querySelectorAll(".btn-operator");

// update display according to operator button click
operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const opText = button.textContent;
        handleOperatorClick(opText);
    });
});

const handleOperatorClick = (opText) => {
    let opSymbol;
    if (opText === "X") {
        opSymbol = "*";
    } else {
        opSymbol = opText;
    }

    const inputValue = Number(displayValue);

    // if we dont have a firstNum yet, set it
    if (firstNum === null) {
        firstNum = inputValue;
    } else if (!WaitingForSecondNum) {
        // we already have firstNum and operator
        // so compute result
        const result = operate(firstNum, currentOperator, inputValue);
        displayValue = result.toString();
        updateDisplay();
        firstNum = (typeof result === "number") ? result : null;
    }

    // set the current operator and prepare for the next number
    currentOperator = opSymbol;
    WaitingForSecondNum = true;
}

// ----- OPERATE LOGIC -----
const equalsBtn = document.querySelector(".btn-equals");

// upon pressing the equals button
equalsBtn.addEventListener("click", () => {
    if (currentOperator === null || firstNum === null || WaitingForSecondNum) {
        return;
    }

    const secondNum = Number(displayValue);
    const result = operate(firstNum, currentOperator, secondNum);

    displayValue = result.toString();
    updateDisplay();

    // prepare for next operation
    firstNum = (typeof result === "number") ? result : null;
    currentOperator = null;
    WaitingForSecondNum = true;
});