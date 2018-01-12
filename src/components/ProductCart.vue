<template>
      <tr>
        <td class="col-sm-8 col-md-6">
          <div class="media">
            <a class="thumbnail pull-left"> <img class="media-object" src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" style="width: 72px; height: 72px;"> </a>
            <div class="media-body">
              <h4 class="media-heading"><a>{{ prod.title }}</a></h4>
            </div>
          </div></td>
        <td class="col-sm-1 col-md-1" style="text-align: center">
          <input type="number" min="0" max="99" id="qty" v-model="prod.qty"  @change="changeQtyProduct(prod.id,prod.qty)" class="form-control" />
        </td>
        <td class="col-sm-1 col-md-1 text-center"><strong>{{ prod.price | currency }}</strong></td>
        <td class="col-sm-1 col-md-1 text-center"><strong>{{ prod.price*prod.qty | currency }}</strong></td>
        <td class="col-sm-1 col-md-1">
          <button type="button" class="btn btn-danger" @click="deleteFromCart(prod.id)">
            <span class="glyphicon glyphicon-remove"></span> Remove
          </button></td>
      </tr>
</template>

<script>
  import {CART_ITEMS} from '../params.js'

  export default {
    name: 'ProductCart',
    props: ['prod','cart_count'],
    filters: {
      currency(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    },
    methods: {
      updateCartCount () {
        let cart_list = CART_ITEMS.cart_list
        let cart_count = 0
        for (let key in cart_list) cart_count = cart_count + cart_list[key]
        CART_ITEMS.cart_count = cart_count
        this.$root.$emit('cart_count', cart_count)
      },
      changeQtyProduct (id,qty) {
        let cart_list = CART_ITEMS.cart_list
        cart_list[id] = parseInt(qty)
        CART_ITEMS.cart_list = cart_list

        this.updateCartCount()
        this.$emit('update-cart')
      },
      deleteFromCart (id) {
        let cart_list = CART_ITEMS.cart_list
        delete cart_list[id]
        CART_ITEMS.cart_list = cart_list

        this.updateCartCount()
        this.$emit('delete-from-cart', id)
      }
    }
  }
</script>
