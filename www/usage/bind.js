var app = new Vue({
    el: '#app',
    data: {
        attrs: { type: "text", size: 12, maxlength: 15, required: true, placeholder: "placeholder", value: "" },
        text1: "text1",
        style1: { backgroundColor: 'Yellow', fontWeight: 'bold' },
        style2: { 'background-color': 'Yellow', 'font-weight': 'bold' },
        style3: {
            border: 'solid 2px #f00', borderRadius: "4px", color: "#00f"
        },
        url: "http://www.wings.msn.to/",
        class1: { a: true, b: false },
        class2: "c"
    }
});
