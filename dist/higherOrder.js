function mapAndSum(fn) {
  return function (numbers) {
    return numbers.map(fn).reduce(function (total, val) {
      return total + val;
    }, 0);
  };
}

// Example 1: Sum of Squares
const sumOfSquares = mapAndSum(function (x) {
  return x * x;
});
const result1 = sumOfSquares([3, 2]); // 3² + 2² = 9 + 4 = 13

// Example 2: Sum of Doubles
const sumOfDoubles = mapAndSum(function (x) {
  return x * 2;
});
const result2 = sumOfDoubles([3, 1]); // 3×2 + 1×2 = 6 + 2 = 8

// Inject results into HTML
document.addEventListener("DOMContentLoaded", function () {
  const out = document.getElementById("output");
  const examples = [
    {
      label: "Sum of Squares [3, 2]",
      explanation: "3² + 2² = 9 + 4",
      result: result1,
    },
    {
      label: "Sum of Doubles [3, 1]",
      explanation: "3×2 + 1×2 = 6 + 2",
      result: result2,
    },
  ];

  examples.forEach(({ label, explanation, result }) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${label}</strong> → ${explanation} = <code>${result}</code>`;
    out.appendChild(li);
  });
});
