<template>
    <div>
        <h3>Watchers</h3>
        <h3>{{count}}</h3>
        <button v-on:click="count=count+1"> + </button>&nbsp;
        <button v-on:click="count=count-1"> - </button>
    </div>
</template>
<script>
export default {
    name:'WatcherS',
    data(){
        return{
            count: 0
        }
    },
    watch:{
        count(val,prev){
            //alert(val);
            //alert(prev);
            if(val>5 && val>prev){
                alert("stop counting");
            }
        }
    }
  
}
</script>

<style scoped>
h2 {
    color: orange
}
</style>