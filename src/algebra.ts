// Algebra Calculations in TypeScript

const joeTotalMoney: number = 21;

const book: number = 14;
const sandwich: number = 12;
const cake: number = 6;

const threeItemsArr: number[] = [book, sandwich, cake];
const threeItemsArrMap: number[] = threeItemsArr.map((x: number) => x / 2);
const threeItemsArrMapSum: number = threeItemsArrMap.reduce(
  (a: number, c: number) => a + c,
  0
);

function joeMoneyLeftFunc(a: number, b: number): number {
  return a - b;
}

const joeMoneyLeft: number = joeMoneyLeftFunc(
  joeTotalMoney,
  threeItemsArrMapSum
);
document.getElementById("joe")!.innerHTML = `Joe has $${joeMoneyLeft} left.`;

// Age Calculation
const eldestSister: number = 6;

function divideElderByYoungerHalfFunc(elderAge: number): number {
  return elderAge / 2;
}

const sistersAgeRatio: number = divideElderByYoungerHalfFunc(eldestSister);

function youngerSistersAge(elderAge: number, init: number): number {
  return elderAge - init;
}

const elderSisAge: number = 70;
const youngerSisAge: number = youngerSistersAge(elderSisAge, sistersAgeRatio);

document.getElementById(
  "sisters"
)!.innerHTML = `The younger sister is: ${youngerSisAge} when the elder sister is ${elderSisAge} years old.`;
