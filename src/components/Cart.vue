<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-10 col-md-offset-1">
        <table class="table table-hover">
          <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th class="text-center">Price</th>
            <th class="text-center">Total</th>
            <th> </th>
          </tr>
          </thead>
          <tbody>
          <product-cart v-for="prod in prod_cart" :key="prod.id" v-bind:prod="prod"  v-bind:prod_cart="prod_cart"  v-on:delete-from-cart="deleteFromCartList" v-on:update-cart="updateCart"></product-cart>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
            <td><h3>Total</h3></td>
            <td class="text-right"><h3><strong>{{ sum }}</strong></h3></td>
          </tr>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
            <td>
              <button type="button" class="btn btn-default" @click="goHome">
                <span class="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductCart from "./ProductCart";
  export default {
    name: 'Cart',
    data () {
      return {
        prod_cart: {},
        sum: 0
      }
    },
    created: function() {
      this.prod_cart = this.fetchData()
      this.sum = this.fetchDataSum()
    },
    methods: {
      goHome: function () {
        this.$router.push("/")
      },
      fetchData: function () {
        let prods = JSON.parse(localStorage.getItem('products'))
        let prod_cart = JSON.parse(localStorage.getItem('cart_list'))
        let prod_cart_array = {}
        for (let key in prods) {
          if(prod_cart[prods[key]['id']])
          {
            prod_cart_array[prods[key]['id']]={id:prods[key]['id'],title:prods[key]['title'],price:prods[key]['price'],qty:prod_cart[prods[key]['id']]}
          }
        }
        return prod_cart_array
      },
      fetchDataSum: function () {
        let prods = JSON.parse(localStorage.getItem('products'))
        let prod_cart = JSON.parse(localStorage.getItem('cart_list'))
        let sum = 0
        for (let key in prods) {
          if(prod_cart[prods[key]['id']])
          {
            sum += prods[key]['price']*prod_cart[prods[key]['id']]
          }
        }
        return sum
      },
      deleteFromCartList: function (id) {
        this.prod_cart = this.fetchData()
        this.sum = this.fetchDataSum()
      },
      updateCart: function (id) {
        this.prod_cart = this.fetchData()
        this.sum = this.fetchDataSum()
      }
    },
    components: {
      ProductCart
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
