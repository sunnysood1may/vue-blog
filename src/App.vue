<template>
  <router-link to="/home">Home Page</router-link>&nbsp;
  <router-link to="/login">Login Page</router-link>&nbsp;
  <router-link to="/HelloWorld">HelloWorld</router-link>&nbsp;
  <router-link to="/cssBinding">CSS binding</router-link>&nbsp;
  <router-link to="/props">Props</router-link>&nbsp;
  <router-link to="/ref">Ref</router-link>&nbsp;
  <router-link to="/simpleForm">Simple Form</router-link>&nbsp;
  <router-link to="/formModifier">Form Modifier</router-link>&nbsp;
  <router-link to="/nonProp">Non-Props data</router-link>&nbsp;
  <router-link to="/computedProperty">Computed Property</router-link>&nbsp;
  <router-link to="/watchers">Watchers</router-link>&nbsp;

  <HelloWorld msg="Welcome to Your VueJS3 App"/>
  <!--<HomeComp />-->
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
//import HomeComp from './components/Home.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    //HomeComp
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
