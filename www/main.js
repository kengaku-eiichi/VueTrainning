var app = new Vue({
    el: '#app',
    data: {
        color: '#000000',
        red: 0,
        green: 0,
        blue: 0
    },
    computed: {
        colorElement: function () {
            return [this.red, this.green, this.blue];
        }
    },
    watch: {
        colorElement: function (newValue, oldValue) {
            var r = ('00' + newValue[0].toString(16).toUpperCase()).slice(-2);
            var g = ('00' + newValue[1].toString(16).toUpperCase()).slice(-2);
            var b = ('00' + newValue[2].toString(16).toUpperCase()).slice(-2);
            this.color = '#' + r + g + b;
        },
        color: function (newValue, oldValue) {
            this.red = parseInt(newValue.substr(1, 2), 16);
            this.green = parseInt(newValue.substr(3, 2), 16);
            this.blue = parseInt(newValue.substr(5, 2), 16);
        }
    }
})