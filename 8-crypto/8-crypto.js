function crypto(word) {
	let wordLength = word.length;
	if (wordLength % 2 == 0) {
		let arr = word.split('');
		let half = wordLength / 2;
		let firstPass = arr.splice(0, half);

		let crypto = (arr.reverse()).concat((firstPass.reverse())).join('');
		console.log(crypto)
		return crypto
	} else {
		let arr = word.split('');

		let crypto = (arr.reverse()).join('');
		console.log(crypto)
		return crypto
	}
}

function check(cryptoWord, word) {
	let decrypt = crypto(cryptoWord);
	if (decrypt === word) {
		console.log(true);
	} else {
		console.log(false)
	}
}

crypto('password');
check('drowssap', 'password');
crypto('eng');
check('gne', 'eng');

