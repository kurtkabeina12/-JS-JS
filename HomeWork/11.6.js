// const arr = [2, 4, 4, 10];

// const filteredArr = arr.reduce((acc, el, i) => {
//     if (i != arr.length - 1) {
//         return acc + el
//     } else {
//         return (acc + el) / arr.length
//     }
// }, 0)
// console.log(filteredArr)
// const srValue = arr.reduce((acc, value) => acc + value) / arr.length;
// console.log(srValue)

var longestCommonPrefix = function (strs) {
    for (let i = 0; i < strs.length; i++) {
        console.log(strs[i])
        for (let j = 0; j < strs[i].length; j++) {
            console.log(strs[i][j])
        }
    }
};

longestCommonPrefix(["flower", "flow", "flight"])