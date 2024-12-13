<template>
    <h2>Non-Props Data</h2>
    <NonPropUserVue item="some Data" id="user-cmp" />
</template>

<script>
import NonPropUserVue from './NonPropUser.vue';
export default {
    name: "NonProp",
    components: {
        NonPropUserVue
    }
    
}
</script>

<style scoped>
h2 {
    color: orange
}
</style>