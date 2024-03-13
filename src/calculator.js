// Addition
function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    return num1 + num2;
}

// Subtraction
function subtract(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    return num1 - num2;
}

// Multiplication
function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    return num1 * num2;
}

// Division
function divide(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    // Check if divisor is not zero to avoid division by zero error
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

module.exports = { add, subtract, multiply, divide };
