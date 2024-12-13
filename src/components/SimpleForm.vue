<template>
    <h2>SimpleForm</h2>
    <!--{{ form }}-->
    <ul>
        <li v-for="item in error" v-bind:key="item">
            {{item}} is valid
        </li>
    </ul>
    <form>
        <label>Email : </label>
        <input type="text" placeholder="enter email" v-model="form.email" /><br /> <br />

        <label>Password : </label>
        <input type="password" placeholder="enter password" v-model="form.password" /><br /> <br />

        <label>Country : </label>
        <select v-model="form.country">
            <option>India</option>
            <option>USA</option>
        </select>

        <h3>Gender</h3>
        <label>Male : </label>
        <input type="radio" name="gender" value="male" v-model="form.gender" /><br />
        <label>Female : </label>
        <input type="radio" name="gender" value="female" v-model="form.gender" />
        

        <h3>Technology</h3>
        <label>Java : </label>
        <input type="checkbox" value="java" v-model="form.technology" />
        <br /> <br />
        <label>.Net : </label>
        <input type="checkbox" value=".net" v-model="form.technology" />
        <br /> <br />

        <button v-on:click="login" type="button">Login</button>
    </form>
</template>

<script>
export default {
    name: "SimpleForm",
    data(){
        return{
            form:{
                email:'',
                password: '',
                country: '',
                gender: '',
                technology: []
            },
            error:[],
        }
    },
    methods: {
        login(){
            //console.log("login data", this.form);
            this.error = [];
            for(const item in this.form){
                //console.log("login data", item);
                //console.log(this.form[item]);
                if (this.form[item] === "" || this.form[item].length === 0) {
                    this.error.push(item);
                }
            }
            if (this.error.length === 0) {
                    alert("Data has been submitted")
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