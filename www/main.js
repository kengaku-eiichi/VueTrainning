var app = new Vue({
    el: '#app',
    data: {
        price: 1000
    },
    filters: {
        number_format: function (val) {
            return val.toLocaleString()
        },
        unit: function (val) {
            return val + '円';
        }
    }
})