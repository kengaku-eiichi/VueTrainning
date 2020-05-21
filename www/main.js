var app = new Vue({
    el: '#app',
    data: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    created: function () {
        addEventListener('resize', this.resizeHandler);
    },
    beforeDestroy: function () {
        removeEventListener('resize', this.resizeHandler);
    },
    methods: {
        resizeHandler: function (e) {
            this.width = e.target.innerWidth;
            this.height = e.target.innerHeight;
        }
    },
})