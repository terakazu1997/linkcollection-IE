Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path: '/',
            name:'all',
            component:mainComponent
        },
        {
            path:'/site',
            name:'site',
            component: mainComponent
        },
        {
            path:'/folder',
            name:'folder',
            component: mainComponent
        },
        {
            path:'/file',
            name:'file',
            component: mainComponent
        }
    ]
})