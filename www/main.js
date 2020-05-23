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
        products: []
    },
    created: function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                app.products = this.response;
            }
        };
        xhr.responseType = 'json';
        xhr.open('GET', 'products.json');
        xhr.send();

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
