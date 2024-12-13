<template>
<div>
<h3 v-bind="$attrs">Bruce</h3>
<h3>Peter</h3>
<h3>{{item}}</h3>

</div>
</template>
<script>
export default {
    name:'NonPropUser',
    inheritAttrs: false,
    props: {
        item: String,
        id: String
    }
  
}
</script>