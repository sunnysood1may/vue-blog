<template>
<h1>CSS binding</h1>
<h2 class="staticClass" :class="{green:colorfull,err:true}">CSS Component</h2>

<h3 :class="applyStyle">Apply Style</h3>

<button v-on:click="colorfull=!colorfull">Apply Style</button>
</template>

<script>
export default {
    name: "CssB",
    data(){
        return{
            colorfull: true
        }
    },
    computed:{
        applyStyle(){
          return  {
                green: this.colorfull,
                err: true,
                other: true
            }
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange
}

.green {
    background-color: green;
    width: 200px;
    padding: 10px;
    color: #fff
}

.err {
    color: yellow
}

.other {
    font-size: 20px
}
</style>