<template>
<h2>Props in Vue js 3</h2>
<StudentC :name="name" />
<TeacherC :getUser="getUserName" :name="name" />
<h2>Child User is {{childUser}}</h2>
</template>

<script>
import StudentC from './Student.vue';
import TeacherC from './Teacher.vue';
export default {
    name: "PropsC",
    data() {
        return {
            name: "sunny",
            childUser: ""
        }
    },
    components: {
        StudentC, TeacherC
    },
    methods: {
        getUserName(name){
            alert(name);
            this.childUser = name;
        }
    }
}
</script>
<style scoped>
h2 {
    color: orange
}
</style>