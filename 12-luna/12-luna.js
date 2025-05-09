// let cardTest = "4561-1213-4367-2612";
let cardTest = "4561-2612-1234-5467";

function checkCard(card) {
    let total = 0;
    let cardClear = card.replaceAll('-', '').split('');
    cardClear.map((element, index) => {
        if (((index + 1) % 2)) {
            let el = (element * 2) > 9 ? ((element * 2) - 9) : element * 2;
            total += el
        } else {
            total += Number(element)
        }
    })
    if (total % 2) {
        console.log(false)
    } else {
        console.log(true)
    }
}

checkCard(cardTest)