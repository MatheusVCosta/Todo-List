<template>
	<div id="app">
		<h1>Tarefas</h1>

		<ProgressBar v-if="tasks.length >= 1" :tasks="tasks"/>
		<NewTask @taskAdded="addTask"/>
		<TaskList 
		:tasks="tasks" 
		@taskDelete="removeTask"
		@taskUpdate="updateTask"
		/>
		
	</div>
</template>

<script>
import TaskList from "./components/TaskList.vue"
import NewTask from "./components/NewTask.vue"
import ProgressBar from './components/ProgressBar.vue'

import $localStorage from "./components/localStorage.js";

export default {
	components: {
		TaskList, NewTask, ProgressBar
	},
	data() {
		return {
			tasks: []
		}
	},
	methods: {
		addTask(taskValue) {
			console.log('teste')
			let lastTask = this.tasks.at(-1)
			let newTaskId = this.tasks.length >= 1 ? lastTask.id + 1 : 1
			
			const newTask = {
				id: newTaskId,
				desc: taskValue,
				pending: false
			}
			this.tasks.push(newTask)
			$localStorage.saveItem(newTask)
		},
		removeTask(taskIndex) {
			this.tasks.splice(taskIndex, 1)
		},
		updateTask(i) {
			this.tasks[i].pending = !this.tasks[i].pending
			$localStorage.saveItem(this.tasks)
		}
	},
	created() {
		this.tasks = $localStorage.getTasks()
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				$localStorage.saveItem(JSON.stringify(this.tasks))
			}
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#app h1 {
		margin-bottom: 30px;
		font-weight: 300;
		font-size: 3rem;
		text-align: center;
	}
</style>
