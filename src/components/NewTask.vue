<template>
    <div class="new-task">
        <input v-model="value" type="text" placeholder="Nova Tarefa?" :onfocus="value">
        <button @click="add">+</button>
    </div>    
</template>

<script>

    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
            add() {
                this.$emit("taskAdded", this.value)
                this.value = ""
            }
        }
    }
</script>

<style>
@media (max-width: 600px) {
    .new-task {
        width: 65vw !important;
    }    
}
.new-task {
    display: flex;
    justify-content: center;
    width:350px;
    border: solid 1px #ababab;
    border-radius: 5px;
}
.new-task input {
    width: 100%;
    color:#fff;
    border:none!important;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #3a737354;
    font-size: 1rem;
    padding-left: 5px;
    height: 35px;
}
.new-task input:focus {
    color:#fff;
    box-shadow: 0 0 0 0;
    outline: 0;
}

.new-task button {
    width: 40px;
    cursor: pointer;
    border:none!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color:#fff;
    background-color: #4eacff;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 900;
}
</style>