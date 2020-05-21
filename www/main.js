var app = new Vue({
    el: '#app',
    data: {
        point: {
            x: 0, y: 0
        }
    },
    created: function () {
        addEventListener('mousemove', this.mousemoveHandler);
    },
    beforeDestroy: function () {
        removeEventListener('mousemove', this.mousemoveHandler);
    },
    methods: {
        mousemoveHandler: function (e) {
            this.point.x = e.clientX;
            this.point.y = e.clientY;
        }
    },
})