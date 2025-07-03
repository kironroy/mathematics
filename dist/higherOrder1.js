// Define a generic mapping function: number => number
function mapAndSum(fn) {
    return function (numbers) {
        return numbers.map(fn).reduce(function (total, val) { return total + val; }, 0);
    };
}
// Example usage:
// Square each number, then sum
var sumOfSquares = mapAndSum(function (x) { return x * x; });
console.log(sumOfSquares([3, 2])); // Output: 13 // (3^2 + 2^2 = 9 + 4 = 13)
// Double each number, then sum
var sumOfDoubles = mapAndSum(function (x) { return x * 2; });
console.log(sumOfDoubles([3, 1])); // Output: 8   (3 * 2 + 1 * 2 = 6 + 2 = 8)
