<template>
  <h1 v-on:mousemove="getConsole()">Home component</h1>
  <button v-on:click="getData('button clicked')">Click me</button><br /><br />
  <button v-on:dblclick="getData('button double clicked')">Click me</button>

  <h2>{{count}}</h2>
</template>

<script>
export default {
    name: "HomeComp",
    data() {
        return {
            count: 0,
            email: "sunny1may@gmail.com",
            /*getName: function (e) {
                return e;
            },*/
        } 
    },
    methods:{
        /*getName(e){
            return e;
        },
        getData(){
            return {
                name: "shilpa",
                email: this.email
            }
        },*/
        getData(e){
            alert(e);
            this.count = this.count+1;
        },
        getConsole(){
            console.log("function called");
        }
    }
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
