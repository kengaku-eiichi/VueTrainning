var app = new Vue({
    el: '#app',
    data: {
        text1: "text1",
        text2: "text2",
        text3: [],
        sex: null,
        checked: true,
        flag: 1,
        multiCheck: [1, 3],
        selectedValue: null,
        multiSelect: []
    },
    computed: {
        sexText: function () {
            return this.sex == 1 ? '男性'
                : this.sex == 2 ? '女性'
                    : 'その他';
        }
    }
});
