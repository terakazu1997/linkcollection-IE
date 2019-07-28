const allComponent = {
    props:{
        defaultKeyword:{
            type:String
        }
    },
    template:"<main-component :lists='allLinks' :keyword='defaultKeyword'></main-component>",
    components:{
        'main-component':mainComponent,
    },
    data:function(){
        return{
            allLinks:createAllLinks(defaultSiteLinks,defaultFolderLinks,defaultFileLinks)
        }
    }
}