import Vue from 'vue'

export default new Vue({
    methods: {
        sendEvent(eventName, value) {
            this.$emit(eventName, value)
        },
        listenEvent(eventName, callback) {
            this.$on(eventName, callback)
        }
    }
})