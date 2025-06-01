"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Price and sales data
var pricesForEachTypeRoseMatrix = math.matrix([[3, 4, 2]]);
var totalSalesForMTWMatrix = math.matrix([
    [120, 90, 60],
    [80, 70, 40],
    [60, 40, 20],
]);
function matrixMultiplierRoseStore(mrx1, mrx2) {
    var matrix1 = math.matrix(mrx1.toArray());
    var matrix2 = math.matrix(mrx2.toArray());
    var totalSalesMatrixArr = math.multiply(matrix1, matrix2);
    // Result [ [800, 630, 380] ]
    var totalSalesMatrixFlatArr = totalSalesMatrixArr.toArray().flat();
    var totalSalesToHTML = totalSalesMatrixFlatArr.reduce(function (a, b) { return a + b; }, 0);
    // DOM manipulation with type checking
    var updateElement = function (id, content) {
        var element = document.getElementById(id);
        if (element) {
            element.innerHTML = content;
        }
    };
    updateElement('roses', "Total sales as a 2-dimensional array: ".concat(totalSalesMatrixArr));
    updateElement('roses-flat', "Are Total sales a flattened array: ".concat(Array.isArray(totalSalesMatrixFlatArr)));
    updateElement('mon-sales', "Monday Sales: $ ".concat(totalSalesMatrixFlatArr[0]));
    updateElement('tue-sales', "Tuesday Sales: $ ".concat(totalSalesMatrixFlatArr[1]));
    updateElement('wed-sales', "Wednesday Sales: $ ".concat(totalSalesMatrixFlatArr[2]));
    updateElement('total-sales', "Total rose Sales: $ ".concat(totalSalesToHTML));
}
// Execute the function
matrixMultiplierRoseStore(pricesForEachTypeRoseMatrix, totalSalesForMTWMatrix);
