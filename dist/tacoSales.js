"use strict";
class TacoSalesCalculator {
    constructor() {
        this.data = {
            prices: {
                beef: 2,
                chicken: 2,
                steak: 4,
                pork: 3,
                beans: 1,
                potato: 2,
            },
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        };
        this.salesData = {
            Monday: {
                beef: 20,
                chicken: 22,
                steak: 40,
                pork: 60,
                beans: 10,
                potato: 10,
            },
            Tuesday: {
                beef: 30,
                chicken: 32,
                steak: 40,
                pork: 40,
                beans: 12,
                potato: 10,
            },
            Wednesday: {
                beef: 10,
                chicken: 12,
                steak: 50,
                pork: 50,
                beans: 14,
                potato: 10,
            },
            Thursday: {
                beef: 40,
                chicken: 44,
                steak: 60,
                pork: 60,
                beans: 10,
                potato: 10,
            },
            Friday: {
                beef: 50,
                chicken: 40,
                steak: 80,
                pork: 80,
                beans: 12,
                potato: 10,
            },
            Saturday: {
                beef: 60,
                chicken: 10,
                steak: 50,
                pork: 50,
                beans: 14,
                potato: 10,
            },
        };
    }
    calculateDailySales(day) {
        const sales = this.salesData[day];
        return (sales.beef * this.data.prices.beef +
            sales.chicken * this.data.prices.chicken +
            sales.steak * this.data.prices.steak +
            sales.pork * this.data.prices.pork +
            sales.beans * this.data.prices.beans +
            sales.potato * this.data.prices.potato);
    }
    calculateTotalSales() {
        return this.data.days.reduce((total, day) => total + this.calculateDailySales(day), 0);
    }
    displaySalesReport() {
        const dailySalesDiv = document.getElementById("dailySales");
        const totalSalesDiv = document.getElementById("totalSales");
        const salesArrayDiv = document.getElementById("salesArray");
        if (dailySalesDiv && totalSalesDiv && salesArrayDiv) {
            // Display daily sales
            this.data.days.forEach((day) => {
                const dailySale = this.calculateDailySales(day);
                const dailySaleElement = document.createElement("div");
                dailySaleElement.className = "daily-sales";
                dailySaleElement.innerHTML = `${day} Taco Sales: $ ${dailySale}`;
                dailySalesDiv.appendChild(dailySaleElement);
            });
            // Display total sales
            const totalSales = this.calculateTotalSales();
            totalSalesDiv.innerHTML = `Total Sales: $ ${totalSales}`;
            // Display sales array
            const salesArray = [
                this.data.days.map((day) => this.calculateDailySales(day)),
            ];
            salesArrayDiv.innerHTML = `
                <h3>Sales as 2D Array:</h3>
                ${JSON.stringify(salesArray)}
            `;
        }
    }
}
// Create instance and display report when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const calculator = new TacoSalesCalculator();
    calculator.displaySalesReport();
});
//# sourceMappingURL=tacoSales.js.map