<template>
  <h2 v-on:mousemove="getConsole()">Home component
    <button v-on:click="getData('button clicked')">Click me</button>&nbsp;
    <button v-on:dblclick="getData('button double clicked')">Double Click</button>
  </h2>

  <h3>Two way binding
    <input type="text" v-model="count" />
    Count: {{ count }}
  </h3>

  <h3>Get input field Value
    <input type="text" placeholder="enter email" v-model="iemail" /> &nbsp;
    <input type="password" placeholder="enter password" v-model="ipassword" />&nbsp;
    <button v-on:click="getData('function called')" type="button">Get Values</button>
  </h3>

  <h2>Get Checkbox & Radio Button Value</h2>
  <h3>
    <label for="java">Java</label>
    <input type="checkbox" value="java" v-model="technology" id="java" />
    <label for="node">Node</label>
    <input type="checkbox" value="node" v-model="technology" id="node" />
    <label for="php">Php</label>
    <input type="checkbox" value="php" v-model="technology" id="php" />
    Technology : {{ technology }}
  </h3>
  <h3>
    <label for="student">Student</label>
    <input type="radio" value="student" id="student" v-model="profession" name="profession" />
    <label for="developer">Developer</label>
    <input type="radio" value="developer" id="developer" v-model="profession" name="profession" />
    I am a {{ profession }}
  </h3>

  <h2>If else condition</h2>
  <h3>
    <button v-on:click="show=!show">Toggle</button>&nbsp;
    <span v-if="show"> condition</span>
    <span v-else>Else condition</span>
  </h3>

  <h2>For Loop in Vue js</h2>
  <span v-for="item in technology" :key="item">
    {{item}},&nbsp;
  </span>
  <span v-for="item in users" :key="item.name">
      User name is : {{item.name}} and Email is : {{item.email}},&nbsp;
      <h2>Reuse Component</h2>
      <UserC :data="item" :getData="getData" />
  </span>

  <h2>Pass Data to child Component</h2>
  <ChildC name="sunny sood" :details="users" :setData="getData" />

  <h2>HTML binding</h2>
  <div v-html="text + tag + tag2 + tag3"></div>
  
</template>

<script>
import ChildC from './Child.vue';
import UserC from './User.vue';
export default {
  name: "HomeComp",
  components: {
    ChildC,UserC
  },
  data() {
    return {
      show: false,
      technology: [
        "java",
                "php",
                "node",
                "html",
                "asp"
      ],
      users: [
        {
          name: 'anil',
          email: 'anil@test.com'
        },
        {
            name: 'sam',
            email: 'sam@test.com'
        },
        {
            name: 'peter',
            email: 'peter@test.com'
        }
      ],
      profession: null,
      iemail: null,
      ipassword: null,
      count: 0,
      email: "sunny1may@gmail.com",
      text:"sunny sood",
      tag:"<h2>sunny sood</h2>",
      tag2:"<h2>Peter</h2>",
      tag3:"<h2>Burce</h2>",
      /*getName: function (e) {
                return e;
            },*/
    };
  },
  methods: {
    /*getName(e){
            return e;
        },
        getData(){
            return {
                name: "shilpa",
                email: this.email
            }
        },*/
    getData(e) {
      alert(e);
      this.count = this.count + 1;
      console.log(this.iemail, this.ipassword);
    },
    getConsole() {
      console.log("function called");
    },
  },
};
</script>

<style scoped>
h1, h2 {
  color: orange;
}
</style>
