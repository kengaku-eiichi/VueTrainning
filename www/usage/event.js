var app = new Vue({
    el: '#app',
    data: {
        text1: "",
        text2: "",
        text3: ""
    },
    methods: {
        clear1: function () {
            this.text1 = "";
        },
        clear2: function () {
            this.text2 = "";
        },
        help: function () {
            window.alert('help message');
        },
        rightClick: function (e) {
            window.alert("right clicked. position is " + e.clientX + ',' + e.clientY)
        },
        ctrlRightClick: function (e) {
            window.alert("ctrl + right clicked. position is " + e.clientX + ',' + e.clientY)
        }
    }
});
