Vue.filter('number_format', function (val) {
    return val.toLocaleString();
});
var app = new Vue({
    el: '#app',
    data: {
        count: 0,
        showSaleItem: false,
        showDelvFree: false,
        sortOrder: 1,
        products: [
            { name: 'Michael<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true },
            { name: 'Raphael<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true },
            { name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 240, isSale: true },
            { name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.jpg', delv: 0, isSale: true },
            { name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false },
            { name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false }
        ]
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
            showExpression = this.showSaleItem && this.showDelvFree ? function (product) { return product.isSale && product.delv == 0 }
                : this.showSaleItem ? function (product) { return product.isSale }
                    : this.showDelvFree ? function (product) { return product.delv == 0 }
                        : function () { return true };
            this.count = 0;
            var filteredList = [];
            for (var i = 0; i < this.products.length; i++) {
                if (showExpression(this.products[i])) {
                    this.count++;
                    filteredList.push(this.products[i]);
                }
            }
            return filteredList;
        }
    }
});
