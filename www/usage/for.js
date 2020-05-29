var app = new Vue({
    el: '#app',
    data: {
        month: null,
        books: [
            { isbn: "123-4-5678-9-1", title: "書籍1", price: 1980 },
            { isbn: "123-4-5678-9-2", title: "書籍2", price: 2980 },
            { isbn: "123-4-5678-9-3", title: "書籍3", price: 3480 },
            { isbn: "123-4-5678-9-4", title: "書籍4", price: 2180 },
        ],
        array: [1, 2, 3, 4, 5],
        array2: [1, 2, 3, 4, 5]
    },
    methods: {
        reduce: function () {
            for (var i = 0; i < this.books.length; i++) {
                this.books[i].price -= 100;
            }
        },
        arrayChange: function (e) {
            for (var i = 0; i < this.array.length; i++) {
                this.array[i] = this.array.length + 1 - this.array[i];
            }
        },
        arrayOverwrite: function (e) {
            this.array2 = [5, 4, 3, 2, 1];
        }
    }
});
