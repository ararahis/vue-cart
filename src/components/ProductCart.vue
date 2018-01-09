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
        let cart_list = JSON.parse(localStorage.getItem('cart_list'))
        let cart_count = 0
        for (let key in cart_list) cart_count = cart_count + cart_list[key]
        localStorage.setItem('cart_count', cart_count)
        this.$root.$emit('cart_count', cart_count)
      },
      changeQtyProduct (id,qty) {
        let cart_list = JSON.parse(localStorage.getItem('cart_list'))
        cart_list[id] = parseInt(qty);
        localStorage.setItem('cart_list', JSON.stringify(cart_list))

        this.updateCartCount()
        this.$emit('update-cart')
      },
      deleteFromCart (id) {
        let cart_list = JSON.parse(localStorage.getItem('cart_list'))
        delete cart_list[id];
        localStorage.setItem('cart_list', JSON.stringify(cart_list))

        this.updateCartCount()
        this.$emit('delete-from-cart', id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{max-width:100%;}
  *{transition: all .5s ease;-moz-transition: all .5s ease;-webkit-transition: all .5s ease}
  .my-list {
    width: 100%;
    padding: 10px;
    border: 1px solid #f5efef;
    float: left;
    margin: 15px 0;
    border-radius: 5px;
    box-shadow: 2px 3px 0px #e4d8d8;
    position:relative;
    overflow:hidden;
  }
  .my-list h3{
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    margin: 0px;
    padding: 0px;
    border-bottom: 1px solid #ccc4c4;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
  .my-list span{float:left;font-weight: bold;}
  .my-list span:last-child{float:right;}
  .my-list .offer{
    width: 100%;
    float: left;
    margin: 5px 0;
    margin-top: 5px;
    padding-top: 5px;
    font-weight: 600;
    color: #000;
  }
  .detail {
    position: absolute;
    top: -100%;
    left: 0;
    text-align: center;
    background: #fff;height: 100%;width:100%;

  }

  .my-list:hover .detail{top:0;}
</style>
