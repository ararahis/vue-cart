<template>
  <div class="container">
    <div class="row">
      <product v-for="prod in products" :key="prod.id" v-bind:prod="prod"></product>
    </div>
  </div>
</template>

<script>
  import Product from './Product'
  export default {
    name: 'ProductList',
    data () {
      return {
        products: JSON.parse(localStorage.getItem('products'))
      }
    },
    components: {
      Product
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
