<template>
    <div class="progress-bar">
        <span>{{ progress }}%</span>
        <div class="bar" :style="{width: progress + '%'}">
        </div>
        
    </div>
</template>

<script>
    
    export default {
        props: ['tasks'],
        data() {
            return {
                percentage: 0,
            }
        },
        computed: {
            progress() {
                const total = this.tasks.length
                if (total >= 1) {
                    const done = this.tasks.filter(task => (task.pending)).length
                    this.percentage = Math.round(done * 100 / total)
                }
                return this.percentage
            }
        },
    }
</script>

<style>
@media (max-width: 600px) {
    .progress-bar {
        width: 65vw !important;
    }    
}
.progress-bar {
    display: flex;
    width:70vw;
    border: solid 1px #ababab;
    border-radius: 3px;
    background-color: #3a737354;
    margin-bottom: 20px;
    align-items: center;
}
.progress-bar span{
   position: absolute;
   left: 48%;
}
.bar {
    display: flex;
    justify-content: center;
    height: 30px;
    background-color: green;
}
</style>