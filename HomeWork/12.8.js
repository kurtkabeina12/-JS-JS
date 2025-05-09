const cardTest = '2834234503458353';

function cardMask(card) {
    // let replaceItem = card.slice(0, (cardTest.length - 4))
    // console.log(card.replace(replaceItem, '*'.repeat(replaceItem.length)))
    const card1 = card.slice(-4).padStart(card.length, '*')
    console.log(card1)
}

cardMask(cardTest)