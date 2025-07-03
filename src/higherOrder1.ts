// Define a generic mapping function: number => number
function mapAndSum(
  fn: (value: number) => number
): (numbers: number[]) => number {
  return function (numbers: number[]): number {
    return numbers.map(fn).reduce((total, val) => total + val, 0);
  };
}

// Example usage:

// Square each number, then sum
const sumOfSquares = mapAndSum((x) => x * x);
console.log(sumOfSquares([3, 2])); // Output: 13

// Double each number, then sum
const sumOfDoubles = mapAndSum((x) => x * 2);
console.log(sumOfDoubles([3, 1])); // Output: 8
