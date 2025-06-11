// Algebra Calculations in TypeScript
var joeTotalMoney = 21;
var book = 14;
var sandwich = 12;
var cake = 6;
var threeItemsArr = [book, sandwich, cake];
var threeItemsArrMap = threeItemsArr.map(function (x) { return x / 2; });
var threeItemsArrMapSum = threeItemsArrMap.reduce(function (a, c) { return a + c; }, 0);
function joeMoneyLeftFunc(a, b) {
    return a - b;
}
var joeMoneyLeft = joeMoneyLeftFunc(joeTotalMoney, threeItemsArrMapSum);
document.getElementById("joe").innerHTML = " ✅ Joe has $".concat(
  joeMoneyLeft,
  " left."
);
// Age Calculation
var eldestSister = 6;
function divideElderByYoungerHalfFunc(elderAge) {
    return elderAge / 2;
}
var sistersAgeRatio = divideElderByYoungerHalfFunc(eldestSister);
function youngerSistersAge(elderAge, init) {
    return elderAge - init;
}
var elderSisAge = 70;
var youngerSisAge = youngerSistersAge(elderSisAge, sistersAgeRatio);
document.getElementById("sisters").innerHTML = " ✅ The younger sister is: "
  .concat(youngerSisAge, " when the elder sister is ")
  .concat(elderSisAge, " years old.");
