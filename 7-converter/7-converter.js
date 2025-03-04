function convertation(sum, myCurrency, newCurrency) {

}

function checkCurrency(newCurrency) {
    switch (newCurrency) {
        case 'eur':
            return 97.75;
        case 'usd':
            return 93.75;
        case 'cny':
            return 12.59;
        default:
            return null;
    }
}