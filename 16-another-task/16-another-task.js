const ToDoList = {
	tasks: []
};

function addTask(title, priority) {
	this.tasks.push({
		title,
		id: this.tasks.length > 0 ? this.tasks.at(-1).id + 1 : 1,
		priority
	})
}

function deleteTask(id) {
	const deleteId = this.tasks.findIndex(el => el.id === id);
	this.tasks.splice(deleteId, 1)
}

const taskManipulations = {
	changeTask(id, data, type) {
		this.tasks.map((task) => {
			if (task.id === id) {
				task[type] = data
			}
		})
	},
	sortTask(sortedParametr, sortedMethod) {
		switch (sortedMethod) {
			case 'increasing':
				return [...this.tasks].sort((a, b) => a[sortedParametr] - b[sortedParametr]);
			case 'decreasing':
				return [...this.tasks].sort((a, b) => b[sortedParametr] - a[sortedParametr]);
			default:
				return [...this.tasks].sort((a, b) => a[sortedParametr] - b[sortedParametr]);
		}
	}
}

addTask.call(ToDoList, 'Убрать посуду', 2)
addTask.apply(ToDoList, ['Приготовить еду посуду', 3])
// console.log(ToDoList.tasks.length)
deleteTask.apply(ToDoList, [3])
const addChangeTodoTask = taskManipulations.changeTask.bind(ToDoList)
addChangeTodoTask(1, 'Собрать посуду', 'title')
console.log(ToDoList)
// console.log(ToDoList.sortTask('priority', 'increasing'))
// console.log(ToDoList.sortTask('id', 'decreasing'))