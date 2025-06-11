"use strict";
// - Percentages
// % change calculation in TypeScript
function percentChange(newAmt, oldAmt) {
    const result = ((newAmt - oldAmt) / oldAmt) * 100;
    const trend = result < 0 ? "decrease ⬇" : "increase ⬆";
    const numChange = newAmt - oldAmt;
    const orgAmtPerct = Math.abs((numChange / newAmt) * 100);
    return `
      <p>The percent change from ${oldAmt} to ${newAmt} is: ${result.toFixed(2)}% ${trend}.</p>
      <p>The numeric change is: ${numChange}.</p>
      <p>To get back to the original amount: ${orgAmtPerct.toFixed(2)}%</p>
    `;
}
function updateElement(id, content) {
    const element = document.getElementById(id);
    if (element)
        element.innerHTML = content;
}
// Render calculations to HTML
updateElement("shirt", `A shirt cost $10 last year. Now it's $12. What is the % change?`);
updateElement("shirt-ans", percentChange(12, 10));
updateElement("candy", `A bag of candy had 35 candies. Now it has 27. What is the % change?`);
updateElement("candy-ans", percentChange(27, 35));
updateElement("customers", `There were 150 customers yesterday. Today there are 200 customers. What is the % change?`);
updateElement("customers-ans", percentChange(200, 150));
updateElement("earned", `We earned $120 yesterday, but only $90 today. What is the % change?`);
updateElement("earned-ans", percentChange(90, 120));
updateElement("jeans", `The price of jeans dropped from $70 to $62.`);
updateElement("jeans-ans", percentChange(62, 70));
