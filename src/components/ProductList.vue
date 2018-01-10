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

  export default {
    name: 'ProductList',
    data () {
      return {
        products: PRODS
      }
    },
    components: {
      Product
    }
  }
</script>
