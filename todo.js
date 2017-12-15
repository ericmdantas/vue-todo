;(function(V) {
	V.component('todo', {
		data() {
			return {
				message: 'yo',
				todos: [
					{ id: 1, msg: 'a' },
					{ id: 2, msg: 'b' },
					{ id: 3, msg: 'c' }
				]
			}
		},
		methods: {
			add(m) {
				this.todos.push({ id: Date.now(), msg: m });
				this.message = '';
				return false;
			},
			remove(id) {
				this.todos.forEach((t, i) => {
					if (t.id === id) {
						this.todos.splice(i, 1);
					}
				});
			}
		},
		template: `
		<div>
			<h3>vue 2do</h3>

			<form @submit.prevent="add(message)">
				<input type="text"
					   v-model="message" />

			    <button type="button"
						:disabled="!message.length"
						@click="add(message)">
							add
				</button>
			</form>

			<div>
				<ul>
					<li v-for="todo in todos" @click="remove(todo.id)" style="cursor: pointer;">
						{{todo.msg}}
					</li>
				</ul>
			</div>
		</div>
		`
	});

	new Vue({
		el: "#app"
	});
}(window.Vue));
