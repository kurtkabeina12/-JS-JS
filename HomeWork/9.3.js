const arr = ["!", "js", "люблю", "я"];

function revers(arr) {
    let reverArr = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        reverArr.push(arr[i])
    }
    console.log(reverArr.join(' '));
}

revers(arr);