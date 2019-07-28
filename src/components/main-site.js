const siteComponent = {
    props:{
        defaultKeyword:{
            type:String
        }
    },
    template:"<main-component :lists='siteLinks' :keyword='defaultKeyword'></main-component>",
    components:{
        'main-component':mainComponent,
    },
    data:function(){
        return{
            siteLinks:defaultSiteLinks
        }
    }
}