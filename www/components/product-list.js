Vue.component('product-list', {
    components: {
        'product-search': productSearch,
        'product': product
    },
    template: `
        <div class="container">
            <header>
                <h1 class="pageTitle">商品一覧</h1>
                <product-search :condition="condition" :result="result"></product-search>
            </header>
            <div v-if="isError" class="error">{{message}}</div>
            <div v-if="result.length > 0" class="list">
                <product v-for="product in result" :product="product" :key="product.id"></product>
            </div>
        </div>
    `,
    props: ['condition', 'products', 'isError', 'message'],
    computed: {
        match: function () {
            return this.condition.showSaleItem && this.condition.showDelvFree ? function (product) { return product.isSale && product.delv == 0 }
                : this.condition.showSaleItem ? function (product) { return product.isSale }
                    : this.condition.showDelvFree ? function (product) { return product.delv == 0 }
                        : function () { return true };
        },
        result: function () {
            var result = [];
            for (var i = 0; i < this.products.length; i++) {
                if (this.match(this.products[i])) {
                    result.push(this.products[i]);
                }
            }
            switch (this.condition.sortOrder) {
                case 2:
                    result.sort(function (a, b) { return a.price - b.price; });
                    break;
            }
            return result;
        }
    }
})