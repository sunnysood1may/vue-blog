<template>
    <h1>Home component 
        {{10*20}}
        {{"hello".length}}
        {{email}}
        {{getName('sood')}}
        </h1>
</template>

<script>
export default {
    name:'HomeComp',
    data(){
        return{
            email: 'sunny1may@gmail.com',
            getName: function(e){
                return e;
            }
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>
