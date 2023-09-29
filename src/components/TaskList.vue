<template>    
    <div class="taskGrid">
        <template v-if="hasTasks">
            <Task 
                v-for="(task, i) in tasks" 
                :key="task.id" 
                :task="task"
                @taskDelete="$emit('taskDelete', i)"
                @taskUpdate="$emit('taskUpdate', i)"
                ></Task>
        </template>
        <h1 v-else>{{ message }}</h1>
    </div>
</template>

<script>

import Task from './Task.vue'
    export default {
        data() {
            return {
                message: "Suas tarefas estão em dia. Parabéns!",
            }
        },
        components: {
            Task
        },
        props: ['tasks'],
        computed: {
            hasTasks() {
                return this.tasks.length > 0
            }
	}
    }
</script>

<style>
@media (max-width: 600px) {
    .taskGrid {
        display: flex;
        flex-direction: column;
    }    
}
.taskGrid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

</style>