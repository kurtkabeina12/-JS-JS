const users = [
    { name: 'Вася', age: 30 },
    { name: 'Катя', age: 18 },
    { name: 'Аня', age: 40 },
    { name: 'Петя', age: 25 }
];

const sortedForAge = [...users].sort((a, b) => a.age - b.age);
const sortedForName = [...users].sort((a, b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
})

console.log(sortedForAge)
console.log(sortedForName)