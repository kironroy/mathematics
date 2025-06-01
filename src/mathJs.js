'use strict';

console.log(
  '%c Welcome to math.js! ',
  'color: #fff; font-weight: bold; font-family: Arial; background-color: blue; font-size: 24px'
);

console.log(`
███╗   ███╗ █████╗ ████████╗██╗  ██╗    ██╗███████╗    ███████╗██╗   ██╗███╗   ██╗
████╗ ████║██╔══██╗╚══██╔══╝██║  ██║    ██║██╔════╝    ██╔════╝██║   ██║████╗  ██║
██╔████╔██║███████║   ██║   ███████║    ██║███████╗    █████╗  ██║   ██║██╔██╗ ██║
██║╚██╔╝██║██╔══██║   ██║   ██╔══██║    ██║╚════██║    ██╔══╝  ██║   ██║██║╚██╗██║
██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║    ██║███████║    ██║     ╚██████╔╝██║ ╚████║
╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝╚══════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝
                                                                                  
`);

// Roses Store

// Monday sales for EACH type of rose: 120, 80, 60
// Tuesday sales for EACH type of rose: 90, 70, 40
// Wednesday sales for EACH type of rose: 60, 40, 20

// Red rose: $3
// White rose: $4
// Yellow rose: $2

const pricesForEachTypeRoseMatrix = math.matrix([[3, 4, 2]]);
const totalSalesForMTWMatrix = math.matrix([
  [120, 90, 60],
  [80, 70, 40],
  [60, 40, 20],
]);

function matrixMultiplierRoseStore(mrx1, mrx2) {
  const matrix1 = math.matrix(mrx1);
  const matrix2 = math.matrix(mrx2);

  const totalSalesMatrixArr = math.multiply(matrix1, matrix2);
  // Result [ [800, 630, 380] ]

  const totalSalesMatrixFlatArr = totalSalesMatrixArr.toArray().flat();

  const totalSalesToHTML = totalSalesMatrixFlatArr.reduce((a, b) => a + b, 0);

  document.getElementById(
    'roses'
  ).innerHTML = `Total sales as a 2-dimensional array: ${totalSalesMatrixArr}`;

  document.getElementById(
    'roses-flat'
  ).innerHTML = `Are Total sales a flattened array: ${Array.isArray(
    totalSalesMatrixFlatArr
  )}`;
  document.getElementById(
    'mon-sales'
  ).innerHTML = `Monday Sales: $ ${totalSalesMatrixFlatArr[0]}`;
  document.getElementById(
    'tue-sales'
  ).innerHTML = `Tuesday Sales: $ ${totalSalesMatrixFlatArr[1]}`;
  document.getElementById(
    'wed-sales'
  ).innerHTML = `Wednesday Sales: $ ${totalSalesMatrixFlatArr[2]}`;
  document.getElementById(
    'total-sales'
  ).innerHTML = `Total rose Sales: $ ${totalSalesToHTML}`;
}

matrixMultiplierRoseStore(pricesForEachTypeRoseMatrix, totalSalesForMTWMatrix);

// Tacos Store

// 6 taco choices (1 row: 6 elements): beef = 2, chicken = 2, asada = 4, carnitas = 3, beans = 1, potato = 2
// 6 days of the week (6 rows): Mon, Tues, Wed, Thu, Fri, Sat

const pricesForEachTypeTacoMatrix = math.matrix([[2, 2, 4, 3, 1, 2]]);
const totalWeeklyTacoSalesMatrix = math.matrix([
  [20, 30, 10, 40, 50, 60],
  [22, 32, 12, 44, 40, 10],
  [40, 40, 50, 60, 80, 50],
  [60, 40, 50, 60, 80, 50],
  [10, 12, 14, 10, 12, 14],
  [10, 10, 10, 10, 10, 10],
]);

