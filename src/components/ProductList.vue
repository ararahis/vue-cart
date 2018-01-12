<template>
  <div class="container">
    <div class="row">
      <product v-for="prod in products" :key="prod.id" v-bind:prod="prod"></product>
    </div>
  </div>
</template>

<script>
  import Product from './Product'
  import {PRODS,CART_ITEMS} from '../params.js'

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
    created: function() {
      window.addEventListener('beforeunload', this.updateLocalStorage)
    },
    beforeDestroy: function () {
      this.updateLocalStorage
    },
    methods: {
      updateLocalStorage: function () {
        localStorage.setItem('cart_count', CART_ITEMS.cart_count)
        localStorage.setItem('cart_list', JSON.stringify(CART_ITEMS.cart_list))
      }
    }
  }
</script>
