// Select elements
var numInput = document.getElementById("num");
var factorialBtn = document.getElementById("factorialBtn");
var powerBtn = document.getElementById("powerBtn");
var result = document.getElementById("result");
// Function to calculate factorial
var factorial = function (n) {
    if (n < 0)
        return NaN; // Factorial is undefined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);
};
// Function to calculate power (squared)
var square = function (n) { return Math.pow(n, 2); };
// Event listeners
factorialBtn.addEventListener("click", function () {
    var num = parseFloat(numInput.value);
    result.textContent =
        isNaN(num) || num < 0
            ? "Enter a valid non-negative number."
            : "Factorial of ".concat(num, ": ").concat(factorial(num));
});
powerBtn.addEventListener("click", function () {
    var num = parseFloat(numInput.value);
    result.textContent = isNaN(num)
        ? "Enter a valid number."
        : "".concat(num, " squared: ").concat(square(num));
});
