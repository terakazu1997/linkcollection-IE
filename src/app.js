Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    }
})

var app  = new Vue({
    el:"#app",
    data:{
        keyword:''
    },
    router:router,
})