export const PRODS =  [
  {id: 1, title: 'Product1', text: 'Some text to describe product1', price: 300},
  {id: 2, title: 'Product2', text: 'Some text to describe product2', price: 400},
  {id: 3, title: 'Product3', text: 'Some text to describe product3', price: 500},
  {id: 4, title: 'Product4', text: 'Some text to describe product4', price: 600},
  {id: 5, title: 'Product5', text: 'Some text to describe product5', price: 700},
  {id: 6, title: 'Product6', text: 'Some text to describe product6', price: 800},
  {id: 7, title: 'Product7', text: 'Some text to describe product7', price: 900},
  {id: 8, title: 'Product8', text: 'Some text to describe product8', price: 1000}
]

let cart_list = JSON.parse(localStorage.getItem('cart_list'));
let cart_count = localStorage.getItem('cart_count');
export const CART_ITEMS = {'cart_list': cart_list, 'cart_count': cart_count}
