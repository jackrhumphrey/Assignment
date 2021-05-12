const sales = [
    { itemSold: "Football", price: 19.99, dateSold: "2018-04-07", id: "j_123" },
    { itemSold: "Trainers", price: 159.95, dateSold: "2018-03-02", id: "t_acds1" },
    { itemSold: "Cricket bat", price: 204.97, dateSold: "2018-04-05", id: "j_456" },
    { itemSold: "Rugby ball", price: 30.00, dateSold: "2017-04-22", id: "t_acds3" },
    { itemSold: "Hockey stick", price: 54.95, dateSold: "2017-03-19", id: "j_999" }
]

const sumOfPrice = () => {
    let total = 0;
    sales.forEach(sale => total += sale.price)
    return parseFloat(total.toFixed(2));
}

sumOfPrice();

const soldIn2017 = () => {
    const salesCopy = sales.filter(sale => sale.dateSold.slice(0, 4) === "2017")
    return salesCopy;
}

soldIn2017();

const itemsSold = () => {
    const salesCopy = sales.map(sale => sale.itemSold).sort()
    return salesCopy;
}

itemsSold();

const findSaleFromId = (id) => {
    return sales.find(sale => sale.id === id);
}

findSaleFromId("j_123");