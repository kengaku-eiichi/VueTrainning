Vue.component('product', {
    template: `
        <tr>
            <td>{{product.name}}</td>
            <td style="text-align:right;">{{product.price}}（円）</td>
            <td><button v-on:click="onPriceDownClick">値下げする</button></td>
        </tr>`,
    props: ['product'],
    methods: {
        onPriceDownClick: function (e) {
            this.$emit('price-down-click', this);
        }
    }
});