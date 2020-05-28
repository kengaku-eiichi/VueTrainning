Vue.component('show-hello', {
    template: '<p>{{message}}</p>',
    data: function () {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {

    },
    computed: {

    },
    watch: {

    },
    filters: {

    },
    created: {

    }
});

var app = new Vue({
    el: '#app'
});