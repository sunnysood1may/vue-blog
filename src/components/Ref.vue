<template>
<h2>Ref in Vue js 3</h2>
<input type="text" ref="input" />
<button v-on:click="getData">click Me</button>
</template>

<script>
export default {
    name: "RefC",
    methods: {
        getData(){
            console.log(this.$refs.input.value);
            this.$refs.input.focus();
            this.$refs.input.style.color = "red";
        }
    }
    
}
</script>
<style scoped>
h2 {
    color: orange
}
</style>