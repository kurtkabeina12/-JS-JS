const users = [
    { name: 'Вася', surname: 'Пупкин', age: 30, skills: ['Разработка', 'DevOps'] },
    { name: 'Катя', age: 18, surname: 'Белова', skills: ['Дизайн'] },
];

// const newUsers = users.map((user) => {
//     const fullUsername = user.name + ' ' + user.surname;
//     const numSkills = user.skills.length;
//     const newUser = {
//         fullName: fullUsername,
//         skills: numSkills
//     }
//     return newUser
// })

const newUsers = users.map((user) => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skills: user.skills.length
    }
})

console.log(newUsers)