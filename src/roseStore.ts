import { create, all } from "mathjs";

declare const math: {
  matrix: (data: number[][]) => Matrix;
  multiply: (a: Matrix, b: Matrix) => Matrix;
};

// Roses Store Types
interface RoseMatrix {
  toArray: () => number[][];
}

// Price and sales data
const pricesForEachTypeRoseMatrix: Matrix = math.matrix([[3, 4, 2]]);
const totalSalesForMTWMatrix: Matrix = math.matrix([
  [120, 90, 60],
  [80, 70, 40],
  [60, 40, 20],
]);

function matrixMultiplierRoseStore(mrx1: Matrix, mrx2: Matrix): void {
  const matrix1: Matrix = math.matrix(mrx1.toArray());
  const matrix2: Matrix = math.matrix(mrx2.toArray());

  const totalSalesMatrixArr: Matrix = math.multiply(matrix1, matrix2);
  // Result [ [800, 630, 380] ]

  const totalSalesMatrixFlatArr: number[] = totalSalesMatrixArr
    .toArray()
    .flat();
  const totalSalesToHTML: number = totalSalesMatrixFlatArr.reduce(
    (a, b) => a + b,
    0
  );

  // DOM manipulation with type checking
  const updateElement = (id: string, content: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = content;
    }
  };

  updateElement(
    "roses",
    `Total sales as a 2-dimensional array: ${totalSalesMatrixArr}`
  );

  updateElement(
    "roses-flat",
    `Are Total sales a flattened array: ${Array.isArray(
      totalSalesMatrixFlatArr
    )}`
  );

  updateElement("mon-sales", `Monday Sales: $ ${totalSalesMatrixFlatArr[0]}`);

  updateElement("tue-sales", `Tuesday Sales: $ ${totalSalesMatrixFlatArr[1]}`);

  updateElement(
    "wed-sales",
    `Wednesday Sales: $ ${totalSalesMatrixFlatArr[2]}`
  );

  updateElement("total-sales", `Total rose Sales: $ ${totalSalesToHTML}`);
}

// Execute the function
matrixMultiplierRoseStore(pricesForEachTypeRoseMatrix, totalSalesForMTWMatrix);