function matrixMultiplierTacosStore(mrx1, mrx2) {
  const matrix1 = math.matrix(mrx1);
  const matrix2 = math.matrix(mrx2);

  const totalSalesMatrixArr = math.multiply(matrix1, matrix2);
  // Result [[454, 436, 428, 618, 772, 524]]

  const totalTacosSalesMatrixFlatArr = totalSalesMatrixArr.toArray().flat();

  const totalSalesToHTML = totalTacosSalesMatrixFlatArr.reduce(
    (a, b) => a + b,
    0
  );

  const totalTacoSalesMatrix = math.multiply(
    pricesForEachTypeTacoMatrix,
    totalWeeklyTacoSalesMatrix
  );

  document.getElementById(
    'tacos'
  ).innerHTML = `Total taco sales as a 2-dimensional array: ${totalTacoSalesMatrix}`;

  document.getElementById(
    'mon-taco-sales'
  ).innerHTML = `Monday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[0]}`;
  document.getElementById(
    'tue-taco-sales'
  ).innerHTML = `Tuesday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[1]}`;
  document.getElementById(
    'wed-taco-sales'
  ).innerHTML = `Wednesday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[2]}`;
  document.getElementById(
    'thu-taco-sales'
  ).innerHTML = `Thursday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[3]}`;
  document.getElementById(
    'fri-taco-sales'
  ).innerHTML = `Friday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[4]}`;
  document.getElementById(
    'sat-taco-sales'
  ).innerHTML = `Saturday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[5]}`;
  document.getElementById(
    'total-taco-sales'
  ).innerHTML = `Total Sales: $ ${totalSalesToHTML}`;

  document.getElementById(
    'tacos-flat'
  ).innerHTML = `Are Total taco sales a flattened array: ${Array.isArray(
    totalTacosSalesMatrixFlatArr
  )}`;
}

matrixMultiplierTacosStore(
  pricesForEachTypeTacoMatrix,
  totalWeeklyTacoSalesMatrix
);

// sale price for each type of pie : [apple, cherry, blueberry]
const piePrices = [3, 4, 2];

// daily sales
const mondaySalesArr = [13, 8, 6];
const tuesSalesArr = [9, 7, 4];
const wedSalesArr = [7, 4, 0];
const thuSalesArr = [15, 6, 3];

const matrixMultiplier = (arr1, arr2) =>
  arr1.reduce((r, a, i) => r + a * arr2[i], 0);

const mondaySales = matrixMultiplier(piePrices, mondaySalesArr);
const tuesSales = matrixMultiplier(piePrices, tuesSalesArr);
const wedSales = matrixMultiplier(piePrices, wedSalesArr);
const thuSales = matrixMultiplier(piePrices, thuSalesArr);

const dailySalesArr = [];
dailySalesArr.push(mondaySales, tuesSales, wedSales, thuSales);

const dailySalesFunc = dailySalesArr.reduce((a, b) => a + b, 0);

function piesRenderToHTML() {
  document.getElementById(
    'mon-pie-sales'
  ).innerHTML = `Monday Sales: $ ${mondaySales}`;
  document.getElementById(
    'tue-pie-sales'
  ).innerHTML = `Tuesday Sales: $ ${tuesSales}`;
  document.getElementById(
    'wed-pie-sales'
  ).innerHTML = `Wednesday Sales: $ ${wedSales}`;
  document.getElementById(
    'thu-pie-sales'
  ).innerHTML = `Thursday Sales: $ ${thuSales}`;
  document.getElementById(
    'total-pie-sales'
  ).innerHTML = `Total Sales: $ ${dailySalesFunc}`;
}

piesRenderToHTML();

// - Perctanges

// % stuff

function shirt() {
  document.getElementById(
    'shirt'
  ).innerHTML = `A shirt cost $10 last year. Now it's $12.
What is the % change?`;

  const shirt = percentChange(12, 10);

  document.getElementById('shirt-ans').innerHTML = shirt;
}

shirt();

function candy() {
  document.getElementById(
    'candy'
  ).innerHTML = `A bag of candy had 35 candies. Now it has 27.
What is the % change?`;

  const candy = percentChange(27, 35);

  document.getElementById('candy-ans').innerHTML = candy;
}

candy();

function customers() {
  document.getElementById(
    'customers'
  ).innerHTML = `There were 150 customers yesterday. Today there are 200 customers.
What is the % change?`;

  const customers = percentChange(200, 150);

  document.getElementById('customers-ans').innerHTML = customers;
}

