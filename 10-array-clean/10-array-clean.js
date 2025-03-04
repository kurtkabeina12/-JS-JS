const arr = [3, 6, 9, 2];

function deleteItem(arr) {
	return arr.filter(item => item < 5)
}

function sortedArr(arr, fn) {
	const clearArr = fn(arr);
	for (let i = 0; i < clearArr.length; i++) {
		for (let j = 0; i < (clearArr.length - i - 1); i++) {
			if (clearArr[j] > clearArr[j + 1]) {
				[clearArr[j], clearArr[j + 1]] = [clearArr[j + 1], clearArr[j]]
			}
		}
	}
	console.log(clearArr)
}

sortedArr(arr, deleteItem)