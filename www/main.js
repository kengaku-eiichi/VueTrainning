var app = new Vue({
    el: '#app',
    data: {
        year: (new Date).getFullYear()
    },
    methods: {
        yearInputHandler: function (e) {
            this.year = e.target.value;
        }
    }
})