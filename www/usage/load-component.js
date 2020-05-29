var app = new Vue({
    el: '#app',
    data: {
        text1: "load-component text1",
        text4: "load-component text4"
    },
    components: {
        'component2': {
            template: `
                <fieldset>
                    <legend>component2</legend>
                    <div><slot></slot></div>
                </fieldset>
            `
        },
        'component3': {
            template: `
                <fieldset>
                    <legend>component3</legend>
                    <header><slot name="header"></slot></header>
                    <div><slot></slot></div>
                    <footer><slot name="footer"></slot></footer>
                </fieldset>
            `
        }
    }
});
