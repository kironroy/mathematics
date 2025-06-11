declare const math2: any; // Ensures Math.js works from CDN

// Sale prices for each type of pie (Apple, Cherry, Blueberry)
const piePrices: number[] = [3, 4, 2];

// Daily sales matrix (Monday - Thursday)
const dailySalesMatrix: number[][] = [
  [13, 8, 6], // Monday
  [9, 7, 4], // Tuesday
  [7, 4, 0], // Wednesday
  [15, 6, 3], // Thursday
];

// Function to calculate total pie sales
const matrixMultiplier = (arr1: number[], arr2: number[]): number =>
  arr1.reduce((r, a, i) => r + a * (arr2[i] ?? 0), 0); // Handles uneven matrix indexes

// Compute total sales per day
const dailySales: number[] = dailySalesMatrix.map((sales) =>
  matrixMultiplier(piePrices, sales)
);
const totalSalesSum: number = dailySales.reduce((a, b) => a + b, 0);

// Render results in HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(
    "mon-pie-sales"
  )!.textContent = `Monday Sales: $${dailySales[0]}`;
  document.getElementById(
    "tue-pie-sales"
  )!.textContent = `Tuesday Sales: $${dailySales[1]}`;
  document.getElementById(
    "wed-pie-sales"
  )!.textContent = `Wednesday Sales: $${dailySales[2]}`;
  document.getElementById(
    "thu-pie-sales"
  )!.textContent = `Thursday Sales: $${dailySales[3]}`;
  document.getElementById(
    "total-pie-sales"
  )!.textContent = `Total Pie Sales: $${totalSalesSum}`;
});
