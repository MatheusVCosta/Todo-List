import Vue from "vue"

export default new Vue({
    methods: {
        createDataLocalStorage(item) {
            const tasks = localStorage.setItem('tasks', JSON.stringify(item))
            return tasks
        },
        getTasks() {
            const json = JSON.parse(localStorage.getItem('tasks'))
            const array = JSON.parse(json)
            return Array.isArray(array) ? array : []

        },
        saveItem(newItem) {
            localStorage.setItem('tasks', JSON.stringify(newItem))
        }
    }
})