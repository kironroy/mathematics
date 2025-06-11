// Polynomials Calculation in TypeScript

// Supermarket prices
const flr: number = 4.49;
const eggs: number = 3.59;
const milk: number = 1.79;

function totalAmt(qty1: number, qty2: number, qty3: number): number {
  return qty1 * flr + qty2 * eggs + qty3 * milk;
}

const totalGroceryResult: number = totalAmt(3, 2, 3);
document.getElementById(
  "moe"
)!.innerHTML = `<b>Moe has spent $${totalGroceryResult} on groceries.</b>`;

// Taxi calculation
const rate: number = 0.5;
const taxiDlrate: number = 1.5;
const goal: number = 100;

function taxiResultFunc(): string {
  const polyFirstPrt: number = goal / rate;
  const polySecondPrt: number = polyFirstPrt / taxiDlrate;
  return polySecondPrt.toFixed(2);
}

const taxiResult: string = taxiResultFunc();
document.getElementById(
  "taxi"
)!.innerHTML = `Taxi driver has to drive ${taxiResult} miles to make ${goal} dollars.`;
