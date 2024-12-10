<template>
  <h1 v-on:mousemove="getConsole()">Home component</h1>
  <button v-on:click="getData('button clicked')">Click me</button><br /><br />
  <button v-on:dblclick="getData('button double clicked')">Click me</button>

  <h3>Two way binding</h3>
  <input type="text" v-model="count" />
  <h2>{{ count }}</h2>

  <h3>Get input field Value</h3>
  <input type="text" placeholder="enter email" v-model="iemail" /> <br /><br />
  <input type="password" placeholder="enter password" v-model="ipassword" />
  <br /><br />
  <button v-on:click="getData('function called')" type="button">
    Get Values
  </button>

  <h1>Get Checkbox & Radio Button Value</h1>
  <h3>Technology</h3>
  <label for="java">Java</label>
  <input type="checkbox" value="java" v-model="technology" id="java" />
  <label for="node">Node</label>
  <input type="checkbox" value="node" v-model="technology" id="node" />
  <label for="php">Php</label>
  <input type="checkbox" value="php" v-model="technology" id="php" />
  <h4>Technology : {{ technology }}</h4>
  <h3>Profession</h3>
  <label for="student">Student</label>
  <input
    type="radio"
    value="student"
    id="student"
    v-model="profession"
    name="profession"
  />
  <label for="developer">Developer</label>
  <input
    type="radio"
    value="developer"
    id="developer"
    v-model="profession"
    name="profession"
  />
  <h4>I am a {{ profession }}</h4>
</template>

<script>
export default {
  name: "HomeComp",
  data() {
    return {
      technology: [],
      profession: null,
      iemail: null,
      ipassword: null,
      count: 0,
      email: "sunny1may@gmail.com",
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
h1 {
  color: orange;
}
</style>
