<template>
  <div class="container">
    <div class="row">
      <product v-for="prod in products" :key="prod.id" v-bind:prod="prod"></product>
    </div>
  </div>
</template>

<script>
  import Product from './Product'
  import {PRODS} from '../params.js'
  console.log('produ',this.products_arr1)
  export default {
    name: 'ProductList',
    data () {
      return {
        products: PRODS
      }
    },
    components: {
      Product
    },
    mounted: function () {
      console.log('this.$root',this.$root.products_arr1)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
