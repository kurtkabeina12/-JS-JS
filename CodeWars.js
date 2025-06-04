// const arr = [8, 4, 2];

// var triangleType = function(nums) {
// 	const [a, b, c] = nums.sort((x, y) => x - y);
// 	if( a + b <= c){
// 		return 'none'
// 	} 
//     if (nums.every(num => num === nums[0])) {
//         console.log('equilateral');
// 				console.log('equilateral');
// 				return 'equilateral'
//     }else{
// 					if(nums.some(x => nums.indexOf(x) !== nums.lastIndexOf(x))){
// 						console.log('isosceles');
// 						return 'isosceles'
// 					}else{
// 						return 'scalene '
// 					}
//     }
// };

// triangleType(arr);

// const arr = [12,345,2,6,7896];

// var findNumbers = function(nums) {
// 	let count = nums.filter(num => String(num).length % 2 === 0)
// 	return count.length
// };

// findNumbers(arr)

let arr10 = [5, 2, 8, 2, 3, 1, 6, 5, 4, 7, 1];
for (let i = 0; i < arr10.length; i++) {
  for (let j = i + 1; j < arr10.length; j++) {
    if (arr10[i] === arr10[j]) {
      arr10.splice(j, 1);
      j--;
    }
  }
}
console.log("Без коллекций, без дубликатов:", arr10);