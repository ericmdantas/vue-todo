new Vue({
	el: "#app",
	data: {
		message: 'yo',
		todos: [
			{id: 1, msg: 'a'},
			{id: 2, msg: 'b'},
			{id: 3, msg: 'c'}
		]
	},
	methods: {
		add: function(m) {
			this.todos.push({id: Date.now(), msg: m});
			this.message = '';
			return false;
		},
		remove: function(id) {
			this.todos.forEach((t, i) => {
				if (t.id === id) {
					this.todos.splice(i, 1);
				}
			});
		}
	}
});