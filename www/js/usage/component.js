var app = new Vue({
    el: '#app',
    data: {
        created: false,
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
});