<template>
    <div :class="['task', taskState]" @click="updatePendingTask">
        <div class="task-desc">
            <p>{{ task.desc }}</p>
        </div>
        <div class="remove-task">
            <button @click="removeTask">x</button>
        </div>
    </div>  
</template>

<script>
    import barramento from './barramento.js';
    export default {
        props: ['task'],
        data() {
            return {
                pending: this.task.pending,
                state: 'pending'
            }
        },
        methods: {
            removeTask(task) {
                this.$emit("taskDelete", task)
            },
            updatePendingTask() {
                this.pending = !this.pending
                this.$emit("taskUpdate", this.task)
            }
        },
        computed: {
            taskState() {
                return this.pending ? "done" : "pending"
            }
        },
        
    }
    
</script>

<style>
@media (max-width: 600px) {
    .task {
        width: 65vw !important;
        height: 10vh !important;
        margin: 20px 0px 0px 0px !important;
    }
}
.task {
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 10px;
    font-size:2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none; /** Propriedade CSS para usuario não selecionar texto */

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 20px 10px;

    border-left: solid 12px #0404046b;
}
.task-desc {
    flex-grow: 1; /** pega a largura do elemento filho */
    text-align: center;
}
.pending {
    background-color: #e92c2c;
}

.done {
    background-color: #51bd56;
}
.done p {
    text-decoration: line-through;
}

/* button remove task */

.remove-task {
    display: flex;
    justify-content: center;
    align-content: center;
    align-self:flex-start;
    width: 20px;
    height: 20px;
}
.remove-task button {
    cursor: pointer;
    border:none!important;
    border-radius: 20px;
    color:white;
    background-color: #00000038;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 900;
}
</style>