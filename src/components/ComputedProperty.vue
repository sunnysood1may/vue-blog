<template>
<div>
<h3>Computed Property {{dollors}}</h3>
<h3>{{getResult}}</h3>
<h3>{{getData()}}</h3>
</div>
</template>
<script>
export default {
    name:'ComputedProperty',
    data() {
        return {
            dollors: 100,
            rupeeVal: 70,
            discount: 10,
        }
    },
    methods: {
        getData() {
            return (this.dollors * this.rupeeVal) - this.discount

        }
    },
    computed: {
        getResult() {
            return (this.dollors * this.rupeeVal) - this.discount
        }
    }
  
}
</script>