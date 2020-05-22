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
            { id: 1, name: 'Michael<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true },
            { id: 2, name: 'Raphael<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true },
            { id: 3, name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 240, isSale: true },
            { id: 4, name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.jpg', delv: 0, isSale: true },
            { id: 5, name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false },
            { id: 6, name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false }
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
