<template>
  <h1>Home component</h1>
  <h2>Name : {{ getName("sunny sood") }}</h2>
  <h2>Email : {{ email }}</h2>
  <h2>All Data : {{ getData().email }}</h2>
</template>

<script>
export default {
    name: "HomeComp",
    data() {
        return {
            email: "sunny1may@gmail.com",
            /*getName: function (e) {
                return e;
            },*/
        } 
    },
    methods:{
        getName(e){
            return e;
        },
        getData(){
            return {
                name: "shilpa",
                email: this.email
            }
        }
    }
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
