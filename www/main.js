var app = new Vue({
    el: '#app',
    data: {
        message: '',
        stock: 10
    },
    methods: {
        onDeleteItem: function () {
            this.stock--
        }
    },
    computed: {
        statusMessage: function (newStock, oldStock) {
            return this.stock == 0 ? '売り切れ' : ''
        }
    }
})