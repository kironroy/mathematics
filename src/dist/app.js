"use strict";
// Select elements
const numInput = document.getElementById("num");
const factorialBtn = document.getElementById("factorialBtn");
const powerBtn = document.getElementById("powerBtn");
const result = document.getElementById("result");
// Function to calculate factorial
const factorial = (n) => {
    if (n < 0)
        return NaN; // Factorial is undefined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);
};
// Function to calculate power (squared)
const square = (n) => Math.pow(n, 2);
// Event listeners
factorialBtn.addEventListener("click", () => {
    const num = parseFloat(numInput.value);
    result.textContent =
        isNaN(num) || num < 0
            ? "Enter a valid non-negative number."
            : `Factorial of ${num}: ${factorial(num)}`;
});
powerBtn.addEventListener("click", () => {
    const num = parseFloat(numInput.value);
    result.textContent = isNaN(num)
        ? "Enter a valid number."
        : `${num} squared: ${square(num)}`;
});
