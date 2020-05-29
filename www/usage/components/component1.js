Vue.component(
    'component1', {
    template: `
        <fieldset>
            <legend>component1</legend>
            <div>text1 is {{text1}}</div>
            <div>text2 is {{text2}}</div>
            <div>text3 is {{text3}}</div>
            <div>
                <input type="text" v-model="component1Text4">
                <div>component1Text4 is {{component1Text4}}</div>
            </div>
            <div>number1 is {{number1}}</div>
            <div>object1 is {{object1}}</div>
            <div>array1 is {{array1}}</div>
        </fieldset>
    `,
    data: function () {
        return {
            'component1Text4': this.text4
        }
    },
    props: {
        text1: {},
        text2: {
            type: String,
            required: true
        },
        text3: {
            type: String,
            default: 'default text3'
        },
        text4: {
            type: String,
            validator: function (value) {
                return value.length > 8;
            }
        },
        number1: {
            type: Number,
            default: 0
        },
        object1: {
            type: Object,
            default: function () {
                return {}
            }
        },
        array1: {
            type: Array,
            default: function () {
                return []
            }
        }
    }
});
