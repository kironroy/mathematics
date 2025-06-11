// Polynomials Calculation in TypeScript
// Supermarket prices
var flr = 4.49;
var eggs = 3.59;
var milk = 1.79;
function totalAmt(qty1, qty2, qty3) {
    return qty1 * flr + qty2 * eggs + qty3 * milk;
}
var totalGroceryResult = totalAmt(3, 2, 3);
document.getElementById("moe").innerHTML = "<b> ✅ Moe has spent $".concat(totalGroceryResult, " on groceries.</b>");
// Taxi calculation
var rate = 0.5;
var taxiDlrate = 1.5;
var goal = 100;
function taxiResultFunc() {
    var polyFirstPrt = goal / rate;
    var polySecondPrt = polyFirstPrt / taxiDlrate;
    return polySecondPrt.toFixed(2);
}
var taxiResult = taxiResultFunc();
document.getElementById("taxi").innerHTML = "✅ Taxi driver has to drive ".concat(taxiResult, " miles to make ").concat(goal, " dollars.");
