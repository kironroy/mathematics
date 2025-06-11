"use strict";
// Define Prices (Red, White, Yellow)
const pricesForEachTypeRoseMatrix = math.matrix([[3, 4, 2]]);
// Define Sales for Monday, Tuesday, Wednesday
const totalSalesForMTWMatrix = math.matrix([
    [120, 90, 60],
    [80, 70, 40],
    [60, 40, 20],
]);
// Function to calculate total rose sales
function matrixMultiplierRoseStore(mrx1, mrx2) {
    const totalSalesMatrixArr = math.multiply(mrx1, mrx2);
    return totalSalesMatrixArr.toArray().flat();
}
// Get computed sales
const totalSales = matrixMultiplierRoseStore(pricesForEachTypeRoseMatrix, totalSalesForMTWMatrix);
// Render results in the HTML
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("roses").textContent = `Total sales as a 2D array: ${JSON.stringify(totalSales)}`;
    document.getElementById("mon-sales").textContent = `Monday Sales: $${totalSales[0]}`;
    document.getElementById("tue-sales").textContent = `Tuesday Sales: $${totalSales[1]}`;
    document.getElementById("wed-sales").textContent = `Wednesday Sales: $${totalSales[2]}`;
    document.getElementById("total-sales").textContent = `Total Rose Sales: $${totalSales.reduce((a, b) => a + b, 0)}`;
});
