<template>
<h2>Teacher Name is : {{name}} </h2>

<button v-on:click="getUser(userName)">Send User Name to Parent</button>

</template>

<script>
export default {
    name: 'TeacherC',
    data(){
        return {
            userName: 'Peter'
        }
    },
    props:{
        name: String,
        getUser: Function
    }
}
</script>