function convertation(sum, myCurrency, newCurrency) {
    let rate = getExchangeRate(myCurrency, newCurrency);
    return rate !== null ? sum * rate : null;
}

function getExchangeRate(from, to) {
    switch (from) {
        case 'rub':
            switch (to) {
                case 'usd': return 1 / 93.75;
                case 'eur': return 1 / 97.75;
                case 'cny': return 1 / 12.59;
            }
            break;
        case 'usd':
            switch (to) {
                case 'rub': return 93.75;
                case 'eur': return 93.75 / 97.75;
                case 'cny': return 93.75 / 12.59;
            }
            break;
        case 'eur':
            switch (to) {
                case 'rub': return 97.75;
                case 'usd': return 97.75 / 93.75;
                case 'cny': return 97.75 / 12.59;
            }
            break;
        case 'cny':
            switch (to) {
                case 'rub': return 12.59;
                case 'usd': return 12.59 / 93.75;
                case 'eur': return 12.59 / 97.75;
            }
            break;
    }
    return null;
}

console.log(convertation(1000, 'rub', 'usd'));
console.log(convertation(50, 'usd', 'eur'));
console.log(convertation(100, 'cny', 'rub'));
console.log(convertation(100, 'eur', 'cny'));
console.log(convertation(100, 'usd', 'jpy')); 
