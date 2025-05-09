const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];


function isValid(day, month, year) {
	return (day > 0 && day < 31 && month > 0 && month <= 12)
}

function sortedDate(array) {
	array.map((element) => {
		const item = element.includes('/')
			? [day, month, year] = element.split('/').map(Number)
			: element.includes('-')
				? [month, day, year] = element.split('-').map(Number)
				: '';
		let arrSorted = (isValid(day, month, year) ? item : '')
		if (arrSorted.length > 0) {
			console.log(arrSorted.join('-'))
		}
	})
}

sortedDate(arr)