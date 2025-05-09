const warehouse = {
	goods: [],
	findGoodById: function (id) {
		return this.goods.find(el => el.id === id)
	},
	addGood: function (good) {
		const exist = this.goods.some((el) => el.id === good.id);
		if (!exist) {
			this.goods.push(good)
			return 'Добавлен ообьект'
		} else {
			return false
		}
	},
	getWeightKg: function () {
		let sum = 0;
		let a = this.goods.map((el) => {
			el?.weight?.kg ? sum += el.weight.kg : 0
		})
		console.log(sum)
		// return this.goods.reduce((acc, good) => {
		// 	const sum = acc?.weight?.kg + good?.weight?.kg;
		// 	console.log(acc?.weight)
		// }, 0)
	},
};

/* Товары */
const car = {
	id: 1,
	weight: {
		kg: 1000
	},
	brand: 'Ford'
}

const chair = {
	id: 2,
	weight: {
		kg: 2
	}
}

const paper = {
	id: 3,
	color: 'red'
}

warehouse.addGood(car)
warehouse.addGood(chair)
warehouse.addGood(paper)
// console.log(warehouse.findGoodById(paper.id))
console.log(warehouse.getWeightKg())
// console.log(warehouse)