<template>
    <h2>Form Modifiers</h2>
    <input type="number" v-model.lazy="item" />
    <h2> Item is:{{item}}</h2>
<h2> Item is:{{typeof item}}</h2>
</template>

<script>
export default {
    name: "FormModifier",
    data(){
        return {
            item: ''
        }
    }
}
</script>

<style scoped>
h2 {
    color: orange
}
</style>