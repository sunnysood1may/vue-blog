<template>
    <h2>Child Component</h2>
    <h4>{{name}}</h4>
    <h4>{{details[1].email}}</h4>
    <button v-on:click="setData('s123')">Call function</button>
</template>

<script>
export default {
    name: 'ChildC',
    props: {
        name: String,
        details: Object,
        setData: Function
    }
}
</script>