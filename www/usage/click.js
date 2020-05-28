var app = new Vue({
    el: '#app',
    data: {
        clickCount: 0
    },
    methods: {
        onclick: function (e) {
            this.clickCount++;
        }
    }
});
