Vue.filter('number_format', function (val) {
    return val == null ? '' : val.toLocaleString();
});

var app = new Vue({
    el: '#app',
    data: {
        created: false,
        movies: [
            { id: 1, name: '余興ムービー' },
            { id: 2, name: 'サプライズムービー' },
            { id: 3, name: '生い立ちムービー' },
            { id: 4, name: 'オープニングムービー' },
        ],
        checkedMovie: 1,
        wedding_date: null,
        delivery_date: null,
        basicPlan: { price: 30000, taxRate: 0.1 },
        options: [
            { id: 1, name: 'BGM手配', price: 5000, taxRate: 0.1, description: '当社で曲を手配させていただく場合は、１曲あたり5,500円（税込）かかります。', type: 'checkbox', checked: false },
            { id: 2, name: '撮影', price: 5000, taxRate: 0.1, description: '当社に撮影を依頼する場合の料金です。', type: 'checkbox', checked: false },
            { id: 3, name: 'DVD盤面印刷', price: 5000, taxRate: 0.1, description: '当社でDVDの盤面をデザインさせていただく場合は、5,500円（税込）かかります。', type: 'checkbox', checked: false },
            { id: 4, name: '写真スキャニング', price: 500, taxRate: 0.1, description: 'プリントアウトした写真のスキャニングをご希望の方は、１枚当たり550円で承ります。', type: 'number', quantity: 0, minQuantity: 0, maxQuantity: 30 }
        ]
    },
    created: function () {
        this.created = true;

        var d = new Date;

        d.setMonth(d.getMonth() + 2);
        this.wedding_date = d.toISOString().substr(0, 10);

        d.setDate(d.getDate() - 7);
        this.delivery_date = d.toISOString().substr(0, 10);
    },
    methods: {
        add_consumption_tax: function (price, taxRate) {
            return Math.floor(price * (1 + taxRate));
        }
    },
    computed: {
        min_delivery_date: function () {
            var d = new Date;
            d.setDate(d.getDate() + 1);
            return d.toISOString().substr(0, 10);
        },
        sum_base: function () {
            if (!this.delivery_date) return null;

            var price = this.basicPlan.price;
            var today = new Date((new Date).toISOString().substr(0, 10));
            var nextMonth = new Date(today);
            nextMonth.setMonth(nextMonth.getMonth() + 1);

            var delivery_date = new Date(this.delivery_date);
            var subdate = (delivery_date - today) / (24 * 60 * 60 * 1000);
            if (subdate < 1) return null;
            if (delivery_date < nextMonth) {
                price += subdate == 1 ? 50000
                    : subdate == 2 ? 45000
                        : subdate == 3 ? 40000
                            : subdate < 7 ? 20000
                                : subdate < 14 ? 15000
                                    : subdate < 21 ? 10000
                                        : 5000;
            }
            return this.add_consumption_tax(price, this.basicPlan.taxRate);
        },
        sum_opt: function () {
            var price = 0;
            for (var i = 0; i < this.options.length; i++) {
                var option = this.options[i];
                if (option.checked) price += this.add_consumption_tax(option.price, option.taxRate);
                if (option.quantity > 0) price += this.add_consumption_tax(option.price * option.quantity, option.taxRate);
            }
            return price;
        },
        total: function () {
            return this.sum_base == null || this.sum_opt == null ? null
                : this.sum_base + this.sum_opt;
        }
    }
});