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

// №1
const arr1 = [1, 2, 3, 4];
function sumArr(nums){
  const rezult = nums.reduce((acc, operation) => {
    return acc+=operation
  }, 0)
  console.log(rezult);
}

sumArr(arr1);

// #2
const arr2 = [5, 1, 9, 3];
function maxNum(nums){
  let maxNub = 0;
  nums.map(num => {
    if(num > maxNub){
      maxNub = num;
    }
  })
  console.log(maxNub);
}

maxNum(arr2);

// #3
const arr3 = ['apple', 'banana', 'apple', 'orange'] ;

function findElementCount(elements){
  let obj = {};
  let count = 0;

  for (let i = 0; i < elements.length; ++i) {
    if (elements.indexOf(elements[i]) !== elements.lastIndexOf(elements[i])) {
      count+=1;
    }
    obj[elements[i]] = count;
  }
  console.log(obj)
}

findElementCount(arr3);

// #4
const str = 'hello';

function reverseStr(element){
  console.log(element.split('').reverse().join(''))
}

reverseStr(str);

// #5
const str2 = 'racecar';
function palendrom(element){
  let reversElement = element.split('').reverse().join('');
  if(reversElement == element){
    console.log(true);
  } else{
    console.log(false);
  }
}

palendrom(str2)

// #6
const arr6 = [1, 2, 3, 4, 5, 6];
function filterArr(nums){
 const rez = nums.filter(num => {
    if(!(num % 2)){
      return num
    }
  })
  console.log(rez);
}

filterArr(arr6);

// #7
const arr7 = [[1, 2, 3], [2, 3, 4]]

function foundElements(nums){
  let arr = nums.flat(Infinity);
  const rez = [];
  for(let num of arr){
    if (arr.indexOf(num) !== arr.lastIndexOf(num)) {
      rez.push(num)
    }
  }
  console.log(rez.filter((item, index) => {
    return rez.indexOf(item) !== index
  }));
}

foundElements(arr7);

// #8
function createPerson(name, age){
  if (arguments.length !== 2) {
    return
  }
  
  if(name === '' || age <= 0){
    return
  }

  let obj={
    name,
    age
  };

  console.log(obj);
}

createPerson("Anna", 25);

// №9
const arr9 = [10, 20, 30];
function findSqrt(nums){
  let rez = 0;
  nums.map(num => rez+=num)
  console.log(rez / nums.length)
}

findSqrt(arr9);

// #10
const arr10 = [{ name: "Tom" }, { name: "Sam" }];
function changeObj(arr){
  let rez = [];
  for(let element of arr){
    rez.push(element.name)
  }
  console.log(rez)
}

changeObj(arr10);