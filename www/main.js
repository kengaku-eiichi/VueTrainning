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
        statusMessage: function () {
            return this.stock == 0 ? '売り切れ' : ''
        }
    },
    watch: {
        statusMessage: function (newValue, oldValue) {
            console.log('商品のステータスメッセージが「' + oldValue + '」から「' + newValue + '」に変更されました')
        }
    }
})