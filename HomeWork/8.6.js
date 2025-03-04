const tasks = ['Задача 1'];

function addTask(task) {
    tasks.push(task);
    console.log(tasks)
}

function deleteTask(task) {
    let indexTask = tasks.indexOf(task);
    if (indexTask === -1) {
        return;
    }
    return tasks.splice(indexTask, 1);
}

function changeTask(task) {
    let rezult = deleteTask(task)
    if (rezult) {
        tasks.unshift(task[0])
    }
    console.log(tasks)
}

addTask('Задача 2')
addTask('Задача 3')
deleteTask('Задача 1')
changeTask('Задача 3')