customers();

document.getElementById('earned').innerHTML = document.getElementById(
  'earned'
).innerHTML = `We earned $120 yesterday, but only $90 today.  What is the % change`;

const earned = percentChange(90, 120);

document.getElementById('earned-ans').innerHTML = earned;

document.getElementById('jeans').innerHTML = document.getElementById(
  'jeans'
).innerHTML = `The price of jeans dropped from $70 to $62.`;

const jeans = percentChange(62, 70);

document.getElementById('jeans-ans').innerHTML = jeans;

function percentChange(newAmt, oldAmt) {
  const result = ((newAmt - oldAmt) / oldAmt) * 100;
  const trend = result < 0 ? 'decrease ⬇' : 'increase ⬆';
  const numChange = newAmt - oldAmt;
  const orgAmtPerct = Math.abs((numChange / newAmt) * 100);
  return `<p>The percent change from ${oldAmt} to the ${newAmt} is: ${result.toFixed(
    2
  )}% ${trend}.</p>
  <p> The numeric change is: ${numChange}.</p> <p>To get back to original amount: ${orgAmtPerct.toFixed(
    2
  )}%</p>`;
}

// algebra

const joeTotalMoney = 21;

const book = 14;
const sandwich = 12;
const cake = 6;

const threeItemsArr = [];
threeItemsArr.push(book, sandwich, cake);

const threeItemsArrMap = threeItemsArr.map(x => x / 2);

const threeItemsArrMapSum = threeItemsArrMap.reduce((a, c) => a + c, 0);

const joeMoneyLeftFunc = (a, b) => a - b;

const joeMoneyLeft = joeMoneyLeftFunc(joeTotalMoney, threeItemsArrMapSum);

document.getElementById('joe').innerHTML = `Joe has $${joeMoneyLeft} left.`;

// age problem
// When I was 6 my sister was half my age.
// So, the age of the sister at that time = 6/2 = 3
// This implies that the sister is 3 years younger.
// Now, when I’m 70, age of sister = 70 - 3
// Age of sister = 67.
// Therefore, the age of my sister is 67 years.

const eldestSister = 6;

function divideElderByYoungerHalfFunc(elderAge) {
  return elderAge / 2;
}

const sistersAgeRatio = divideElderByYoungerHalfFunc(eldestSister);

function youngerSistersAge(elderAge, init) {
  return elderAge - init;
}

const elderSisAge = 70;
const youngerSisAge = youngerSistersAge(elderSisAge, sistersAgeRatio);


document.getElementById(
  'sisters'
).innerHTML = `The younger sister is: ${youngerSisAge} when the elder sister is ${elderSisAge} year's old.`;

// polynomials

// super market

// 3 lbs flour
// 2 dozen eggs
// 3 quarts milk

// prices
const flr = 4.49;
const eggs = 3.59;
const milk = 1.79;

function totalAmt(qty1, qty2, qty3) {
  return qty1 * flr + qty2 * eggs + qty3 * milk;
}

const totalGroceryResult = totalAmt(3, 2, 3);

document.getElementById(
  'moe'
).innerHTML = `<b>Moe has spent $${totalGroceryResult} on groceries.</p>`;
// $26.02

// taxi

// how many miles to earn $100
// meter charges 1.50 customer rate 1.50 mile
// drives gets half of that

const rate = 0.5;
const taxiDlrate = 1.5;
const miles = 0;
const goal = 100;

// 1/2($1.50)x = $100

function taxiResultFunc() {
  const polyFirstPrt = goal / rate;
  const polySecondPrt = polyFirstPrt / taxiDlrate;
  return polySecondPrt.toFixed(2);
}

const taxiResult = taxiResultFunc();

document.getElementById(
  'taxi'
).innerHTML = `Taxi driver has to drive ${taxiResult} miles to make ${goal} dollars.`;
// $26.02

// has to drive 133.33 miles to get $100
// id driver got a higher rate: taxiDlrate = $2.00
// then he would drive less miles, 100 miles


