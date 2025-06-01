var TacoSalesCalculator = /** @class */ (function () {
    function TacoSalesCalculator() {
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
    TacoSalesCalculator.prototype.calculateDailySales = function (day) {
        var sales = this.salesData[day];
        return (sales.beef * this.data.prices.beef +
            sales.chicken * this.data.prices.chicken +
            sales.steak * this.data.prices.steak +
            sales.pork * this.data.prices.pork +
            sales.beans * this.data.prices.beans +
            sales.potato * this.data.prices.potato);
    };
    TacoSalesCalculator.prototype.calculateTotalSales = function () {
        var _this = this;
        return this.data.days.reduce(function (total, day) { return total + _this.calculateDailySales(day); }, 0);
    };
    TacoSalesCalculator.prototype.displaySalesReport = function () {
        var _this = this;
        var dailySalesDiv = document.getElementById("dailySales");
        var totalSalesDiv = document.getElementById("totalSales");
        var salesArrayDiv = document.getElementById("salesArray");
        if (dailySalesDiv && totalSalesDiv && salesArrayDiv) {
            // Display daily sales
            this.data.days.forEach(function (day) {
                var dailySale = _this.calculateDailySales(day);
                var dailySaleElement = document.createElement("div");
                dailySaleElement.className = "daily-sales";
                dailySaleElement.innerHTML = "".concat(day, " Taco Sales: $ ").concat(dailySale);
                dailySalesDiv.appendChild(dailySaleElement);
            });
            // Display total sales
            var totalSales = this.calculateTotalSales();
            totalSalesDiv.innerHTML = "Total Sales: $ ".concat(totalSales);
            // Display sales array
            var salesArray = [
                this.data.days.map(function (day) { return _this.calculateDailySales(day); }),
            ];
            salesArrayDiv.innerHTML = "\n                <h3>Sales as 2D Array:</h3>\n                ".concat(JSON.stringify(salesArray), "\n            ");
        }
    };
    return TacoSalesCalculator;
}());
// Create instance and display report when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    var calculator = new TacoSalesCalculator();
    calculator.displaySalesReport();
});
