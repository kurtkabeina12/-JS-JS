const prices = [[100, 200], [120, 100], [200, 350]];

const pricesMapped = prices.map((price) => {
    // console.log(price[0], price[1], price)
    return (price[0] < price[1]) ? price[1] - price[0] : 0
})

const pricesFiltered = pricesMapped.filter(price => {
    return price > 0
})
console.log(pricesMapped, pricesFiltered)

const filterPrices = prices.map((price) => (price[0] < price[1]) ? price[1] - price[0] : 0).filter(price => price > 0);

console.log(filterPrices)