var app = new Vue({
    el: '#app',
    data: {
        category: []
    },
    computed: {
        selectedCategory: function () {
            return this.category.length > 0 ? this.category.join() : ''
        }
    }
})