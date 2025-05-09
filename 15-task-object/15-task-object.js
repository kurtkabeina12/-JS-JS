const ToDoList = {
	tasks: [
		{
			'title': 'Помыть посуду',
			id: 1,
			priority: 1,
		}
	],
	addTask: function (title, priority) {
		this.tasks.push({
			title,
			id: this.tasks.at(-1).id + 1,
			priority
		})
		return this.tasks
	},
	deleteTask: function (id) {
		const deleteId = this.tasks.find(el => el.id === id);
		this.tasks.splice(deleteId, 1)
		return this.tasks
	},
	changeTask: function (id, data, type) {
		console.log(id, data, type)
		this.tasks.map((task) => {
			if (task.id === id) {
				task[type] = data
			}
		})
		return this.tasks
	},
	sortTask: function (sortedParametr, sortedMethod) {
		console.log(sortedParametr)
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

// console.log(ToDoList.addTask('Убрать посуду', 2))
// console.log(ToDoList.addTask('Приготовить еду посуду', 3))
// console.log(ToDoList.tasks.length)
// console.log(ToDoList.deleteTask(3))
console.log(ToDoList.changeTask(1, 'Собрать посуду', 'title'))
// console.log(ToDoList.sortTask('priority', 'increasing'))
// console.log(ToDoList.sortTask('id', 'decreasing'))
