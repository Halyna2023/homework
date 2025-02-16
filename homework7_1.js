var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

var serviceManager = {
    price: function() {
        return Object.values(services)
            .map(price => parseInt(price))
            .reduce((sum, price) => sum + price, 0) + " грн";
    },
    minPrice: function() {
        return Math.min(...Object.values(services).map(price => parseInt(price))) + " грн";
    },
    maxPrice: function() {
        return Math.max(...Object.values(services).map(price => parseInt(price))) + " грн";
    }
};

console.log("Загальна вартість:", serviceManager.price());
console.log("Мінімальна ціна:", serviceManager.minPrice());
console.log("Максимальна ціна:", serviceManager.maxPrice());