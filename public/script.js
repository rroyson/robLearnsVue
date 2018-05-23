new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [{ title: 'item 1' }, { title: 'item 2' }, { title: 'item 3' }],
    cart: []
  },
  methods: {
    addItem: function(index) {
      this.total += 9.99
      this.cart.push(this.items[index])
    }
  }
})
