Vue.filter('number_format', function (val) {
    return val.toLocaleString();
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
        options: [
            { id: 1, name: 'BGM手配', price: 5500, description: '当社で曲を手配させていただく場合は、１曲あたり5,400円（税込）かかります。', type: 'checkbox', checked: false },
            { id: 2, name: '撮影', price: 5500, description: '当社に撮影を依頼する場合の料金です。', type: 'checkbox', checked: false },
            { id: 3, name: 'DVD盤面印刷', price: 5500, description: '当社でDVDの盤面をデザインさせていただく場合は、5,400円（税込）かかります。', type: 'checkbox', checked: false },
            { id: 4, name: '写真スキャニング', price: 550, description: 'プリントアウトした写真のスキャニングをご希望の方は、１枚当たり540円で承ります。', type: 'number', quantity: 0, minQuantity: 0, maxQuantity: 30 }
        ]
    },
    created: function () {
        this.created = true;
    },
    computed: {
        sum_base: function () {
            return 32400;
        },
        sum_opt: function () {
            return 0;
        },
        total: function () {
            return 32400;
        }
    }
});