Vue.component('product', {
    template: `
        <div>
            <span>{{product.name}}</span>：<span>{{product.price}}（円）</span>
            <button v-on:click="onPriceDownClick">値下げする</button>
        </div>`,
    props: ['product'],
    methods: {
        onPriceDownClick: function (e) {
            this.$emit('price-down-click', this);
        }
    }
});