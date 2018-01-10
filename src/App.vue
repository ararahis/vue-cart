<template>
  <div id="app">
    <a class="cart-informer" href="/#/cart">
      <img src="./assets/Cart-icon.png" />
      <span>{{ cart_count }}</span>
    </a>
    <router-view/>
  </div>
</template>

<script>
  var ttt = 'ggg'

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
    }
  }
</script>

<style>
  #app {
    text-align: center;
    margin-top: 50px;
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
