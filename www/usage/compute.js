var app = new Vue({
    el: '#app',
    data: {
        email: 'userName@domain.com'
    },
    computed: {
        localEmail: function () {
            return this.email.split("@")[0];
        }
    }
});
