//9.10 sort
const arr = [1, 40, -5, 10, 0];

function getSort(sortArr, typeSort) {
	if (typeSort === 'возрастание') {
		for (let i = 0; i < sortArr.length; i++) {
			for (let j = 0; j < (sortArr.length - i - 1); j++) {
				if (sortArr[j] > sortArr[j + 1]) {
					[sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]]
				}
			}
		}
		console.log(`Отсортирован по возрастанию: ${sortArr}`)
	} else if (typeSort === 'убывание') {
		for (let i = 0; i < sortArr.length; i++) {
			for (let j = 0; j < (sortArr.length - i - 1); j++) {
				if (sortArr[j] < sortArr[j + 1]) {
					let temp = sortArr[j];
					sortArr[j] = sortArr[j + 1];
					sortArr[j + 1] = temp;
				}
			}
		}
		console.log(`Отсортирован по убыванию: ${sortArr}`)
	} else {
		console.log('Неизвестный тип сортировки');
	}
}

getSort(arr, 'возрастание');