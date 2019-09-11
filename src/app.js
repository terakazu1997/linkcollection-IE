Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    }
})
Vue.use(window.VueInfiniteLoading);

var app  = new Vue({
    el:"#app",
    router:router,
    store:store,
})