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
console.log(operate(2, "5", 2));