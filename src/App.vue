<template>
  <div id="app">
    <a href="/"><img src="./assets/logo.png"></a>
      <a class="cart-informer" href="/#/cart">
        <img src="./assets/Cart-icon.png" />
        <span>{{ cart_count }}</span>
      </a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cart_count: localStorage.getItem('cart_count') ? localStorage.getItem('cart_count') : 0
    }
  },
  mounted: function () {
    var self = this
    this.$root.$on('cart_count', function (count) {
      self.cart_count = count
    })
  },
  beforeCreate: function () {
    let products_arr = [
      {id: 1, title: 'Product1', text: 'Some text to describe product1', price: 300},
      {id: 2, title: 'Product2', text: 'Some text to describe product2', price: 400},
      {id: 3, title: 'Product3', text: 'Some text to describe product3', price: 500},
      {id: 4, title: 'Product4', text: 'Some text to describe product4', price: 600},
      {id: 5, title: 'Product5', text: 'Some text to describe product5', price: 700},
      {id: 6, title: 'Product6', text: 'Some text to describe product6', price: 800},
      {id: 7, title: 'Product7', text: 'Some text to describe product7', price: 900},
      {id: 8, title: 'Product8', text: 'Some text to describe product8', price: 1000}
    ]
    localStorage.setItem('products', JSON.stringify(products_arr));
  }
}
</script>

<style>
#app {
  text-align: center;
}
a.cart-informer {
  display: block;
}
a.cart-informer:hover {
  text-decoration: none;
}
a.cart-informer span {
  font-size: 31px;
  vertical-align: middle;
  margin-left: 20px;
}
a.cart-informer img {
  width: 65px;
  vertical-align: middle;
  border-radius: 50%;

}
a.cart-informer img:hover {
  box-shadow: 0px 0px 5px #000;
}
</style>
