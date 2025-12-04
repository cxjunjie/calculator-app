const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if(b === 0) return "Error";
    return a / b;
};

console.log(add(1, 2));
console.log(subtract(14, -10));
console.log(multiply(3, 2));
console.log(divide(6, 2));