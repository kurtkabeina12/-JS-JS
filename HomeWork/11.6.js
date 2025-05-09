const arr = [2, 4, 4, 10];

const filteredArr = arr.reduce((acc, el, i) => {
    if (i != arr.length - 1) {
        return acc + el
    } else {
        return (acc + el) / arr.length
    }
}, 0)
console.log(filteredArr)
const srValue = arr.reduce((acc, value) => acc + value) / arr.length;
console.log(srValue)