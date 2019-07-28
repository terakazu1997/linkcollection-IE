Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path: '/',
            component:headComponent,
            children:[
                {
                    path: '/',
                    component:allComponent
                },
                {
                    path:'/site',
                    component: siteComponent
                },
                {
                    path:'/folder',
                    component: folderComponent
                },
                {
                    path:'/file',
                    component: fileComponent
                },
            ]
        }
    ]
})