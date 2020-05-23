Vue.filter('number_format', function (val) {
    return val.toLocaleString();
});
var app = new Vue({
    el: '#app',
    data: {
        created: false,
        count: 0,
        showSaleItem: false,
        showDelvFree: false,
        sortOrder: 1,
        products: [],
        isError: false,
        message: ''
    },
    created: function () {
        this.isError = false;
        $.ajax({
            url: '/api/products.js',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'products'
        }).done(function (data, status, jqXHR) {
            app.products = data;
        }).fail(function (jqXHR, status, ex) {
            app.isError = true;
            app.message = '商品一覧の読み込みが失敗しました。' + ex.toString();
        });

        this.created = true;
    },
    methods: {
        showExpression: function (product) {
            return this.showSaleItem && this.showDelvFree ? product.isSale && product.delv == 0
                : this.showSaleItem ? product.isSale
                    : this.showDelvFree ? product.delv == 0
                        : true;
        }
    },
    computed: {
        filteredList: function () {
            var sortedList = [];
            for (var i = 0; i < this.products.length; i++) sortedList.push(this.products[i]);
            switch (this.sortOrder) {
                case 2:
                    sortedList.sort(function (a, b) { return a.price - b.price; });
                    break;
            }
            var showExpression = this.showSaleItem && this.showDelvFree ? function (product) { return product.isSale && product.delv == 0 }
                : this.showSaleItem ? function (product) { return product.isSale }
                    : this.showDelvFree ? function (product) { return product.delv == 0 }
                        : function () { return true };
            this.count = 0;
            var filteredList = [];
            for (var i = 0; i < sortedList.length; i++) {
                if (showExpression(sortedList[i])) {
                    this.count++;
                    filteredList.push(sortedList[i]);
                }
            }
            return filteredList;
        }
    }
});
