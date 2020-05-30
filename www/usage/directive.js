Vue.directive('hightlight', {
    bind: (el, binding, vnode, oldVnoe) => {
        el.style.backgroundColor = binding.value;
    }
});
Vue.directive('hightlight2', {
    inserted: (el, binding, vnode, oldVnoe) => {
        el.style.backgroundColor = binding.value;
    }
});
Vue.directive('hightlight3', {
    update: (el, binding, vnode, oldVnoe) => {
        el.style.backgroundColor = binding.value;
    }
});
Vue.directive('hightlight4', {
    componentUpdated: (el, binding, vnode, oldVnoe) => {
        el.style.backgroundColor = binding.value;
    }
});
Vue.directive('hightlight5', {
    unbind: (el, binding, vnode, oldVnoe) => {
        el.style.backgroundColor = binding.value;
    }
});
Vue.directive('hightlight6', {
    bind: (el, binding, vnode, oldVnoe) => {
        el.addEventListener('mouseenter', function (e) {
            this.style['background-color'] = binding.value;
        }, false);
        el.addEventListener('mouseleave', function (e) {
            this.style.removeProperty('background-color');
        }, false);
    }
});

var app = new Vue({
    el: '#app',
    data: {
        colors: ['Red', 'Green', 'Blue'],
        color: 'Green'
    }
});
