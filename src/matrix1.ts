declare const math1: any; // Allows TypeScript to recognize Math.js from CDN

// Define Prices (Beef, Chicken, Asada, Carnitas, Beans, Potato)
const pricesForEachTypeTacoMatrix = math.matrix([[2, 2, 4, 3, 1, 2]]);

// Define Sales for Monday-Saturday
const totalWeeklyTacoSalesMatrix = math.matrix([
  [20, 30, 10, 40, 50, 60],
  [22, 32, 12, 44, 40, 10],
  [40, 40, 50, 60, 80, 50],
  [60, 40, 50, 60, 80, 50],
  [10, 12, 14, 10, 12, 14],
  [10, 10, 10, 10, 10, 10],
]);

// Function to calculate total taco sales
function matrixMultiplierTacosStore(mrx1: any, mrx2: any): number[] {
  const totalSalesMatrixArr = math.multiply(mrx1, mrx2);
  return totalSalesMatrixArr.toArray().flat();
}

// Compute total sales
const totalSales1 = matrixMultiplierTacosStore(
  pricesForEachTypeTacoMatrix,
  totalWeeklyTacoSalesMatrix
);

// Render results in HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(
    "tacos"
  )!.textContent = `Total sales as a 2D array: ${JSON.stringify(totalSales1)}`;
  document.getElementById(
    "mon-taco-sales"
  )!.textContent = `Monday Sales: $${totalSales1[0]}`;
  document.getElementById(
    "tue-taco-sales"
  )!.textContent = `Tuesday Sales: $${totalSales1[1]}`;
  document.getElementById(
    "wed-taco-sales"
  )!.textContent = `Wednesday Sales: $${totalSales1[2]}`;
  document.getElementById(
    "thu-taco-sales"
  )!.textContent = `Thursday Sales: $${totalSales1[3]}`;
  document.getElementById(
    "fri-taco-sales"
  )!.textContent = `Friday Sales: $${totalSales1[4]}`;
  document.getElementById(
    "sat-taco-sales"
  )!.textContent = `Saturday Sales: $${totalSales1[5]}`;
  document.getElementById(
    "total-taco-sales"
  )!.textContent = `Total Taco Sales: $${totalSales1.reduce(
    (a, b) => a + b,
    0
  )}`;
});
