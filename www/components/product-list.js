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
            <div v-if="result.list.length > 0" class="list">
                <product v-for="product in result.list" :product="product" :key="product.id"></product>
            </div>
        </div>
    `,
    data: function () {
        return {
            condition: {
                showSaleItem: false,
                showDelvFree: false,
                sortOrder: 1,
            },
            result: {
                list: [],
                isError: false,
                message: ''
            }
        }
    },
    computed: {
        match: function () {
            return this.condition.showSaleItem && this.condition.showDelvFree ? function (product) { return product.isSale && product.delv == 0 }
                : this.condition.showSaleItem ? function (product) { return product.isSale }
                    : this.condition.showDelvFree ? function (product) { return product.delv == 0 }
                        : function () { return true };
        },
        computedCondition: function () {
            return JSON.stringify(this.condition);
        }
    },
    methods: {
        search: function () {
            var self = this;
            self.result.isError = false;
            $.ajax({
                url: '/api/products.js',
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'products'
            }).done(function (products, status, jqXHR) {
                self.result.list = [];
                for (var i = 0; i < products.length; i++) {
                    if (self.match(products[i])) {
                        self.result.list.push(products[i]);
                    }
                }
                switch (self.condition.sortOrder) {
                    case 2:
                        self.result.list.sort(function (a, b) { return a.price - b.price; });
                        break;
                }
            }).fail(function (jqXHR, status, ex) {
                self.result.isError = true;
                self.result.message = '商品一覧の読み込みが失敗しました。' + ex.toString();
            });
        }
    },
    created: function () {
        this.search();
    },
    watch: {
        computedCondition: function (newValue, oldValue) {
            this.search();
        }
    }
})