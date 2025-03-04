const operations = [1000, -700, 300, -500, 10000];

function getBalance(arrofOperations, initialValue) {
	let totalBalance = initialValue;
	for (let element of arrofOperations) {
		totalBalance += element;
	}
	console.log(totalBalance);
}

function checkOperations(arrofOperations, initialValue) {
	let totalBalance = initialValue;
	for (let element of arrofOperations) {
		totalBalance += element;
		if (totalBalance < 0) {
			console.log('false')
			break;
		} else {
			console.log('true')
		}
	}
}

function averageOperations(arrofOperations) {
	let totalArr = [];
	let plusArr = [];
	let minusArr = [];
	for (let element of arrofOperations) {
		if (element > 0) {
			plusArr.push(element);
		} else {
			minusArr.push(element);
		}
	}
	console.log(plusArr, minusArr)
}

getBalance(operations, 100);
averageOperations(operations);